import { Route, Routes } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import About from '../pages/About'
import Error from '../pages/Error'
import Home from '../pages/Home'
import Logement from '../pages/Logement'
import ScrollToTop from './ScrollToTop'

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  )
}
export default App
