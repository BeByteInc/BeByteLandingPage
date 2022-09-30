import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import ContactUs from '../components/ContactUs'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Products from '../components/Products'
import Services from '../components/Services'
import Team from '../components/Team'

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(255,255,255)] text-gray-900 h-screen snap-y 
    snap-mandatory overflow-scroll z-50 scrollbar scrollbar-track-gray-100 scrollbar-thumb-gray-900'>
      <Head>
        <title>BeByte</title>
      </Head>
      <Header/>
      <section id="hero" className=''>
        <Hero/>
      </section>
      <section id="about" className=''>
        <About/>
      </section>
      <section id="services" className=''>
        <Services/>
      </section>
      <section id="products" className=''>
        <Products/>
      </section>
      {/* Team */}
      <section id="team" className=''>
        <Team/>
      </section>
      {/* Contact Us */}
      <section id="contact" className=''>
        <ContactUs/>
      </section>

    </div>
  )
}

export default Home
