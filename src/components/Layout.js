import React from 'react'
import Header from '../components/Header'
import Helmet from 'react-helmet'
import Footer from '../components/Footer'
import './Layout.css'
import UseSeo from '../hooks/useSeo'

const Layout = (props) => {

    const seo = UseSeo()

    const { siteName , fallbackSeo:{title , description }} = seo

    return (
        <>
        
        
        <Helmet>
            <title>{siteName}</title>
            <meta name="description" content={description}/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" />
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto:wght@100;500&display=swap" rel="stylesheet"/>
        </Helmet>

        <Header/>
        {props.children}

        <Footer
            title={title}
        />

       </>
    )
}

export default Layout
