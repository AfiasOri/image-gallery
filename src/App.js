import React from 'react';
import { imageData } from './data';
import './App.css';
import { Gallery } from './components';

function App() {
	return <Gallery images={imageData} />;
}

export default App;
