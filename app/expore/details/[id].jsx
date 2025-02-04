import React, { useCallback, useMemo, useRef, useState } from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { borderRadius, colors, spacing, typography } from "../../../style.js";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import Avatar from "../../../components/shared/avatar.jsx";
// import Share from 'react-native-share';
import AnnonceComments from "../../../components/explore/annonceComments.jsx";

const AnnonceScreen = () => {
    const router = useRouter();
    const commentsRef = useRef(null);
    const [isSheetOpen, setIsSheetOpen] = useState(false);
    const handleSheetChanges = useCallback((index) => {
        console.log("handleSheetChanges", index);
        setIsSheetOpen(index !== -1);
    }, []);

    const handleShare = async () => {
        
    };

    return (
        <>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <View style={styles.annoncePage}>
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
                        // onPress={handleShare}
                    />
                    <Ionicons
                        name={"bookmark-outline"}
                        size={typography.fontSizeMedium}
                        color="dark"
                        style={[
                            styles.annonceIcon,
                            { right: spacing.md * 3.5 },
                        ]}
                    />
                    <Image
                        source={{
                            uri: "https://server.grinboard.com/public/storage/images/annonces/1726839251.Screenshot 2024-09-20 143349.png",
                        }}
                        style={styles.annonceImage}
                    />
                    <View style={styles.container}>
                        <View style={styles.annonceInfoContainer}>
                            <View style={styles.infoItem}>
                                <Ionicons
                                    name="pricetags-outline"
                                    size={typography.fontSizeSmall}
                                    color="dark"
                                />
                                <Text style={styles.infoItemText}>
                                    Categorie
                                </Text>
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
                                <Text style={styles.infoItemText}>
                                    15 jully 2024
                                </Text>
                            </View>
                        </View>

                        <Text style={styles.annonceTitle}>
                            Lorm ipsum dolor sit amet, consectetur adipisicing
                            elit
                        </Text>
                        <ScrollView style={styles.anonceDescriptionContainer}>
                            <Text style={styles.annonceDescriptionTitle}>
                                Description
                            </Text>
                            <Text style={styles.annonceDescription}>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ullam ea optio odio nihil
                                voluptates nisi reiciendis
                            </Text>
                        </ScrollView>
                        {/* <Text style={styles.annonceDescriptionTitle}>Annonceur</Text> */}
                    </View>
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
                                onPress={() =>
                                    commentsRef.current.snapToIndex(0)
                                }
                            />
                        </View>
                    </View>
                </View>
                {isSheetOpen && <View style={styles.overlay} />}
                <BottomSheet
                    ref={commentsRef}
                    index={-1}
                    onChange={handleSheetChanges}
                    enablePanDownToClose={true}
                    snapPoints={["100%"]}
                    style={{zIndex:2}}
                >
                    <BottomSheetView style={styles.bottomSheetContent}>
                        <AnnonceComments/>
                    </BottomSheetView>
                </BottomSheet>
            </GestureHandlerRootView>
        </>
    );
};

export default AnnonceScreen;

const styles = StyleSheet.create({
    annoncePage: {
        flex: 1,
        position: "relative",
    },
    annonceIcon: {
        position: "absolute",
        top: spacing.md,
        zIndex: 0,
        padding: spacing.sm,
        borderRadius: borderRadius.medium,
        backgroundColor: colors.gray,
    },
    annonceActionBottom: {
        padding: spacing.sm,
        borderRadius: borderRadius.medium,
        backgroundColor: colors.primary,
        color: "white",
    },
    annonceImage: {
        width: "100%",
        height: 250,
        zIndex: -1,
    },
    annonceInfoContainer: {
        flexDirection: "row",
        // marginVertical: spacing.sm,
        gap: spacing.sm,
    },
    container: {
        flex: 1,
        padding: spacing.md,
        // marginBottom: 55
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
        paddingBottom: 60,
    },
    anonceurContainer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 65,
        width: "100%",
        padding: spacing.sm,
        backgroundColor: colors.white,
        borderTopWidth: 1,
        borderTopColor: colors.gray,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "white",
    },
    commentsLink: {
        color: colors.text,
        textDecorationLine: "underline",
    },
    bottomSheetContent: {
        backgroundColor: colors.white,
        padding: spacing.md,
        height: "100%",
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Couleur semi-transparente pour assombrir l'arrière-plan
        zIndex: 0,
    },
});
