import Head from "next/head"
import { Header } from "../../components/Header"


export default function Kits () {
    return (
        <><Head>
            <title> title </title>

            <meta
                name="description"
                content="Desenvolvedor Front-End especializado em React Next" />
            <meta property="og:image" content="/ogimage.png" />
            <meta property="og:image:secure_url" content="/ogimage.png" />
            <meta name="twitter:image" content="/ogimage.png" />
            <meta name="twitter:image:src" content="/ogimage.png" />
            <meta
                property="og:description"
                content="write description here" />
        </Head>


            <Header></Header>
            
            </>
           
    )
}