import React from 'react';

import { StyledImage } from './Image.styles';

export const Image = ({ src, alt, date, onClick }) => <StyledImage src={src} alt={alt} onClick={onClick} />;

export default Image;
