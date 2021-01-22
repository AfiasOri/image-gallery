import styled from 'styled-components';

export const StyledModalContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.6);
	z-index: 3;
	display: ${({ show }) => (show ? 'block' : 'none')};
`;

export const StyledModal = styled.section`
	position: fixed;
	background: white;
	width: 80%;
	height: auto;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	cursor: pointer;
`;

export const ModalImage = styled.img`
	height: 80vh;
	width: 80vw;
`;

export const ModalDate = styled.h1`
	@import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@1,100&display=swap');
	font-family: 'Work Sans', sans-serif;
	font-weight: 100;
	font-size: 48px;
	opacity: 0.5;
	text-align: center;
	margin: -80px;
`;
