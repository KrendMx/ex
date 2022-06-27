import React, {useState} from 'react'
import {reg} from "../../API";
import {useNavigate} from "react-router-dom";

export const Reg = () => {

    const nav = useNavigate()

    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    return (
        <div>
            <form class="form-signin w-50 m-auto" onSubmit={async (e) => {
                e.preventDefault();
                const fm = new FormData(e.target);
                const req = Object.fromEntries(fm);
                const res = await reg(...req)
                if (res) {
                    sessionStorage.setItem('user', JSON.stringify(res));
                    nav('/user')
                }
            }}>
                <h1 class="h3 mb-3 font-weight-normal">Регистрация</h1>
                <div class="form-floating mb-3">
                    <input
                        type="text"
                        id="inputEmail"
                        class="form-control"
                        name={"login"}
                        placeholder="Логин"
                        required=""
                    />
                    <label htmlFor="inputEmail" className="sr-only">
                        Логин
                    </label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="email"
                        id="inputFIO"
                        className="form-control"
                        placeholder="Логин"
                        name={"fio"}
                        required=""
                    />
                    <label htmlFor="inputFIO" className="sr-only">
                        Электронная почта
                    </label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="password"
                        id="inputPassword"
                        className="form-control"
                        placeholder="Пароль"
                        require
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        name={"password"}
                    />
                    <label htmlFor="inputPassword" className="sr-only">
                        Пароль
                    </label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="password"
                        id="inputPasswordRepeat"
                        className="form-control"
                        placeholder="Пароль"
                        require
                        onChange={(e) => {
                            setRepeatPassword(e.target.value)
                        }}
                        name={"password"}
                    />
                    <label htmlFor="inputPassword" className="sr-only">
                        Повторить пароль
                    </label>
                </div>
                <button
                    class="btn btn-lg btn-primary btn-block my-2 w-100"
                    type="submit"
                    disabled={!(password === repeatPassword && password.length > 0)}
                >
                    Регистрация
                </button>
                <p class="mt-1 mb-3 text-muted">©2022</p>
            </form>
        </div>
    )
}
