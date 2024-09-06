import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    padding: 16px;
    background-color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled.Text`
    font-size: 24px;
    margin-bottom: 16px;
    width: 354px;
    position: 'absolute';
    top: 142px;
    left: 20px;
`;
export const Subtitle = styled.Text`
    font-size: 16px;
    margin-bottom: 24px;
    width: 354px;
    height: 88px;
    position: 'absolute';
    top: 125px;
    left: 20px;
`;
const styles = StyleSheet.create({

    
    paragraph: {
        fontSize: 16,
        marginBottom: 24,
        width: 354,
        height: 88,
        position: 'absolute',
        top: 200, // 142px (h1 top) + 24px (h1 height) + 8px (gap)
        left: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
        marginTop: 300, // Ajustar de acordo com o layout
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        marginBottom: 16,
        paddingHorizontal: 8,
        borderRadius: 4,
    },
});

export default styles;