import React from 'react';
import styles from '../styles/Articles.module.css';
import PostInput from './PostInput';
import Post from './Post';
import Trends from './Trends';
import { useSelector ,useDispatch  } from 'react-redux';
import { logoutUser } from '../reducers/user';

function Articles() {

    const dispatch = useDispatch();
  
    const user = useSelector((state) => state.user.value);
    // Logout
    const handleLogout = () => {
        dispatch(logoutUser())
    }
  return (
    
    <div className={styles.main}>
        <div className={styles.containeur_left}>
            <div className={styles.logo}>
                <h1>LOGO</h1>
            </div>
            <div className={styles.containeur_profil_logout}>
                <div className={styles.profil}>
                    <div className={styles.img_profil}>
                        <img className={styles.img} src="profils_ilg.jpeg" alt="logo" />
                    </div>
                    
                    <div className={styles.info_profil}>
                        <h3>{user[0].firstname}</h3>
                        <p className={styles.p_info_profil}>@{user[0].username}</p>
                    </div>
                </div> 
                <button className={styles.button_blue} onClick={() => handleLogout()}>Logout</button>
            </div>
        </div>
        <div className={styles.containeur_center}>
        <PostInput />
        <Post />
        </div>
        <div className={styles.containeur_right}>
            <Trends />
        </div>
    </div>
    
  );
}

export default Articles;
