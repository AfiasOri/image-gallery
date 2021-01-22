import React from 'react';

import { StyledImage } from './Image.styles';

export const Image = ({ src, alt }) => {
	const source = require(`../../assets/${src}`);
	console.log(`../../assets/${src}`);
	return <StyledImage src={require(`../../assets/${src}`)} alt={alt} />;
};

export default Image;
