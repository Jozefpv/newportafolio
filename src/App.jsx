import './App.css'
import Me from './components/me/Me'
import Navbar from './components/navbar/Navbar'
import Projects from './components/projects/Projects'
import Divider from './components/divider/Divider'
import Experience from './components/experience/Experience'
import Contact from './components/contact/Contact'

function App() {

  return (
    <div className='appContainer'>
      <Navbar />
      <Me></Me>
      <Divider side={true}></Divider>
      <Experience></Experience>
      <Divider side={false}></Divider>
      <Projects></Projects>
      <Divider side={true}></Divider>
      <Contact></Contact>
    </div>
  )
}

export default App
