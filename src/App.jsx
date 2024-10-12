import Header  from "./compenents/Header"
import Hero from "./compenents/Hero"
import About from "./compenents/About"
import Skills from "./compenents/Skills"
import Works from "./compenents/works"
import Contact from "./compenents/Contact"
import Footer from "./compenents/Footer"

import {ReactLenis} from "lenis/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP,ScrollTrigger)

const App = () =>{

  return (
    <ReactLenis root>
    <Header/>
    <main>
      <Hero />
      <br></br>
      <About />
      <br></br>
      <Skills />
      <br></br>
      <Works />
      <br></br>
      <Contact />
    </main>
    <Footer />

    </ReactLenis>
    
  )
}
export default App
