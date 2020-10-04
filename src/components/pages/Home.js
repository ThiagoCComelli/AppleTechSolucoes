import React from 'react'
import './Home.css'
import Main from '../Main'
import News from '../News'
import ResultMessages from '../ResultsMessages'

function Home(props){
    return (
        <>
            {props.location.state === undefined ? null : (props.location.state ? <ResultMessages success="success"/> : <ResultMessages success="error"/>)}
            <Main />
            <News />
        </>
    )
}

export default Home