import { Text, StyleSheet } from "react-native";
import { colors, typography } from "../../style.js";

export default function Title({ children, style }) {
    return (
        <Text
            style={[
                styles.title, // Styles par défaut
                style, // Styles passés depuis le parent
            ]}
        >
            {children}
        </Text>
    );
}

export function SubTitle({ children, style }) {
    return (
        <Text
            style={[
                styles.subTitle, // Styles par défaut
                style, // Styles passés depuis le parent
            ]}
        >
            {children}
        </Text>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },

    subTitle:{
        fontSize: typography.fontSizeMedium,
        fontWeight: "bold",
        // textAlign: "center",
    }
});
