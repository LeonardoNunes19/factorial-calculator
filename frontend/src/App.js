import React, { Component } from 'react'
import APIService from './services/APIService'
import './styles/App.css'
import FormInput from '../src/components/FormInput'
import HistoryList from '../src/components/HistoryList'

export default class App extends Component {
  
  state = {
    history: [],
    invalidInput: false,
    bigFactorial: false,
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
    
    if (this.isNatural(number) && text.trim() !== '') {
      this.setState({invalidInput: false})
      
      let response = ''

      if (number <= 170) {
        this.setState({bigFactorial: false})
        response = await APIService.postNumber(number)
      } else {
        this.setState({bigFactorial: true})
        return
      }

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
  
  showWarning = () => {
    if (this.state.invalidInput) {
      return 'Entrada inválida'
    } else if (this.state.bigFactorial) {
      return 'O fatorial é muito grande'
    }
  }

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
              <p> {this.showWarning()} </p>
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