import React from 'react'
import '../styles/HistoryList.css'

export default props => {

    const history = props.history.map((content) => {
        return (
            <tr key={content.id}>
                <td id='numberCol'>{content.number}</td>
                <td id='factorialCol'>{content.factorial}</td>
            </tr>
        )
    })
    
    return (
        <div id='historyContainer'>
            <table>
                <thead>
                    <tr>
                        <th id='numberCol'>NÚMERO</th>
                        <th id='factorialCol'>FATORIAL</th>
                    </tr>
                </thead>
                <tbody>
                    {history}
                    <tr id="divToScroll"/>
                </tbody>
            </table>
        </div>
    )
}