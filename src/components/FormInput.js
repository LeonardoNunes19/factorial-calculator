import React from 'react'
import '../styles/FormInput.css'

export default props => {
    return (
        <div className='formContainer'>
            <input 
                className='inputNumber'
                type='text'
                size={20}
                placeholder='Digite um número inteiro'
                onChange={(text) => props.onChangeText(text.target.value)}
            />
            <button
                className='buttonSubmit'
                onClick={() => props.onSubmit()}
            >Calcular</button>
        </div>
    )
}