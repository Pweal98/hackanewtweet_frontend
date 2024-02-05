
import React from 'react';
import styles from '../styles/post.module.css';
import  { useState } from 'react';
import { useSelector , useDispatch  } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function post() {

 const [inputMessage , setInputMessage ] = useState('')

 const user = useSelector((state) => state.user.value);

    return (
        <>        
        <div className={styles.containeur_center_bottom}>
            <div className={styles.containeur_profil}>
                <div className={styles.img_profil_post}>
                    <img className={styles.img} src="profils_ilg.jpeg" alt="logo" />
                </div>
                <div className={styles.info_profil_post}>
                    <p  className={styles.p_info_profil}> <span className={styles.span_info_profil}>{user[0].firstname}</span> @{user[0].username} * 5 hours</p>
                </div>
            </div>
            <div className={styles.message_post}>
                <p>Hello je mange du pain</p>
            </div>
            <div className={styles.like_post}>
                <div>
                    <FontAwesomeIcon
                        icon={faHeart}
                    />
                </div>
                <div>
                    <p>nbLike</p>
                </div>
              
            </div>
        </div>
        </>

    )}

    export default post;
