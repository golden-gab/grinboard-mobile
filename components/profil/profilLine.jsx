import { Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { borderRadius, colors, spacing, typography } from "../../style";
import { Link } from "expo-router";

const ProfilLine = ({title , icon , link = ""}) => {
    return (
        <Link href={link} asChild>
            <Pressable style={styles.profilLine}>
                <View style={styles.profilLineText}>
                    <Ionicons name={icon} size={typography.fontSizeMedium} color="black" />
                    <Text style={styles.text}>{title}</Text>
                </View>
                <Ionicons name="chevron-forward" size={typography.fontSizeMedium} color="black" />
            </Pressable>
        </Link>
    );
}

export default ProfilLine;

const styles = StyleSheet.create({
    profilLine:{
        display:"flex",
        flexDirection:"row",
        padding:spacing.md,
        justifyContent:"space-between",
        borderStyle:"solid",
        borderColor:colors.gray,
        borderRadius:borderRadius.medium,
        borderWidth:2,
        alignItems:"center"
    },
    profilLineText:{
        // width:"75%",
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        gap:spacing.sm
    },
    text:{
    }
})
