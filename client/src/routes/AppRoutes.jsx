import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { HomePage, AboutPage, AddEditUserPage, UserPage } from '../pages';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" exact element={<HomePage />} />
			<Route path="/about" element={<AboutPage />} />
			<Route path="/edit/:userId" element={<AddEditUserPage />} />
			<Route path="/add" element={<AddEditUserPage />} />
			<Route path="/view" element={<UserPage />} />
		</Routes>
	);
};

export default AppRoutes;
