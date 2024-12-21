import { Text, View, ScrollView, StyleSheet } from "react-native";
import { SubTitle } from "../shared/title";
import { colors, spacing, typography, borderRadius } from "../../style.js";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Categories() {
    return (
        <ScrollView contentContainerStyle={styles.categoriesContainer}>
            {/* <SubTitle>Vos récentes annonces</SubTitle> */}
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
        </ScrollView>
    );
}

function Category() {
    return (
        <ScrollView contentContainerStyle={styles.categorieBox}>
            <Ionicons name="settings-outline" size={24} color={"black"} />
            <Text style={{color:"black"}}>
                categorie 
            </Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    categoriesContainer: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: spacing.sm,
        width: "100%",
    },
    categorieBox: {
        backgroundColor: colors.gray,
        color: "white",
        width: 168,
        borderRadius: borderRadius.small,
        padding: spacing.md,
        display:"flex",
        flexDirection:"row",
        justifyContent:"flex-sart",
        gap: spacing.xs,
    },
});
