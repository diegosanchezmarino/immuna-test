import Navbar from "./components/Navbar/Navbar"
import LoginView from "./view/LoginView"
import MainView from "./view/MainView"
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="bg-black h-[100vh] w-[100vw]">
      <Routes>
        <Route path="/" element={<LoginView />} />
        <Route path="/main" element={<MainView/>} />
      </Routes>
      
    </div>
  )
}

export default App
