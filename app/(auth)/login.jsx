import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { colors, spacing, typography } from "../../style";
import AuthContainer from "../../components/auth/authContainer";
import { Input } from "../../components/shared/form";
import Button from "../../components/shared/Button";
import Spinner from "../../components/shared/spinner"; 
import { Link } from "expo-router";
import { AuthService } from "../../services/auth.service";

const LoginScreen = () => {
    const [user, setUser] = useState({
        email: "goldengab@gmail.com",
        password: "goldengab2.0",
    });
    const [loading, setLoading] = useState(false); 

    async function handleLogin() {
        setLoading(true); 
        try {
            const response = await AuthService.login(user);
            alert(response.data.access_token);

            await AuthService.saveToken(response.data.access_token);
            // console.log(AuthService.getToken());
        } catch (error) {
            alert("Email ou mot de passe incorrect");
        } finally {
            setLoading(false); 
        }
    }
    return (
        <AuthContainer
            title={"Se connecter"}
            description={"Connectez-vous pour accéder à votre compte."}
        >
            <Input
                label={"Email"}
                value={user.email}
                // icon={"outline-mail"}
                type={"email-address"}
                onChange={(newText) => setUser({ ...user, email: newText })}
            />
            <Input
                label={"Mot de passe"}
                value={user.password}
                type={"password"}
                // icon={"lock-closed-outline"}
                isSecure={true}
                onChange={(newText) => setUser({ ...user, password: newText })}
            />
            <Link style={styles.forgotPassLink} href={"/forgotPass"}>
                mot de passe oublié ?
            </Link>
            {loading ? (
                <Spinner /> // Affichez le spinner pendant le chargement
            ) : (
                <Button title="Se connecter" onPress={handleLogin} />
            )}
            <Link href={"/register"} style={styles.linkBottom}>
                Créer un compte
            </Link>
        </AuthContainer>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    forgotPassLink: {
        color: colors.primary,
        textAlign: "right",
        bottom: spacing.sm,
        fontSize: typography.fontSizeSmall,
        fontWeight: "bold",
    },
    linkBottom: {
        color: colors.primary,
        textAlign: "center",
        margin: spacing.sm,
        fontWeight: "bold",
    },
});
