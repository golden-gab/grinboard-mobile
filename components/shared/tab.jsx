import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, Pressable  } from "react-native";
import {
    borderRadius,
    colors,
    container,
    spacing,
    typography,
} from "../../style";

const Tab = ({ page, setPage ,tabLines}) => {
   
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false} // Cache la barre de défilement
            contentContainerStyle={styles.tab}
        >
            {tabLines.map((t, index) => (
                <TabLine
                    tab={t}
                    id={index}
                    key={index}
                    setActive={(number)=>setPage(number)}
                    active={page == index && true}
                />
            ))}
        </ScrollView>
    );
};

export default Tab;

function TabLine({ tab, icon, active , setActive , id }){
    return (
        <Pressable 
            style={[styles.tabLine, active == true && styles.tabLineActive]}
            onPress={()=>setActive(id)}
        >
            <Text
                style={[
                    styles.tabLineText,
                    active == true && styles.tabLineTextActive,
                ]}
            >
                {tab.label}
            </Text>
            {icon && (
                <Ionicons
                    color={"black"}
                    size={typography.fontSizeMedium}
                    name={icon}
                />
            )}
        </Pressable>
    );
}

const styles = StyleSheet.create({
    tab: {
        flexDirection: "row", // Alignement horizontal
        gap: spacing.sm, 
    },
    tabLine: {
        paddingHorizontal:spacing.md,
        paddingVertical:spacing.sm,
        boxShadow: container.boxShadowLight,
        backgroundColor: colors.gray,
        borderRadius: borderRadius.medium,
        width: "fit-content",
    },
    tabLineActive: {
        backgroundColor: colors.primary,
    },
    tabLineTextActive: {
        color: "white",
    },
    tabLineText: {
        // fontSize: typography.fontSizeMedium,
    },
});
