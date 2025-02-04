import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors, typography, spacing } from "../../style.js";

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: colors.primary,
                tabBarLabelStyle: {
                    fontSize: typography.fontSizeSmall,
                },
                tabBarStyle: {
                    paddingVertical: spacing.lg,
                    height: 60,
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Accueil",
                    tabBarIcon: ({ color }) => (
                        <Ionicons
                            name="home-outline"
                            size={typography.fontSizeLarge}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="post"
                options={{
                    title: "Publier",
                    tabBarIcon: ({ color }) => (
                        <Ionicons
                            name="add-circle-outline"
                            size={typography.fontSizeLarge}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="explore"
                options={{
                    title: "Explorer",
                    tabBarIcon: ({ color }) => (
                        <Ionicons
                            name="search"
                            size={typography.fontSizeLarge}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="profil"
                options={{
                    title: "Profil",
                    tabBarIcon: ({ color }) => (
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
