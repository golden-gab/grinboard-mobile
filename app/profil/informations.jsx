import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import Page from "../../components/shared/page";
import Header from "../../components/shared/header";
import { Input, Select } from "../../components/shared/form";
import { spacing } from "../../style";
import Button from "../../components/shared/Button";

const Informations = () => {
    const [info, setInfo] = useState({
        username: "",
        telephone: "",
        email: "",
    });
    const [text, setText] = useState("");
    const options = [{ label: "test", value: 1 }];
    return (
        <Page>
            <Header title={"Mes informations"} back />
            <View style={styles.formContainer}>
                <Input
                    label={"Nom d'utilisateur"}
                    value={info.username}
                    required={true}
                    onChange={(text) => setInfo({ ...info, username: text })}
                />
                <Input
                    label={"Email"}
                    value={info.email}
                    required={true}
                    type={"email-address"}
                    // error={"test d'erreur"}
                    onChange={(text) => setInfo({ ...info, email: text })}
                />
                <Input
                    label={"Telephone"}
                    value={info.telephone}
                    required={true}
                    type={"phone-pad"}
                    // error={"Ce champ est requis"}
                    onChange={(text) => setInfo({ ...info, telephone: text })}
                />
                <Button style={{ marginTop: spacing.lg }}>Enrégistrer</Button>
            </View>
        </Page>
    );
};

export default Informations;

const styles = StyleSheet.create({
    formContainer: {
        // marginTop: spacing.lg,
        gap: spacing.sm,
    },
});
