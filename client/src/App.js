import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AppRoutes from './routes/AppRoutes';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<ToastContainer />
				<AppRoutes />
			</div>
		</BrowserRouter>
	);
}

export default App;
