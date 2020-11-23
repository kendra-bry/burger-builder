import React from 'react';
import Aux from '../../hoc/Auxi';
import './Layout.css'

const Layout = ({ children }) => {
	return (
		<Aux>
			<div>Toolbar, SideDrawer, Backdrop</div>
			<main className='content'>{children}</main>
		</Aux>
	);
};

export default Layout;
