import React from "react";
import {auth} from "../../API";
import {useNavigate} from "react-router-dom";

export const Auth = () => {

    const nav = useNavigate()

    return (
        <div>
            <form className="form-signin w-50 m-auto" onSubmit={async (e) => {
                e.preventDefault();
                const fm = new FormData(e.target);
                const obj = Object.fromEntries(fm)
                const res = await auth(...obj)
                if (res) {
                    sessionStorage.setItem('user', JSON.stringify(res));
                    nav('/user')
                }
            }}>
                <h1 className="h3 mb-3 font-weight-normal">Авторизация</h1>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        id="inputEmail"
                        className="form-control"
                        placeholder="Логин"
                        required=""
                    />
                    <label htmlFor="inputEmail" className="sr-only">
                        Логин
                    </label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="password"
                        id="inputPassword"
                        className="form-control"
                        placeholder="Пароль"
                        required=""
                    />
                    <label htmlFor="inputPassword" className="sr-only">
                        Пароль
                    </label>
                </div>
                <button
                    className="btn btn-lg btn-primary btn-block my-2 w-100"
                    type="submit"
                >
                    Войти
                </button>
                <p className="mt-1 mb-3 text-muted">©2022</p>
            </form>
        </div>
    );
};
