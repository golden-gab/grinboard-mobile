import { StyleSheet, ScrollView, View ,Text} from "react-native";
import { colors, spacing, typography } from "../../style.js";
import { useRouter } from "expo-router";
import Title from "./title.jsx";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Header({ title, icon, back ,number}) {
    const router = useRouter();

    return (
        <View style={styles.header}>
            <View style={styles.titleContainer}>
                {back && (
                    <Ionicons
                        name={"arrow-back"}
                        size={typography.fontSizeLarge}
                        color="black"
                        onPress={() => router.back()}
                    />
                )}
                <Title>{title}</Title>
            </View>
            <View style={styles.iconContainer}>
                <Ionicons
                    name={icon}
                    size={typography.fontSizeLarge}
                    color="black"
                />
                {number && <Text style={styles.iconNumber}>{number}</Text> }
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        display: "flex",
        flexDirection: "row", // Aligne les éléments horizontalement
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: spacing.lg,
    },
    iconContainer:{
        position:"relative",
        zIndex:13,
    },
    iconNumber: {
        position:"absolute",
        left:10,
        bottom:10,
        backgroundColor:colors.danger,
        color:"white",
        borderRadius:100,
        fontSize:10,
        padding:spacing.xs,
        textAlign: 'center', // Centrer le texte dans le badge
        minWidth: 20, // Assure une largeur minimale pour le badge
    },
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: spacing.lg,
    },
});
