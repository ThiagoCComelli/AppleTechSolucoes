import React,{useState} from 'react'
import '../styles/Price.css'
import '../styles/RepairForm.css'

const PriceItem = (props) => {
    const [state,setState] = useState(false)
    return(
        <>
        <div onClick={(e) => {
            setState(!state)
        }} className="cardPrice">
            <div className="cardPriceDesc">
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </div>
            <div className={`cardPriceMain ${state ? "active" : ""}`}>
                <div id={`id${props.title}`} className="card-imagePrice">
                    <img src={props.image} alt="Servicos"/>
                </div>
                <div className="cardPriceTitle">
                    <h2>{props.title}</h2>
                </div>
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
                <h4>Preço de serviços</h4>
            </div>
            <div className="priceContents">
                <PriceItem price='R$15' image={`${process.env.PUBLIC_URL}/images/image4-min.jpg`} title='Bronze' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
                <PriceItem price='R$25' image={`${process.env.PUBLIC_URL}/images/image5-mim.png`} title='Prata' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
                <PriceItem price='R$40' image={`${process.env.PUBLIC_URL}/images/image5-mim2.png`} title='Ouro' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
            </div>
        </div>
        </>
    )
}