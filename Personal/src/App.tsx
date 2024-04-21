import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import { Analytics } from "@vercel/analytics/react"

function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
      <Analytics/>
    </>
  )
}

export default App
