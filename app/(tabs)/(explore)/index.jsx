import { View, Text, ScrollView, StyleSheet } from "react-native";
import { colors, spacing, typography, borderRadius } from "../../../style.js";
import Title from "../../../components/shared/title.jsx";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function ExploreScreen() {
    return (
        <View style={style.container}>
            <ScrollView contentContainerStyle={style.header}>
                <Title>Explorer</Title>
                <Ionicons name="search" size={typography.fontSizeLarge} color="black" />
            </ScrollView>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        padding: spacing.lg,
        display: "flex",
        flex: 1,
        backgroundColor: colors.background,
    },

    header :{
        display: "flex",
        flexDirection: "row", // Aligne les éléments horizontalement
        justifyContent:"space-between",
        alignItems:"center"
    },
});
