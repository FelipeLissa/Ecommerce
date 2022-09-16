import type { NextPage } from 'next'
import Head from 'next/head'
import { Avaliacoes } from '../components/Avaliacoes'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { MenuAvaliacoes } from '../components/MenuAvaliacoes'
import { Menu } from '../components/MenuProdutos'
import { SubHeader } from '../components/SubHeader'
import { HomeContainer } from '../styles/HomeStyles'

const Home: NextPage = () => {
  return (
    console.log("Page height:",document.documentElement.scrollHeight),
    <HomeContainer>
    <Head>
      <title>Website Ecommerce</title>
    </Head>
    <div>
      </div>
    <main>
      <div>
        <Header></Header>
        <SubHeader></SubHeader>
        <Menu></Menu>
        <MenuAvaliacoes></MenuAvaliacoes>
        <Footer></Footer>
      </div>
    </main>
  </HomeContainer>
  )
}

export default Home
