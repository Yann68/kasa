import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import About from './pages/About'
import Error from './pages/Error'
import Home from './pages/Home'
import Logement from './pages/Logement'
import ScrollToTop from './components/ScrollToTop'

// fonction pour appelé les routes et composants
function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" exact element={<Logement />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  )
}
export default App
