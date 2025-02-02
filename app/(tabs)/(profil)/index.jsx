import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Link, useRouter } from "expo-router";
import { colors, spacing, typography, borderRadius } from "../../../style.js";
import Title from "../../../components/shared/title.jsx";
import Ionicons from "@expo/vector-icons/Ionicons";
import Page from "../../../components/shared/page.jsx";
import Header from "../../../components/shared/header.jsx";
import ImgPicker from "../../../components/shared/imagePicker.jsx";
import ProfilLine from "../../../components/profil/profilLine.jsx";
import Button from "../../../components/shared/Button.jsx";


export default function ProfilScreen() {
    const router = useRouter();
    return (
        <Page>
            <Header title={"Mon profil"} icon={"settings-outline"} />
            <ImgPicker />
            <Text style={styles.userName}>Golden gab</Text>
            <View style={styles.profilLines}>
                <Text style={styles.subTitle}>Actions principales</Text>
                <ProfilLine
                    title={"Mes informations "}
                    icon={"id-card-outline"}
                    link="/informations"
                />
                <ProfilLine
                    title={"Mes annonces"}
                    icon={"mic-outline"}
                    link="/mesAnnonces"
                />
            </View>

            <View style={styles.profilLines}>
                <Text style={styles.subTitle}>Autres actions</Text>
                <ProfilLine
                    title={"Noter l'application"}
                    icon={"star-half-outline"}
                />
                <ProfilLine
                    title={"Partager l'application"}
                    icon={"share-social-outline"}
                />
            </View>
            <Button style={{ marginTop: spacing.lg }} onPress={() => router.navigate("/login")}>
               Se déconnecter
            </Button>
        </Page>
    );
}

const styles = StyleSheet.create({
    userName: {
        fontWeight: "bold",
        fontSize: typography.fontSizeMedium,
        textAlign: "center",
        marginTop: spacing.sm,
    },
    subTitle: {
        color: colors.text,
        fontWeight: "bold",
        marginTop: spacing.sm,
    },
    profilLines: {
        marginTop: spacing.lg,
        gap: spacing.sm,
    },
});
