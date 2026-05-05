import { TouchableOpacity, Text } from "react-native";

export default function Button({ text }) {
    return (
        <TouchableOpacity>
            <Text>{text !== '' ? text : "Button"}</Text>
        </TouchableOpacity>
    )
}