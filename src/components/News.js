import React from 'react'
import { Link } from 'react-router-dom'
import './News.css'
// import NewsItem from './NewsItem'

const NewsItem = (props) => {
    return(
        <>
        <div className="card">
            <div className="card-image">
                <img src={props.image} alt="Servicos"/>
            </div>
            <div className="card-title">
                {props.title}
            </div>
            <div className="card-desc">
                <p>{props.text}</p>
            </div>
        </div>
        </>
    )
}

function News() {
    return (
        <>
        <div className="center">
            <h1 className="main-text">Artigos</h1>
        </div>
        <div className="contents">
            <Link to="/services">
                <NewsItem image={`${process.env.PUBLIC_URL}/images/image0.jpg`} title='Serviços' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac tortor nunc. Nullam et turpis at dui porta ultrices quis id risus. In posuere interdum commodo. Etiam auctor turpis eget lectus tristique volutpat. Donec tincidunt nisi tempor dolor tincidunt porttitor. Donec vitae sapien velit. Nunc imperdiet tristique urna quis convallis.'/>
            </Link>
            <Link to="/products">
                <NewsItem image={`${process.env.PUBLIC_URL}/images/image1.jpg`} title='Produtos' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac tortor nunc. Nullam et turpis at dui porta ultrices quis id risus. In posuere interdum commodo. Etiam auctor turpis eget lectus tristique volutpat. Donec tincidunt nisi tempor dolor tincidunt porttitor. Donec vitae sapien velit. Nunc imperdiet tristique urna quis convallis.'/>
            </Link>
            <Link to="/price">
                <NewsItem image={`${process.env.PUBLIC_URL}/images/image3.jpeg`} title='Preço' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac tortor nunc. Nullam et turpis at dui porta ultrices quis id risus. In posuere interdum commodo. Etiam auctor turpis eget lectus tristique volutpat. Donec tincidunt nisi tempor dolor tincidunt porttitor. Donec vitae sapien velit. Nunc imperdiet tristique urna quis convallis.'/>
            </Link>
            <Link to="/contact">
                <NewsItem image={`${process.env.PUBLIC_URL}/images/image6.jpg`} title='Contato' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac tortor nunc. Nullam et turpis at dui porta ultrices quis id risus. In posuere interdum commodo. Etiam auctor turpis eget lectus tristique volutpat. Donec tincidunt nisi tempor dolor tincidunt porttitor. Donec vitae sapien velit. Nunc imperdiet tristique urna quis convallis.'/>
            </Link>
        </div>
        </>
    )
}

export default News