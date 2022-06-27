import Axios from "axios";

const address = "http://localhost:9000/API/";

const reg = async (login, password, email) => {
    try {
        const res = await Axios.post(address + "Reg", {
            Login: login,
            Email: email,
            Password: password,
        });
        sessionStorage.setItem("user", JSON.stringify(res));
    } catch (e) {
        console.log(e);
        alert(
            "Введенные данные некорректы, возможно, такой пользователь уже зарегистрирован"
        );
    }
};

const auth = async (login, password) => {
    try {
        const res = await Axios.post(address + "Auth", {
            Login: login,
            Password: password,
        });
        sessionStorage.setItem("user", JSON.stringify(res));
    } catch (e) {
        console.log(e);
        alert("Введенные данные некорректны");
    }
};

const changeUserInfo = async (changeLabel, changeValue, userId) => {
    try {
        const res = await Axios.post(address + "changeUserInfo", {
            ChangeLabel: changeLabel,
            ChangeValue: changeValue,
            UserId: userId,
        });
        sessionStorage.setItem("user", JSON.stringify(res));
    } catch (e) {
        console.log(e);
        alert("Ошибка операции");
    }
};

const createFavorite = async (userId, itemId) => {
    try {
        const res = await Axios.post(address + "createFavorite", {
            UserId: userId,
            ItemId: itemId,
        });
        sessionStorage.setItem("favorite", JSON.stringify(res));
    } catch (e) {
        console.log(e);
        alert("Ошибка операции");
    }
};

const getFavorite = async (userId) => {
    try {
        const res = await Axios.post(address + "getFavorite", {UserId: userId});
        return res;
    } catch (e) {
        console.log(e);
        alert("Ошибка операции");
    }
};

const getAllItems = async () => {
    try {
        const res = await Axios.get(address + "getAllItems");
        return res;
    } catch (e) {
        console.log(e);
        alert("Ошибка операции");
    }
};

const removeFavorite = async (itemId, userId) => {
    try {
        const res = await Axios.post(address + "removeFavorite", {
            ItemId: itemId,
            UserId: userId
        })
        alert('Успех')
    } catch (e) {
        console.log(e);
        alert('Ошибка операции')
    }
}

export {auth, reg, changeUserInfo, createFavorite, getFavorite, getAllItems, removeFavorite};
