import { Routes, Route } from 'react-router'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Carros from './pages/Carros'

function App() {
	return (
		<>
			<Navbar />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/carros" element={<Carros />} />
			</Routes>
		</>
	)
}

export default App
