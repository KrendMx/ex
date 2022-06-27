import React, {useEffect, useState} from "react";
import {createFavorite, getAllItems} from "../../API";

export const Catalog = () => {
    const [load, setLoad] = useState(false);
    const [item, setItem] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await getAllItems()
            setItem(res)
            if (item.length) {
                setLoad(true);
            }
        })();
    }, [item.length]);

    return (
        <div>
            <h1>Каталог</h1>
            {load ? (
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-evenly",
                    }}
                >
                    {item.map((el) => {
                        return (
                            <div className="text-center card" style={{width: "400px", position: 'relative'}}>
                                <h4>{el.Title}</h4>
                                <image src={`../../Image/${el.Image}`} alt={el.Description}/>
                                <p>{el.Description}</p>
                                <h5 className="text-danger">${el.Price}</h5>
                                {!sessionStorage.getItem("user") ? <button
                                    style={{
                                        alignSelf: 'end',
                                        width: '12%',
                                        position: 'absolute',
                                        top: '3px',
                                        right: '3px'
                                    }}
                                    onClick={async () => {
                                        const login = JSON.parse(sessionStorage.getItem("user"))
                                        await createFavorite(login, el.id)
                                    }}
                                    className={"btn btn-outline-primary"}>⭐</button> : null}
                            </div>
                        );
                    })}
                </div>
            ) : (
                <div
                    class="spinner-border"
                    style={{width: "8rem", height: "8rem"}}
                    role="status"
                >
                    <span className="visually-hidden">Loading...</span>
                </div>
            )}
        </div>
    );
};
