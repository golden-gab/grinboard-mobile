import { ScrollView, StyleSheet, View, Text, Image } from "react-native";
import { SubTitle } from "../shared/title";
import { LinearGradient } from "expo-linear-gradient"; 
import { colors, spacing, typography, borderRadius } from "../../style.js";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Best() {
    return (
        <View style={styles.bestContainer}>
            <SubTitle>Les plus populaires</SubTitle>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false} // Cache la barre de défilement
                contentContainerStyle={styles.sliderContainer}
            >
                <BestAnnocne />
                <BestAnnocne />
                <BestAnnocne />
                <BestAnnocne />
            </ScrollView>
        </View>
    );
}

function BestAnnocne() {
    return (
        
        <View style={styles.item}>
            <LinearGradient
                colors={['rgba(0, 0, 0, 0.8)', 'rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.8)']}
                style={styles.overlay}
                locations={[0, 0.5, 1]} // Dégradé haut-milieu-bas
            />
            <Image
                source={{uri:"https://server.grinboard.com/public/storage/images/annonces/1726839251.Screenshot 2024-09-20 143349.png"}}
                style={styles.annonceImage}
            />
            <View style={styles.annonceTextContainer}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={styles.annonceTitle}>Golden Gab</Text>
                    <View style={styles.annonceStats}>
                        <Ionicons name="eye-outline" size={typography.fontSizeMedium} color="white" />
                        <Text style={styles.annonceStatText}>12</Text>
                    </View>
                </View>
                <View style={{gap:spacing.xs}}>
                    <Text style={styles.annonceTitle}>Lorem ipsum dolor sit amet</Text>
                    <Text style={styles.annonceStatText}>Lorem ipsum dolor sit amet consectetur adipisicing elit dolor sit amet dolor sit amet dolor sit ametdolor sit amet...</Text>
                    <View style={{flexDirection:"row",gap:spacing.sm}}>
                        <View style={styles.annonceCategory}>
                            <Ionicons name="pricetag-outline" size={typography.fontSizeSmall} color="dark" />  
                            <Text style={styles.annonceCategoryText}>Categorie</Text> 
                        </View>
                        <View style={styles.annonceCategory}>
                            <Ionicons name="location-outline" size={typography.fontSizeSmall} color="dark" />  
                           <Text style={styles.annonceCategoryText}>Ville</Text> 
                        </View>
                    </View>
                </View>
            </View>
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
    item: {
        marginRight: spacing.sm,
        width: 300, 
        height: 300,
        borderRadius: borderRadius.medium,
        overflow: "hidden", // Important pour les bordures arrondies
        position: "relative", // Nécessaire pour les overlays
    },
    overlay: {
        position: "absolute",
        width: "100%",
        height: "100%",
    },
    annonceImage: {
        width: "100%",
        height: "100%",
        filter:"brightness(50%)",
    },
    annonceTextContainer: {
        position: "absolute",
        bottom: spacing.sm,
        left: spacing.sm,
        right: spacing.sm,
        top:spacing.sm,
        zIndex: 2,
        justifyContent:"space-between",
    },
    annonceTitle: {
        color: "white",
        fontSize: typography.fontSizeMedium,
        fontWeight: "bold",
    },
    annonceStats: {
        flexDirection: "row",
        alignItems: "center",
        gap: spacing.xs, // Espacement entre l'icône et le texte
    },
    annonceStatText: {
        color: colors.gray,
        fontSize: typography.fontSizeSmall,
    },
    annonceCategory:{
        backgroundColor: colors.gray,
        padding:spacing.xs,
        borderRadius:borderRadius.medium,
        fontSize: typography.fontSizeSmall,
        flexDirection:"row",
        alignItems:"center",
        gap:spacing.xs
    },
    annonceCategoryText:{
        color: colors.text,
        fontSize: typography.fontSizeSmall,
    }

});