import { Routes, Route } from 'react-router'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Carros from './pages/Carros'

function App() {
	return (
		<div className="flex min-h-screen flex-col bg-zinc-950">
			<Navbar />

			<div className="flex-1 pt-20">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/carros" element={<Carros />} />
				</Routes>
			</div>

			<Footer />
		</div>
	)
}

export default App
