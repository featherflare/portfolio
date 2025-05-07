import { useState } from 'react'
import './assets/style/App.scss'
import Home from './component/Home/Home'
import About from './component/About/AboutMe'
import TechStack from './component/TechStack/TechStack'
import MyArt from './component/MyArt/MyArt'
import Footer from './component/Footer/Footer'
import Header from './component/Header/Header'
import Project from './component/Project/Project'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Home></Home>
      <About></About>
      <TechStack></TechStack>
      <MyArt></MyArt>
      <Project></Project>
      <Footer></Footer>
    </>
  )
}

export default App
