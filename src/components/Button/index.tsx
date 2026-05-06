import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { styles } from "./style";

type Props = TouchableOpacityProps & {
    text: string,
    idButton: number,
    isAtivado: boolean,
}

export default function Button({ text, idButton, isAtivado, ...rest }: Props) {
    return (
        <TouchableOpacity
            {...rest}
            style={
                isAtivado === true
                    ? [styles.button, styles.buttonAtivo]
                    : [styles.button, styles.buttonDesativo]
            }
        // style={styles.button}
        >
            <Text
                style={styles.textButton}>
                {text !== '' ? text : "Button"}
            </Text>
        </TouchableOpacity>
    )
}