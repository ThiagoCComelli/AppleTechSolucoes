import React from 'react'
import '../styles/Price.css'
import '../styles/RepairForm.css'

const PriceItem = (props) => {
    return(
        <>
        <div className={`cardPrice ${props.title}Price`}>
            <img className="priceAward" src={`${process.env.PUBLIC_URL}/images/${props.title}.png`} alt={`${props.title}`}></img>
            <div className="card-imagePrice">
                <img src={props.image} alt="Servicos"/>
                <div className="cardPriceDiv">
                    <strong>{props.price}</strong>
                </div>
            </div>
            <div className="card-titlePrice">
                <strong>{props.title}</strong>
            </div>
            <div className="card-descPrice">
                <p>{props.text}</p>
            </div>
        </div>
        </>
    )
}

export default function Price(){
    return (
        <>
        <div className="MainPriceItens">
            <div className="center">
                <h4>Preco de serviços</h4>
            </div>
            <div className="priceContents">
                <PriceItem price='R$15' image={`${process.env.PUBLIC_URL}/images/image3.jpeg`} title='Bronze' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
                <PriceItem price='R$25' image={`${process.env.PUBLIC_URL}/images/image3.jpeg`} title='Prata' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
                <PriceItem price='R$40' image={`${process.env.PUBLIC_URL}/images/image3.jpeg`} title='Ouro' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
            </div>
        </div>
        </>
    )
}