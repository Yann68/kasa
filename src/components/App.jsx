import { Route, Routes } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import About from '../pages/About'
import Error from '../pages/Error'
import Home from '../pages/Home'
import Logement from '../pages/Logement'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route  path="/" exact element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route exact path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  )
}
export default App
