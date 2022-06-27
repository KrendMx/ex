import React, {useEffect, useState} from 'react'
import {useNavigate} from "react-router-dom";
import {getFavorite, removeFavorite} from "../../API";

export const User = () => {

    const nav = useNavigate()
    const [load, setLoad] = useState(false)
    const [favorite, setFavorite] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            if (sessionStorage.getItem("user")) nav('/')
        }, 300)
    }, [])

    useEffect(() => {
        (async () => {
            const res = await getFavorite(JSON.parse(sessionStorage.getItem('user').id))
            setFavorite(res)
            setLoad(true)
        })()
    }, [])

    return (<div>
        <h1>Личный кабинет</h1>
        {load ? <>
            <div className={"card w-50 mx-auto my-2"}>
                <div className={"card-header"}>
                    <h2>Личная информация</h2>
                </div>
                <div className={"card-body w-75 mx-auto"}>
                    <table className={"table"}>
                        <thead className={"table table-primary"}>
                        <tr>
                            <td>Логин</td>
                            <td>Пароль</td>
                            <td>Ф.И.О.</td>
                        </tr>
                        </thead>
                        <tbody>{}</tbody>
                    </table>
                </div>
            </div>
            <div className={"card w-50 mx-auto my-2"}>
                <div className={"card-header bg-dark text-light"}>
                    <h2>Избранное</h2>
                </div>
                <div className={"card-body w-75 mx-auto"}>
                    <table className={"table table-bordered"}>
                        <thead className={"table-dark"}>
                        <tr>
                            <td>Название товара</td>
                        </tr>
                        </thead>
                        <tbody>{favorite.map(el => {
                            return <tr>
                                <td>{el.Title}</td>
                            </tr>
                        })}</tbody>
                    </table>
                </div>
            </div>
            <div className={"card w-50 mx-auto my-2"}>
                <div className={"card-header"}>
                    <h2>Изменить электронную почту</h2>
                </div>
                <div className={"card-body w-75 mx-auto"}>
                    <form onSubmit={async (e) => {
                        e.preventDefault();
                    }}>
                        <div className={"form-floating w-100"}>
                            <input type={"email"} required id={"email"} name={"email"} className={"form-control"}
                                   placeholder={"ret"}/>
                            <label htmlFor={"email"}>Новая электронная почта</label>
                        </div>
                    </form>
                    <button className={"btn btn-lg btn-dark w-100 mx-0 my-2"}>Изменить</button>
                </div>
            </div>
            <div className={"card w-50 mx-auto my-2"}>
                <div className={"card-header"}>
                    <h2>Изменить пароль</h2>
                </div>
                <div className={"card-body w-75 mx-auto"}>
                    <form onSubmit={async (e) => {
                        e.preventDefault();
                    }}>
                        <div className={"form-floating w-100"}>
                            <input type={"text"} required id={"email"} name={"email"} className={"form-control"}
                                   placeholder={"ret"}/>
                            <label htmlFor={"email"}>Новый пароль</label>
                        </div>
                    </form>
                    <button className={"btn btn-lg btn-dark w-100 mx-0 my-2"}>Изменить</button>
                </div>
            </div>
            <div className={"card w-50 mx-auto my-2"}>
                <div className={"card-header"}>
                    <h2>Изменить логин</h2>
                </div>
                <div className={"card-body w-75 mx-auto"}>
                    <form onSubmit={async (e) => {
                        e.preventDefault();
                    }}>
                        <div className={"form-floating w-100"}>
                            <input type={"text"} required id={"email"} name={"email"} className={"form-control"}
                                   placeholder={"ret"}/>
                            <label htmlFor={"email"}>Новый логин</label>
                        </div>
                    </form>
                    <button className={"btn btn-lg btn-dark w-100 mx-0 my-2"}>Изменить</button>
                </div>
            </div>
            <div className={"card w-50 mx-auto my-2"}>
                <div className={"card-header bg-dark text-light"}>
                    <h2>Удаление из избранного</h2>
                </div>
                <div className={"card-body w-75 mx-auto"}>
                    <form onSubmit={async (e) => {
                        e.preventDefault();
                        const fm = new FormData(e.target);
                        const obj = Object.fromEntries(fm)
                        await removeFavorite(...fm, JSON.parse(sessionStorage.getItem("user")).UserId);
                    }}>
                        <div className={"form-label w-100"}>
                            <input type={"text"} required id={"itemId"} name={"itemId"} className={"form-control"}
                                   placeholder={"ret"}/>
                            <label htmlFor={"itemId"}>Номер товара</label>
                        </div>
                        <button className={"btn btn-lg btn-dark w-100 mx-0 mb-2"}>Удалить</button>
                    </form>
                </div>
            </div>
        </> : <div
            className="spinner-border"
            style={{width: "8rem", height: "8rem"}}
            role="status"
        >
            <span className="visually-hidden">Loading...</span>
        </div>}
    </div>)
}
