import React, {useState, useEffect } from "react";
import styles from './Search.module.css';
import {getApiData} from './Api';

export default function Search() {

    const [apidata, setApiData] = useState([]);
    const [title, setTitle] = useState(null);

    const getData = async () => {
        try {
            const data = await getApiData(title);
            setApiData(data);
        } catch (err) {
            console.log(err.message);
        }
    }

    useEffect(() => {
        getApiData();
    }, []);

    return(
        <div className={styles.search}>
            <h2>Search the '<span>Eureka</span>' Card Catalog Database by Title</h2>
            <div>
                <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder="Enter Title..." />
                <button type="button" onClick={() => getData()}>Search</button>
            </div>
            <div className={styles.details}>
            {apidata.map( (item) => (
                    
                    <div>
                        <h3><span>Topic: </span>{item.topic}</h3>
                        <h5><span>α: </span>{item.cardId}</h5>
                        <br/>
                        <br/>
                        <span>{item.title}</span> <br/>
                        <h4>Steps:</h4>
                        <h4>{item.step1}</h4>
                        <h4>{item.step2}</h4>
                        <h4>{item.step3}</h4>
                        <h4>{item.step4}</h4>
                        <h4>{item.step5}</h4>
                        <h4>{item.step6}</h4>
                        <h4>{item.step7}</h4>
                        <h4>{item.step8}</h4>
                        <h4>{item.step9}</h4>
                        <h5><span>Date: </span>{item.createdDate} </h5>
                    </div>
                    ))}
            </div>
        </div>

    );

}