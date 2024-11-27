import { Route, Routes } from "react-router-dom"
import NavPage from "./components/Nav"
import HomePage from "./components/Home"

function App() {
  return (
    <div>
      <NavPage />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
    </div>
  )
}

export default App
