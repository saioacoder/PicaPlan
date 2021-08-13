import styled from 'styled-components'

export const PageHeader = styled.header`
	align-items: center;
	background-color: $color_background;
	border-radius: 0 0 $radius_b $radius_b;
	padding: $spacing_xxs 0;
	position: sticky;
	top: 0;
	z-index: 10;
	text-align: center;
`
export const PageTitle = styled.h1`
	font-size: 2.5em;
	color: palevioletred;
`