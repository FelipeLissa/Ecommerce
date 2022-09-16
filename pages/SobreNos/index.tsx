import Head from "next/head"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Sobre } from "../../components/Sobre"


export default function SobreNos () {
    return (
        <><Head>
            <title> Sobre Nós </title>

            <meta
                name="description"
                content="Loja de Eletrônicos Brasileira" />
            <meta
                property="og:description"
                content="Loja de Eletrônicos Brasileira" />
        </Head>


            <Header></Header>
            <Sobre></Sobre>
            <Footer></Footer>
            
            </>
           
    )
}