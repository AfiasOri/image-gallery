import React from 'react';
import { images } from './data';
import './App.css';
import { Gallery } from './components';

function App() {
	return <Gallery images={images} />;
}

export default App;
