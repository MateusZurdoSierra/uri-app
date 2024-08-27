import styled from 'styled-components/native';
import Button from './src/modules/global/components/Button';

export const Container = styled.View`
	flex: 1;
	background-color: #fff;
`;

export const TextWelcome = styled.Text`
	color: #000;
	font-size: 20px;
	font-weight: bold;
`;

export const LabelWelcome = styled.Text`
	color: #000;
	font-size: 18px;
	margin-bottom: 100px;
`;

export const Content = styled.View`
	flex: 1;
`;

export const ContentTexts = styled.View`
	align-items: center;
	margin-top: 20px;
`;
export const ContentButton = styled.View`
	flex: 1;
	padding: 16px;
`;

export const Image = styled.Image``;

export default function App() {
	return (
		<Container>
			<Image
				style={{
					height: '70%',
					width: '100%',
					resizeMode: 'cover',
					backgroundColor: 'gray',
					borderRadius: 25,
				}}
				source={require('./src/assets/images/welcome.jpg')}
			/>
			<Content>
				<ContentTexts>
					<TextWelcome>Seja bem-vindo ao URI App</TextWelcome>
					<LabelWelcome> Sentir-se seguro é para todos!</LabelWelcome>
				</ContentTexts>

				<ContentButton>
					<Button />
				</ContentButton>
			</Content>
		</Container>
	);
}
