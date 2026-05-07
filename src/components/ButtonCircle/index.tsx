import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { styles } from "./style";

type Props = TouchableOpacityProps & {
    text?: string,
}

export default function ButtonCircle({ text, ...rest }: Props) {
    return (
        <TouchableOpacity
            {...rest}
            style={styles.button}
        // style={styles.button}
        >
            <Text
                style={styles.textButton}>
                <FontAwesome name="refresh" size={24} color="white"/>
            </Text>
        </TouchableOpacity>
    )
}