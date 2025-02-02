import { StyleSheet, ScrollView } from "react-native";
import { colors, spacing} from "../../style.js";

export default function Page({children}){
    return(
        <ScrollView 
            style={styles.container} 
            contentContainerStyle={styles.contentContainer} 
            showsVerticalScrollIndicator={false}
        >
            {children}
        </ScrollView> 
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    contentContainer: {
        padding: spacing.md,
       
    },
});