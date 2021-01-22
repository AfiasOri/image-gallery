import styled from 'styled-components';

export const StyledImage = styled.img`
	z-index: 1;
	grid-column: span 2;
	max-width: 100%;
	margin-bottom: -52%;
	clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
	transform: scale(1);
	transition: all 0.25s;

	&:nth-child(7n + 1) {
		grid-column: 2 / span 2;
	}

	&:hover {
		z-index: 2;
		transform: scale(2);
	}
`;
