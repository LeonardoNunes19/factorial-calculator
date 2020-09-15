import React, { useState } from 'react'
import '../styles/FormInput.css'

export default props => {

    const [text, setText] = useState('')

    const submitText = () => {
        props.onSubmit(text)
        setText('')
    }

    return (
        <div className='formContainer'>
            <input 
                className='inputNumber'
                type='text'
                size={20}
                placeholder='Digite um número inteiro'
                onChange={(text) => setText(text.target.value)}
                value={text}
            />
            <button
                className='buttonSubmit'
                onClick={() => submitText()}
            >Calcular</button>
        </div>
    )
}