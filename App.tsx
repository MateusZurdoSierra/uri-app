import styled from 'styled-components/native';
import Header from './src/modules/global/components/Header';
import Banner from './src/modules/global/components/Banner';

export const Container = styled.View`
	flex: 1;
	align-items: center;
	/* justify-content: center; */
	background-color: white;

	padding: 16px;
	margin-top: 54px;
`;

export const ContentBanner = styled.View`
	height: auto;
	width: 100%;

	padding: 16px;
	border-radius: 12px;

	background-color: #f3f3f3;
`;

export const TitleBanner = styled.Text`
	color: #121214;
	font-size: 18px;
	font-weight: bold;

	margin-bottom: 8px;
`;

export const MessageBanner = styled.Text`
	color: #121214;
	font-size: 14px;
`;

export default function App() {
	return (
		<Container>
			<Header />
			<Banner />
			<Banner />
			<Banner />
			<Banner />
		</Container>
	);
}
