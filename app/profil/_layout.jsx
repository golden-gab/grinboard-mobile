import { Stack } from "expo-router";
import { View, Text, StyleSheet } from 'react-native';

export default function ProfilLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }}/>
            <Stack.Screen name="informations" options={{ headerShown: false }}/>
            <Stack.Screen name="mesAnnonces" options={{ headerShown: false }}/>
        </Stack>
    );
}
