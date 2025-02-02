import React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import {
    borderRadius,
    colors,
    spacing,
    typography,
} from "../../../../style.js";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import Avatar from "../../../../components/shared/avatar.jsx";

const AnnonceScreen = () => {
    const router = useRouter();

    return (
        <ScrollView style={styles.annoncePage}>
            <Ionicons
                name={"arrow-back"}
                size={typography.fontSizeMedium}
                color="dark"
                style={[styles.annonceIcon, { left: spacing.md }]}
                onPress={() => router.back()}
            />
            <Ionicons
                name={"share-social-outline"}
                size={typography.fontSizeMedium}
                color="dark"
                style={[styles.annonceIcon, { right: spacing.md }]}
            />
             <Ionicons
                name={"bookmark-outline"}
                size={typography.fontSizeMedium}
                color="dark"
                style={[styles.annonceIcon, { right: spacing.md * 3.5 }]}
            />
            <Image
                source={{
                    uri: "https://server.grinboard.com/public/storage/images/annonces/1726839251.Screenshot 2024-09-20 143349.png",
                }}
                style={styles.annonceImage}
            />
            <ScrollView style={{ padding: spacing.md }}>
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
                    <View style={styles.infoItem}>
                        <Ionicons
                            name="eye-outline"
                            size={typography.fontSizeSmall}
                        />
                        <Text style={styles.infoItemText}>10</Text>
                    </View>
                    <View style={styles.infoItem}>
                        <Ionicons
                            name="calendar-outline"
                            size={typography.fontSizeSmall}
                        />
                        <Text style={styles.infoItemText}>15 jully 2024</Text>
                    </View>
                </View>

                <Text style={styles.annonceTitle}>
                    Lorm ipsum dolor sit amet, consectetur adipisicing elit
                </Text>
                <View style={styles.anonceDescriptionContainer}>
                    <Text style={styles.annonceDescriptionTitle}>
                        Description
                    </Text>
                    <Text style={styles.annonceDescription}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ullam ea optio odio nihil voluptates nisi reiciendis
                        temporibus et harum? Fugit nam consequuntur at. Tempora
                        ut asperiores error illo. Reiciendis, autem! Lorem ipsum
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ullam ea optio odio nihil voluptates nisi reiciendis
                        temporibus et harum? Fugit nam consequuntur at. Tempora
                        ut asperiores error illo. Reiciendis, autem! Lorem ipsum
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ullam ea optio odio nihil voluptates nisi reiciendis
                        temporibus et harum? Fugit nam consequuntur at. Tempora
                        ut asperiores error illo. Reiciendis, autem! Lorem ipsum
                        dolor sit amet consectetur adipisicing elit. Ullam ea
                        optio odio nihil voluptates nisi reiciendis temporibus
                        et harum? Fugit nam consequuntur at. Tempora ut
                        asperiores error illo. Reiciendis, autem!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ullam ea optio odio nihil voluptates nisi reiciendis
                        temporibus et harum? Fugit nam consequuntur at. Tempora
                        ut asperiores error illo. Reiciendis, autem! Lorem ipsum
                        dolor sit amet consectetur adipisicing elit. Ullam ea
                        optio odio nihil voluptates nisi reiciendis temporibus
                        et harum? Fugit nam consequuntur at. Tempora ut
                        asperiores error illo. Reiciendis, autem!
                    </Text>
                </View>
                {/* <Text style={styles.annonceDescriptionTitle}>Annonceur</Text> */}
                <View style={styles.anonceurContainer}>
                    <Avatar />
                    <View
                        style={{
                            flexDirection: "row",
                            gap: spacing.xs,
                            alignItems: "center",
                        }}
                    >
                        <Ionicons
                            name="mail-outline"
                            size={typography.fontSizeMedium}
                            color="dark"
                            style={[styles.annonceActionBottom]}
                        />
                        <Ionicons
                            name="logo-whatsapp"
                            size={typography.fontSizeMedium}
                            color="dark"
                            style={[styles.annonceActionBottom]}
                        />
                        <Ionicons
                            name="chatbubble-ellipses-outline"
                            size={typography.fontSizeMedium}
                            color="dark"
                            style={[styles.annonceActionBottom]}
                        />
                    </View>
                </View>
            </ScrollView>
        </ScrollView>
    );
};

export default AnnonceScreen;

const styles = StyleSheet.create({
    annoncePage: {
        position: "relative",
    },
    annonceIcon: {
        position: "absolute",
        top: spacing.md,
        zIndex: 2,
        padding: spacing.sm,
        borderRadius: borderRadius.medium,
        backgroundColor: colors.gray,
    },
    annonceActionBottom: {
        padding: spacing.sm,
        borderRadius: borderRadius.medium,
        backgroundColor: colors.primary,
        color:"white"
    },
    annonceImage: {
        width: "100%",
        height: 250,
    },
    annonceInfoContainer: {
        flexDirection: "row",
        // marginVertical: spacing.sm,
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
        marginTop: spacing.xs,
        fontWeight: "bold",
        // color: colors.text,
    },
    anonceDescriptionContainer: {
        marginVertical: spacing.sm,
    },
    annonceDescriptionTitle: {
        color: colors.text,
        fontWeight: "bold",
    },
    annonceDescription: {
        color: colors.text,
    },
    anonceurContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        // backgroundColor:"yellow",
        padding: 0.1,
        marginTop: spacing.sm,
    },
    commentsLink: {
        color: colors.text,
        textDecorationLine: "underline",
    },
});
