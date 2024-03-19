import React from "react";
import { useState, useEffect } from "react";

const LifecycleComponentFunction = () =>{
    const [count, SetCount] = useState(0);

    const apiRequest = async () =>{
        const response = await fetch('https://todo-redev.herokuapp.com/api/users', {
            method: 'GET',
            headers:
            {
                'accept': 'application/json',
            }
        })
        console.log(response.json());
    }

    useEffect(() => {
        apiRequest();
        return () =>{
            console.log("Элемент будет размонтирован");
        }
    },[]);

    const increment = () =>{
        SetCount(count + 1);
    }

    useEffect(() =>{
        console.log(count);
    },[count]);

    return(
    <div>
        <h2>{count}</h2>
        <button onClick={increment}>Увеличить</button>
    </div>
    )
}

export default LifecycleComponentFunction;