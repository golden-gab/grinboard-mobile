import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import { View, Text, StyleSheet } from "react-native";
import { colors, typography, spacing } from "../../style.js";

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
               
                tabBarActiveTintColor: colors.primary,
                tabBarLabelStyle:{
                    fontSize:typography.fontSizeSmall
                },
                tabBarStyle:{
                    paddingVertical: spacing.lg,
                    height: 60
                }
            }}
            initialRouteName="(home)"
        >
             <Tabs.Screen
                name="(home)"
                options={{
                    title: "Accueil",
                    // tabBarActiveBackgroundColor:colors.primary,
                    tabBarIcon: ({focused,color}) => (
                        <Ionicons
                            name="home-outline"
                            size={typography.fontSizeLarge}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="(post)"
                options={{
                    title: "Publier",
                    // tabBarActiveBackgroundColor:colors.primary,
                    tabBarIcon: ({focused,color}) => (
                        <Ionicons
                            name="add-circle-outline"
                            size={typography.fontSizeLarge}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="(explore)"
                options={{
                    title: "Explorer",
                    // tabBarActiveBackgroundColor:colors.primary,
                    tabBarIcon: ({focused,color}) => (
                        <Ionicons
                            name="search"
                            size={typography.fontSizeLarge}
                            color={color}
                        />
                    ),
                }}
            />
             <Tabs.Screen
                name="(profil)"
                options={{
                    title: "Profil",
                    // tabBarActiveBackgroundColor:colors.primary,
                    tabBarIcon: ({focused,color}) => (
                        <Ionicons
                            name="person-outline"
                            size={typography.fontSizeLarge}
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}
