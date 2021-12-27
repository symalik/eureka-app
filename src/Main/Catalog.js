import React from 'react';
import styles from './Catalog.module.css';

export default function Catalog({item}) {
    return(
        <div className={styles.catalog}>
         <div className={styles.details}>
                    
                    {item.map( (item) => (
                    
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

