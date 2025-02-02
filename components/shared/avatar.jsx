import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { spacing, typography } from "../../style";

const Avatar = () => {
    return (
        <View style={styles.avatarContainer}>
            <Image
                source={{
                    uri: "https://server.grinboard.com/public/storage/images/annonces/1726839251.Screenshot 2024-09-20 143349.png",
                }}
                style={styles.userImage}
            />
            <Text style={styles.userName}>Golden gab</Text>
        </View>
    );
};

export default Avatar;

const styles = StyleSheet.create({
    avatarContainer:{
        flexDirection: "row",
        alignItems: "center",
        gap:spacing.sm
    },
    userImage:{
        width: 30,
        height: 30,
        borderRadius: 100,
    },
    userName:{
        fontSize:typography.fontSizeSmall
    }
})
