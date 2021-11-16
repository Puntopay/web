import Head from 'next/head'

const Layout = ({ children }) => {
    
    return(   
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOriginLoading />        
                <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;700&display=swap" rel="stylesheet" />
            </Head>
            { children }
        </>   
    )
    
}

export default Layout