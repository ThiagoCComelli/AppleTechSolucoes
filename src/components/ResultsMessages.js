import React, { Component } from 'react'
import './ResultsMessages.css'

class ResultMessages extends Component{
    componentDidMount(){
        var messageBox = document.getElementsByClassName("messageBox")[0]
        var messageText = document.getElementsByClassName("messageText")[0]
        var messageButton = document.getElementsByClassName("messageButtonBtn")[0]

        if(this.props.success === "success"){
            messageText.textContent = "Pedido realizado com sucesso!"
            messageBox.style.backgroundColor = "#D4EDDA"
            messageBox.style.borderColor = "#1a5729bb"
            messageBox.style.color = "#1A5729"
            messageButton.style.backgroundColor = "#D4EDDA"
            messageButton.style.borderColor = "#1A5729"
            messageButton.style.color = "#1A5729"
        }else{
            messageText.textContent = "Falha interna do sistema, tente mais tarde!"
            messageBox.style.backgroundColor = "#F8D7DA"
            messageBox.style.borderColor = "#76272F"
            messageBox.style.color = "#76272F"
            messageButton.style.backgroundColor = "#F8D7DA"
            messageButton.style.borderColor = "#76272F"
            messageButton.style.color = "#76272F"
        }
    }

    close(e){
        var messageBox = document.getElementsByClassName("allScreen")[0]

        messageBox.style.display = "none"
    }

    render(){
        return(
            <>
            <div className="allScreen">
                <div className="messageBox">
                    <div className="messageText">
                        ...
                    </div>
                    <div className="messageButton">
                        <button className="messageButtonBtn" onClick={(e) => this.close(e)}>Fechar</button>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default ResultMessages