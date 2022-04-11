import Home from 'pages/Home';
import Restaurant from 'pages/Restaurant';
import About from 'pages/About';
import MainMenu from 'components/Menu';
import DefaultPage from 'components/DefaultPage';
import { BrowserRouter as Router, HashRouter, Routes, Route } from 'react-router-dom';
import Footer from 'components/Footer';
import NotFound from 'pages/NotFound';
import MenuItem from 'pages/MenuItem';

export default function AppRouter() {
	return (
		<main className='container'>
			<Router>
				<MainMenu />
				<Routes>
					<Route path='/' element={<DefaultPage />}>
						<Route index element={<Home />} />
						<Route path='menu' element={<Restaurant />} />
						<Route path='about' element={<About />} />
					</Route>
					<Route path='item/:id' element={<MenuItem />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
				<Footer />
			</Router>
		</main>
	);
}