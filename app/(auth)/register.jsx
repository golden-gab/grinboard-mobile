import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors, spacing, typography } from '../../style';
import AuthContainer from '../../components/auth/authContainer';
import { Input } from '../../components/shared/form';
import Button from '../../components/shared/Button';
import { Link } from 'expo-router';

const RegisterScreen = () => {
     const [user , setUser] = useState({
        name:"",
        email:"",
        password:"",
    })
    return (
        <AuthContainer title={"S'inscrire"} description={"Créez un compte pour accéder à nos nombreuses annonces"}>
            <Input
                label={"Nom d'utilisateur"}
                value={user.name}
                onChange={(newText) => setUser({...user,name:newText})}
            />
            <Input
                label={"Email"}
                value={user.email}
                type={"email-addess"}
                onChange={(newText) => setUser({...user,email:newText})}
            />
             <Input
                label={"Mot de passe"}
                value={user.password}
                type={"password"}
                // icon={"lock-closed-outline"}
                isSecure={true}
                onChange={(newText) => setUser({...user,password:newText})}
            />
            <Button style={{marginTop:spacing.xs}}>S'inscrire</Button>
            <Link href={"/login"} style={styles.linkBottom}>Se connecter à son compte</Link>
        </AuthContainer>
    );
}

export default RegisterScreen;

const styles = StyleSheet.create({

    linkBottom:{
        color:colors.primary,
        textAlign:"center",
        margin:spacing.sm,
        fontWeight:"bold"
    }
});
