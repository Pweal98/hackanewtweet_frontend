
import React from 'react';
import styles from '../styles/postInput.module.css';
import  { useState } from 'react';

function postInput() {

 const [inputMessage , setInputMessage ] = useState('')

    const handleSendMessage = () => {
        fetch('https://localhost:3000/messages/addMessage', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username: signUpUsername, password: signUpPassword }),
		}).then(response => response.json())
            .then((data) => {
                if (data.result){

                }
            })
     

        
    }

    
    return (
        <>        
        <div className={styles.containeur_center_top}>
            <h2>Home</h2>
            <div className={styles.containeur_center_top_writing}>
                <input type='text' placeholder="Wath's up?" onChange={(e) => setInputMessage(e.target.value)}/>
                <div className={styles.containeur_input_size}>
                    <div className={styles.containeur_nb_string}>
                        <p>{inputMessage.length}/280</p>
                    </div>
                    <div>
                        <button onClick={() => handleSendMessage()} className={styles.btn_tweet}>Tweet</button>
                    </div>
                </div>
            </div>
        </div>
        </>

    )}

    export default postInput;
