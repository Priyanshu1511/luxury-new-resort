import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Tariff from './pages/Tariff'
import Policies from './pages/Policies'
import Terms from './pages/Terms'
import PropertyRules from './pages/PropertyRules'
import Feedback from './pages/Feedback'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Login from './pages/Login'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tariff" element={<Tariff />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/property-rules" element={<PropertyRules />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}
