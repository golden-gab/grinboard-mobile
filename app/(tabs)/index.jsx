import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Link } from "expo-router";
import { colors, spacing, typography, borderRadius } from "../../style.js";
import Title from "../../components/shared/title.jsx";
import Categories from "../../components/home/categories.jsx"
import Best from "../../components/home/best.jsx"
import Ionicons from "@expo/vector-icons/Ionicons";
import Header from "../../components/shared/header.jsx";
import Page from "../../components/shared/page.jsx";

export default function HomeScreen() {
    return (
        <Page>
            <Header title={"Bienvenue"} icon={"notifications-outline"} number={2}/>
            <Categories/>
            <Text></Text>
            <Best/>
            <Best/>
        </Page>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: spacing.lg,
        display: "flex",
        flexDirection:"column",
        justifyContent:"flex-start",
        gap:spacing.lg,
        backgroundColor: colors.background,
    },
    header: {
        display: "flex",
        flexDirection: "row", // Aligne les éléments horizontalement
        justifyContent: "space-between",
        alignItems: "center",
        // backgroundColor:colors.primary
    },
});
