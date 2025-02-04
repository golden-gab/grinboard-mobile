import { Stack } from "expo-router";

export default function HomeLayout() {
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
            <Stack.Screen name="details" options={{ headerShown: false }}/>
        </Stack>
    );
}
