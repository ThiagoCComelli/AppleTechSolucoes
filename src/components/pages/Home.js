import React from 'react'
import './Home.css'
import Main from '../Main'
import News from '../News'

function Home(props){
    return (
        <>
            <Main />
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
            <ins class="adsbygoogle"
                    style="display:block"
                    data-ad-client="ca-pub-4206059090363101"
                    data-ad-slot="9220517382"
                    data-ad-format="auto"
                    data-full-width-responsive="true"></ins>
            <script>
                    (adsbygoogle = window.adsbygoogle || []).push({});
            </script>
            <News />
        </>
    )
}

export default Home