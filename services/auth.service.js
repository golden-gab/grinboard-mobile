import Axios from "./caller.service";
import { jwtDecode } from "jwt-decode";
import AsyncStorage from '@react-native-async-storage/async-storage';

let saveToken = async (token) => {
    try {
        await AsyncStorage.setItem("token", token);
    } catch (error) {
        console.error("Error saving token:", error);
    }
};

async function login(data) {
    try {
        const response = await Axios.post("login", data);
        return response;
    } catch (error) {
        console.error("Login error:", error.response ? error.response.data : error.message);
        throw error;
    }
}
let logout = () => {
    Axios.post(
        "logout",
        {
            key: "value",
        },
        {
            headers: { Authorization: `Bearer ${getToken()}` },
        }
    );
    AsyncStorage.removeItem("token");
};

let isLogged = () => {
    let token = AsyncStorage.getItem("token");
    return !!token;
};

let getToken = async () => {
    let token = await AsyncStorage.getItem("token");
    return token;
};


export const AuthService = {
    saveToken,
    getToken,
    logout,
    isLogged,
    login
}