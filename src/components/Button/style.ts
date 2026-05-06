import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    button: {
        backgroundColor: 'tomato',
        padding: 16,
        paddingHorizontal: 32,
        borderRadius: 10,
        minWidth: 320,
        marginTop: 10
    },
    textButton: {
        fontSize: 24,
        color: '#f2f2f2',
        fontWeight: 700,
        textAlign: 'center'
    },
    buttonAtivo: {
        backgroundColor: '#62DF70',
    },
    buttonDesativo: {
        backgroundColor: '#DF2040',
    }
})