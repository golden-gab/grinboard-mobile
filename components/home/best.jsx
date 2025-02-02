import { ScrollView, StyleSheet, View, Text, Image } from "react-native";
import { SubTitle } from "../shared/title";
import { LinearGradient } from "expo-linear-gradient"; 
import { colors, spacing, typography, borderRadius } from "./../../style.js";
import Ionicons from "@expo/vector-icons/Ionicons";
import AnnonceCard from "../shared/annonceCard";

export default function Best() {
    return (
        <View style={styles.bestContainer}>
            <SubTitle>Les plus populaires</SubTitle>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false} // Cache la barre de défilement
                contentContainerStyle={styles.sliderContainer}
            >
                <View style={styles.item}><AnnonceCard/></View>
                <View style={styles.item}><AnnonceCard/></View>
                <View style={styles.item}><AnnonceCard/></View>
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    bestContainer: {
        gap: spacing.sm,
        marginTop:spacing.lg,
    },
    sliderContainer: {
        flexDirection: "row", // Alignement horizontal
        gap: spacing.sm, // Espacement horizontal
    },
    item:{
        width:250
    }

});