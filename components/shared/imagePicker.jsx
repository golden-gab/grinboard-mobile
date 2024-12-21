import { useState } from "react";
import { Button, Image, View, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors, spacing } from "../../style";

export default function ImgPicker() {
    const [image, setImage] = useState("https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-profile-picture-business-profile-woman-suitable-social-media-profiles-icons-screensavers-as-templatex9_719432-1341.jpg?uid=R89866207&ga=GA1.1.1885813414.1732528064");

    async function pickImage() {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ["images"],
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.ImgContainer}>
                {image && (
                    <Image source={{ uri: image }} style={styles.image} />
                )}
                <Ionicons
                    name="camera-outline"
                    size={24}
                    color="black"
                    onPress={pickImage}
                    style={styles.icon}
                />
                {/* <Button title="Pick" onPress={pickImage} /> */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        //   flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    ImgContainer:{
        position: "relative",
    },
    image: {
        width: 160,
        height: 160,
        borderRadius: 100,
    },
    icon: {
        position: "absolute",
        bottom: 5,
        right: 18,
        backgroundColor:colors.secondary,
        padding:spacing.xs,
        color:"white",
        borderRadius: 100,
    },
});
