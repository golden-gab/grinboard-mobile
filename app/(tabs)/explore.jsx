import { View, Text, ScrollView, StyleSheet } from "react-native";
import { colors, spacing, typography, borderRadius } from "../../style.js";
import Title from "../../components/shared/title.jsx";
import Page from "../../components/shared/page.jsx";
import Header from "../../components/shared/header.jsx";
import AnnonceCard from "../../components/shared/annonceCard.jsx";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function ExploreScreen() {
    return (
        <Page>
            <Header title={"Explorer"} icon={"search"} />
            <ScrollView contentContainerStyle={style.list}>
                <View style={style.listItem}>
                    <AnnonceCard />
                </View>
                <View style={style.listItem}>
                    <AnnonceCard />
                </View>
                <View style={style.listItem}>
                    <AnnonceCard />
                </View>
                <View style={style.listItem}>
                    <AnnonceCard />
                </View>
            </ScrollView>
        </Page>
    );
}

const style = StyleSheet.create({
    listItem: {
        width: "100%",// Ajustez la largeur pour deux éléments par ligne
        padding: spacing.sm, // Optionnel: ajoutez du padding pour l'espacement
    },
    list: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between", // Optionnel: ajustez l'espacement entre les éléments
    },
});
