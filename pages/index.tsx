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
    <div className='bg-[rgb(46,46,46)] text-white h-screen snap-y 
    snap-mandatory overflow-scroll z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>BeByte</title>
      </Head>
      <Header/>
      <section id="hero" className='snap-start'>
        <Hero/>
      </section>
      <section id="about" className='snap-center'>
        <About/>
      </section>
      <section id="services" className='snap-center'>
        <Services/>
      </section>
      <section id="products" className='snap-start'>
        <Products/>
      </section>
      {/* Team */}
      <section id="team" className='snap-start'>
        <Team/>
      </section>
      {/* Contact Us */}
      <section id="contact" className='snap-start'>
        <ContactUs/>
      </section>

    </div>
  )
}

export default Home
