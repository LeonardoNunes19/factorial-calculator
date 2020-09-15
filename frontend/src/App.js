import React, { Component } from 'react'
import APIService from './services/APIService'
import './styles/App.css'
import FormInput from '../src/components/FormInput'
import HistoryList from '../src/components/HistoryList'

export default class App extends Component {
  
  state = {
    history: [],
    invalidInput: false,
  }
  
  isNatural = (n) => {
    return typeof(n) === "number" && n % 1 === 0 && Number(n) >= 0
  }
  
  addResponseToHistory = (response) => {
    let history = this.state.history
    history = history.concat(response)
    this.setState({history})
  }
  
  handleSubmit = async (text) => {
    const number = Number(text)
    
    if (this.isNatural(number) && text !== '') {
      this.setState({invalidInput: false})
      
      const response = await APIService.postNumber(number)
      
      this.addResponseToHistory(response)
      
      this.scrollToEnd('divToScroll')
      
    } else {
      this.setState({invalidInput: true})
    }
  }
  
  scrollToEnd = (id) => {
    let lastNumber = document.getElementById(id)
    lastNumber.scrollIntoView(true)
  }
  
  showWarning = () => 'Entrada inválida!'

  render() {
    return (
      <div id='app'>
        <h1>Factorial calculator</h1>
        <div id='container'>
          <div id='form'>
            <FormInput 
              onSubmit={this.handleSubmit}
            />
            <div id='informationToClient'>
              <p> {this.state.invalidInput && this.showWarning()} </p>
            </div>
          </div>
          <div id='history'>
            <HistoryList history={this.state.history}/>
          </div>
        </div>
      </div>
    )
  }
}