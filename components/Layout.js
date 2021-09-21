import Head from 'next/head'
import { useRouter } from 'next/router'

import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
    const router = useRouter()
    const { pathname } = router
    
    return(   
        pathname === '/registro'
            ?
                <>
                    <Head>
                        <link rel="preconnect" href="https://fonts.googleapis.com" />
                        <link rel="preconnect" href="https://fonts.gstatic.com" crossOriginLoading />        
                        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;700&display=swap" rel="stylesheet" />
                    </Head>
                    { children }
                </>
            :
            <>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOriginLoading />        
                    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;700&display=swap" rel="stylesheet" />
                </Head>
                <Header />
                { children }
                <Footer />
            </>     
    )
}

export default Layout