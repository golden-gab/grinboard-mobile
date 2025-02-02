import React from "react";
import { ImageBackground, Image, StyleSheet, Text, View } from "react-native";
import { colors, spacing, typography } from "../../style";

const AuthContainer = ({ children, title, description }) => {
    return (
        <ImageBackground
            source={require("../../assets/images/motif.png")} // Remplacez par le chemin de votre image
            style={styles.background}
        >
            <View style={styles.authContainer}>
                {/* <Image
                source={require("../../assets/images/logo.png")}
                style={styles.logo}
            /> */}
                <View style={styles.authText}>
                    <Text style={styles.authTitle}>{title}</Text>
                    <Text style={styles.authDescription}>{description}</Text>
                </View>
                <View style={styles.authForm}>{children}</View>
            </View>
        </ImageBackground>
    );
};

export default AuthContainer;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover', // Ajustez l'image pour couvrir tout l'écran
    },
    authContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)', // Optionnel: ajoutez un fond semi-transparent
        flex: 1,
        paddingTop: spacing.md,
        // justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        width: "40%",
        height: "5%",
    },
    authForm: {
        width: "90%",
        gap: spacing.md,
    },
    authText: {
        paddingVertical: spacing.lg,
        justifyContent: "flex-start",
    },
    authTitle: {
        fontSize: typography.fontSizeLarge,
        textAlign: "center",
        color: colors.primary,
        fontWeight: "bold",
    },

    authDescription: {
        fontSize: typography.fontSizeSmall,
        textAlign: "center",
        color: colors.text,
        marginTop: spacing.xs,
    },
});
