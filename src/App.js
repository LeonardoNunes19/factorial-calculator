import React, { Component } from 'react'
import APIService from './services/APIService'
import './styles/App.css'
import FormInput from '../src/components/FormInput'
import HistoryList from '../src/components/HistoryList'

export default class App extends Component {
  
  state = {
    numberInput: '',
    history: [],
    invalidInput: false,
  }

  isInteger = (n) => {
    return typeof(n) === "number" && n % 1 === 0
  }

  addResponseToHistory = (response) => {
    let history = this.state.history
    history = history.concat(response)
    this.setState({history})
  }

  scrollToEnd = (id) => {
    let lastNumber = document.getElementById(id)
    lastNumber.scrollIntoView(true)
  }

  handleSubmit = async () => {
    const number = Number(this.state.numberInput)

    if (this.isInteger(number) && this.state.numberInput !== '') {
      this.setState({invalidInput: false})

      const response = await APIService.postNumber(number)

      this.addResponseToHistory(response)

      this.scrollToEnd('divToScroll')

    } else {
      this.setState({invalidInput: true})
    }
  }

  handleChangeText = (numberInput) => {
    this.setState({numberInput})
  }

  showWarning = () => 'Entrada inválida!'

  render() {
    return (
      <div className='app'>
        <div className='container'>
          <div className='form'>
            <FormInput 
              onSubmit={this.handleSubmit}
              onChangeText={this.handleChangeText}
            />
            <div id='informationToClient'>
              <p> {this.state.invalidInput && this.showWarning()} </p>
            </div>
          </div>
          <div className='history'>
            <HistoryList history={this.state.history}/>
          </div>
        </div>
      </div>
    )
  }
}