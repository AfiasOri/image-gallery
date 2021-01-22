import styled from 'styled-components';

export const StyledGallery = styled.div`
	position: relative;
	flex-grow: 1;
	margin: auto;
	max-width: 90vw;
	max-height: 100vh;

	display: grid;
	grid-template-columns: repeat(8, 1fr);
	grid-template-rows: repeat(4, 1fr);
	grid-gap: 2vmin;
	justify-items: center;
	align-items: center;
`;
