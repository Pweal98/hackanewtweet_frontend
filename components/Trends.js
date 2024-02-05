
import React from 'react';
import styles from '../styles/trends.module.css';
import  { useState } from 'react';
import { useSelector , useDispatch  } from 'react-redux';

function trends(){

 const [inputMessage , setInputMessage ] = useState('')

 const user = useSelector((state) => state.user.value);

    return (
        <>        
        <div className={styles.containeur_right}>
            <h2>Trends</h2>
            {/* Je dois ajouter components pour chaque #hastage */}
            <div className={styles.containeur_hastag}>
                <div className={styles.hastag}>
                    <div>
                        <p>#jesuisfort</p>
                    </div>
                    <div>
                        <p>2 tweets</p>
                    </div>
                </div>
                <div className={styles.hastag}>
                    <div>
                        <p>#jesuisfort</p>
                    </div>
                    <div>
                        <p>2 tweets</p>
                    </div>
                </div>
            </div>
        </div>
        </>

    )}

    export default trends;
