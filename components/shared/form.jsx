import { TextInput, View, Picker, StyleSheet, Text } from "react-native";
import { borderRadius, colors, spacing, typography } from "../../style";
import RNPickerSelect from 'react-native-picker-select';
import { Ionicons } from "@expo/vector-icons";
export function Input({
    label,
    placeholder,
    type,
    value,
    onChange,
    required,
    error,
    icon,
    isSecure,
    style,
    ...props
}) {
    return (
        <View style={styles.inputContainer}>
            {label && (
                <Text style={styles.label}>
                    {label}{" "}
                    {required && (
                        <Text style={{ color: colors.danger }}>*</Text>
                    )}
                </Text>
            )}
            <TextInput
                placeholder={placeholder}
                onChangeText={(newText) => onChange(newText)}
                defaultValue={value}
                keyboardType={type}
                cursorColor={colors.primary}
                secureTextEntry={isSecure}
                multiline={true}
                style={[styles.input, error ? styles.inputError : null,style]}
                {...props}
            />
            {icon && <Ionicons name={icon} size={typography.fontSizeLarge} style={styles.inputIcon}/>}
            
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
        </View>
    );
}

export function Select({
    options,
    label,
    error,
    required,
    onChange,
    value,
}) {
    return (
        <View style={styles.inputContainer}>
            {label && (
                <Text style={styles.label}>
                    {label}{" "}
                    {required && (
                        <Text style={{ color: colors.danger }}>*</Text>
                    )}
                </Text>
            )}
            <RNPickerSelect
                value={value}
                onValueChange={(value) => onChange(value)}
                style={{
                    inputIOS: styles.input,
                    inputAndroid: styles.input,
                    viewContainer: styles.pickerContainer, // Style du conteneur général
                    placeholder: styles.placeholderText,
                  }}
                // style={[styles.input, error ? styles.inputError : null]}
                items={options}
                placeholder={{ label: 'Choisir une option', value: null }}
            />
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        position: "relative",
        marginTop: spacing.xs,
        gap: spacing.xs,
    },
    label: {
        color: colors.text,
        fontSize: typography.fontSizeSmall,
    },
    pickerContainer: {
        borderColor: colors.text,
        borderWidth: 1,
        borderRadius: borderRadius.medium,
        height: 50,
    },
    input: {
        borderColor: colors.text,
        
        borderRadius: borderRadius.medium,
        backgroundColor:colors.gray,
        // fontSize: typography.fontSizeMedium,
        paddingVertical: spacing.md,
        paddingHorizontal: spacing.sm,
        // minHeight: 45,
    },
    inputError: {
        borderColor: colors.danger,
    },
    errorText: {
        color: colors.danger,
    },
    inputIcon:{
        position: 'absolute',
        right: 0, // Positionnez l'icône à droite
        top: '40%', // Centrez verticalement
    }
});
