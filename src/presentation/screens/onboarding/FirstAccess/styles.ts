import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    h1: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        width: 354,
        position: 'absolute',
        top: 142,
        left: 20,
    },
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