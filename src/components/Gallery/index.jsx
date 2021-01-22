import React, { useState } from 'react';

import { StyledGallery } from './Gallery.styles';
import { Image, Modal } from '../';

export const Gallery = ({ images }) => {
	const [show, setShow] = useState(false);
	const [pickedImage, setPickedImage] = useState(null);

	const handleImageClick = image => {
		setPickedImage(image);
		setShow(true);
	};

	const renderImages = () =>
		images.length ? (
			images.map(image => <Image key={image.id} {...image} onClick={() => handleImageClick(image)} />)
		) : (
			<h1>Oops, Nothing to see here</h1>
		);
	return (
		<StyledGallery>
			{renderImages()}
			<Modal show={show} handleClose={() => setShow(false)} image={pickedImage} />
		</StyledGallery>
	);
};

export default Gallery;
