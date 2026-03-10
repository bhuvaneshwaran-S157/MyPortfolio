import './App.css'
import About from './Portfolio/About'
import Contact from './Portfolio/Contact'
import FooterS from './Portfolio/FooterS'
import Home from './Portfolio/Home'
import NavBar from './Portfolio/NavBar'
import Projects from './Portfolio/Projects'
import { Element } from 'react-scroll'
import Skills from './Portfolio/Skills'

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-black text-white w-full overflow-x-hidden">
        <NavBar />
        <main className="flex-1 w-full">
          <Element name="home"><Home /></Element>
          <Element name="about"><About /></Element>
          <Element name='skills'><Skills /></Element>
          <Element name="projects"><Projects /></Element>
          <Element name="contact"><Contact /></Element>
        </main>
        <FooterS />
      </div>
    </>
  )
}

export default App
