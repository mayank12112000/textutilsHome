import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import {Routes,Route} from 'react-router-dom'
import Home from './Home'
import Alert from './Alert'
import NotFound from './NotFound'
import About from './About'

function App() {
  const [mode, setMode] = useState("light")
  const [msg,setMsg] = useState("")
  const handleToggle = () => {
    mode === "light" ? setMode("dark") : setMode("light")
    mode==="light"? showAlertMsg("Dark mode enabled"):showAlertMsg("Light mode enabled")
  }
  const showAlertMsg = (msg)=>{
    setMsg(msg)
    setTimeout(() => {
        setMsg(null)
    }, 800);
}
  return (
    <div className='page' style={{background:mode==="dark"?"#030637":"white",minHeight:"100vh"}}>
      <Navbar mode={mode} setMode={setMode} handleToggle={handleToggle} />
      
      <Routes>
        <Route path='/' element={<Home mode={mode} showAlertMsg={showAlertMsg} msg={msg} setMsg={setMsg} setMode={setMode} handleToggle={handleToggle} />}/>
        <Route path='/about' element={<About mode={mode}/>}/>
        <Route path='/*' element={<NotFound mode={mode}/>}/>
      </Routes>
    </div>
  )
}

export default App
