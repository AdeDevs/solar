import { Route, Routes } from "react-router-dom"
import NavPage from "./components/Nav"
import HomePage from "./components/Home"
import ProductsPage from "./components/Products"
import ScrollToTop from "./components/scrolltotop"

function App() {
  return (
    <div>
      <NavPage />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </div>
  )
}

export default App
