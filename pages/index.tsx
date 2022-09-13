import type { NextPage } from 'next'
import Head from 'next/head'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Menu } from '../components/Menu'
import { SubHeader } from '../components/SubHeader'
import { HomeContainer } from '../styles/HomeStyles'

const Home: NextPage = () => {
  return (
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
        <Footer></Footer>
      </div>
    </main>
  </HomeContainer>
  )
}

export default Home
