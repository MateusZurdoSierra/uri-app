import styled from 'styled-components/native';
import Header from './src/modules/global/components/Header';
import Banner from './src/modules/global/components/Banner';
import Input from './src/modules/global/components/Input';

export const Container = styled.View`
	flex: 1;
	align-items: center;
	background-color: white;

	padding: 16px;
	margin-top: 54px;
`;

export default function App() {
	return (
		<Container>
			<Header />
			<Banner />
			<Banner />

			<Input />
		</Container>
	);
}
