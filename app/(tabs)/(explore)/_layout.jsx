import { Stack } from "expo-router";
import { View, Text, StyleSheet } from 'react-native';

export default function ExploreLayout() {
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#000",
                },
                headerShown:false,
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "bold",
                }, 
                
            }}
        >
            <Stack.Screen name="index" />
            <Stack.Screen name="annonces" />
        </Stack>
    );
}
