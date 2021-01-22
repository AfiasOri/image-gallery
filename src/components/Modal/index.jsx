import React from 'react';

import { StyledModalContainer, StyledModal, ModalImage, ModalDate } from './Modal.styles';

export const Modal = ({ handleClose, show, image }) => {
	return image ? (
		<StyledModalContainer show={show}>
			<StyledModal onClick={handleClose}>
				<ModalImage {...image} />
				<ModalDate>{image.date}</ModalDate>
			</StyledModal>
		</StyledModalContainer>
	) : null;
};

export default Modal;
