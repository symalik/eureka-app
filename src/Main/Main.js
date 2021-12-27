import React, { useState, useEffect } from "react";
import styles from './Main.module.css';
import Catalog from "./Catalog";

export default function Main() {

    const url = `https://localhost:44375/api/cards`;
   
    const [data, setData] = useState(null);
    
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then(setData);
    }, [url]);

    if(data) {
        return (
            <div className={styles.main} >
                <Catalog item={data} />
            </div>
        );
    }
    return(
        <h1>Data could not be loaded.</h1>
    );
}

