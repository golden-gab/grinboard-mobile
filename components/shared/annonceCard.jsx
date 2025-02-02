import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { colors, spacing, typography, borderRadius } from "../../style.js";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";

const AnnonceCard = ({ link = "/annonces/1" }) => {
    return (
        <Link href={link}>
            <View style={styles.annonceCard}>
                <Image
                    source={{
                        uri: "https://server.grinboard.com/public/storage/images/annonces/1726839251.Screenshot 2024-09-20 143349.png",
                    }}
                    style={styles.annonceImage}
                />
                <View style={styles.annonceInfoContainer}>
                    <View style={styles.infoItem}>
                        <Ionicons
                            name="pricetags-outline"
                            size={typography.fontSizeSmall}
                            color="dark"
                        />
                        <Text style={styles.infoItemText}>Categorie</Text>
                    </View>
                    <View style={styles.infoItem}>
                        <Ionicons
                            name="location-outline"
                            size={typography.fontSizeSmall}
                            color="dark"
                        />
                        <Text style={styles.infoItemText}>Ville</Text>
                    </View>
                </View>
                <Text style={styles.annonceTitle}> Ceci est un exemple de titre .</Text>
                {/* <Text style={styles.annonceDescription}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Eum nemo accusantium nam vel Lorem, ipsum...
                </Text> */}
            </View>
        </Link>
    );
};

export default AnnonceCard;

const styles = StyleSheet.create({
    annonceCard: {
        marginRight: spacing.sm,
        width: "100%",
        height: 210,
        borderRadius: borderRadius.medium,
        overflow: "hidden", // Important pour les bordures arrondies
        position: "relative", // Nécessaire pour les overlays
    },
    annonceImage: {
        width: "100%",
        height: 140,
        filter: "brightness(80%)",
        borderRadius: borderRadius.medium,
    },
    annonceInfoContainer: {
        flexDirection: "row",
        marginTop: spacing.sm,
        gap: spacing.sm,
    },
    infoItem: {
        flexDirection: "row",
        alignItems: "center",
        // marginHorizontal: spacing.sm,
        gap: spacing.xs,
        padding: spacing.xs,
        borderRadius: borderRadius.medium,
        backgroundColor: colors.gray,
    },
    infoItemText: {
        fontSize: typography.fontSizeSmall,
    },
    annonceTitle: {
        fontSize: typography.fontSizeMedium,
        fontWeight: "bold",
        color: colors.text,
    },
    annonceDescription: {
        fontSize: typography.fontSizeSmall,
        color: colors.text,
    },
});
