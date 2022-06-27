import React from "react";
import {Link, useNavigate} from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div class="container">
                <header
                    class="d-flex flex-wrap align-items-center justify-content-evenly justify-content-md-between py-3 mb-4 border-bottom">
                    <h5 class="nav-link px-2">Company name</h5> {/* Поменяй название компании при создании приложения*/}
                    <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li>
                            <Link to="/" class="nav-link px-2 link-secondary">
                                Главная
                            </Link>
                        </li>
                        <li>
                            <Link to="/catalog" class="nav-link px-2 link-dark">
                                Каталог
                            </Link>
                        </li>
                        <li>
                            <Link to="/user" class="nav-link px-2 link-dark">
                                Личный кабинет
                            </Link>
                        </li>
                    </ul>

                    {sessionStorage.getItem("user") ? <div className="col-md-3 text-end">
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => {
                                sessionStorage.clear()
                            }}
                        >
                            Выход
                        </button>
                    </div> : <div className="col-md-3 text-end">
                        <button
                            type="button"
                            className="btn btn-outline-primary me-2"
                            onClick={() => {
                                navigate("/reg");
                            }}
                        >
                            Регистрация
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => {
                                navigate("/auth");
                            }}
                        >
                            Вход
                        </button>
                    </div>}
                </header>
            </div>
        </div>
    );
};
