import React from 'react';

import { StyledGallery } from './Gallery.styles';
import { Image } from '../';

export const Gallery = ({ images }) => {
	const renderImages = () => images.map(({ id, ...rest }) => <Image key={id} {...rest} />);
	return <StyledGallery>{renderImages()}</StyledGallery>;
};

export default Gallery;
