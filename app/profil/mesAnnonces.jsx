import React, { useState } from "react";
import Page from "../../components/shared/page";
import Header from "../../components/shared/header";
import Tab from "../../components/shared/tab";
import { StyleSheet, View, Text } from "react-native";
import { Input } from "../../components/shared/form";
import Button from "../../components/shared/Button";
import { Ionicons } from "@expo/vector-icons";
import { spacing, typography } from "../../style";

const MesAnnonces = () => {
    const [page, setPage] = useState(0);
    const tabLines = [
        { label: "Tout", value: 10 },
        { label: "Actif", value: 10 },
        { label: "Non actif", value: 10 },
    ];
    return (
        <Page>
            <Header back title={"Mes annonces"} />
            <Tab page={page} setPage={setPage} tabLines={tabLines} />
            {page == 0 && <Text>Tout</Text>}
            {page == 1 && <Text>Actif</Text>}
            {page == 2 && <Text>Non actif</Text>}
        </Page>
    );
};

export default MesAnnonces;

const styles = StyleSheet.create({
    head: {
        // flexDirection:"row"
        marginTop: spacing.sm,
    },
});
