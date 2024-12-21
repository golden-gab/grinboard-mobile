import { Stack } from "expo-router";
import { View, Text, StyleSheet } from 'react-native';

export default function PostLayout() {
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#11345a",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "bold",
                }, 
                
            }}
        >
            <Stack.Screen name="index" options={{ headerShown: false }}/>
        </Stack>
    );
}
