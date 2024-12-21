import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import { borderRadius, colors, spacing, typography } from '../../style';

const Button = ({children , onPress,style}) => {
    return (
        <Pressable style={[styles.button,style]} onPress={onPress}>
            <Text style={styles.text}>{children}</Text>
        </Pressable>
    );
}

export default Button;

const styles = StyleSheet.create({
    button:{
        padding:spacing.sm,
        borderStyle:"solid",
        borderColor:"none",
        backgroundColor:colors.primary,
        borderRadius:borderRadius.medium,
        alignItems:"center",
        justifyContent:"center",
        display:"flex",
        height:50,
        // borderWidth:2,
    },
    text:{
        fontSize:typography.fontSizeMedium,
        color:"white",
        textAlign:"center",
    }
})