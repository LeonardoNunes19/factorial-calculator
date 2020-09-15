import React, { useState } from 'react'
import '../styles/FormInput.css'

export default props => {

    const [text, setText] = useState('')

    const submitText = () => {
        props.onSubmit(text)
        setText('')

        const input = document.getElementById('inputNumber')
        input.focus()
    }

    return (
        <div id='formContainer'>
            <input 
                id='inputNumber'
                type='text'
                size={20}
                placeholder='Digite um número natural'
                onChange={(text) => setText(text.target.value)}
                value={text}
                onKeyPress={(event) => event.key === 'Enter' && submitText()}
            />
            <button
                id='submitButton'
                onClick={() => submitText()}
            >Calcular</button>
        </div>
    )
}