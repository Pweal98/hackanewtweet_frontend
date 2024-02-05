import styles from '../styles/Connection_home_page.module.css';
import React from 'react';
import Popup from 'reactjs-popup';
import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUserInfo } from '../reducers/user';
import { useSelector } from 'react-redux';

function Connection() {
  const dispatch = useDispatch();
  const utils = require('../utils');
  const user = useSelector((state) => state.user.value);

  const [openSignUp, setOpenSignUp] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);


 // Les use state du SIGN UP
 const [inputSignUpFirsName , setInputSignUpFirsName] =  useState("")
 const [inputSignUpUsername , setInputSignUpUsername] = useState("")
 const [inputSignUpPassword , setInputSignUpPassword] = useState("")


// Les use state du SIGN IN
 const [inputSignInUsername , setInputSignInUsername] =  useState("")
 const [inputSignInPassword , setInputSignInPassword] =  useState("")

 function capitalizeFirstLetter(word) {
  if (word.length === 0) {
    return word;
  }
  return word.charAt(0).toUpperCase() + word.slice(1);
}

  const closeModalSignUp = () => setOpenSignUp(false);
  const closeModalSignIn = () => setOpenSignIn(false);

  const handleRegister = () => {
		fetch('http://localhost:3000/users/signup', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username: inputSignUpUsername, firstname : inputSignUpFirsName  ,password: inputSignUpPassword }),
		}).then(response => response.json())
			.then(data => {

				if (data.result) {
          let inputSignInUsernameUppercase  = capitalizeFirstLetter(inputSignUpUsername)
          console.log(inputSignInUsernameUppercase)
          let inputSignUpFirsNameUppercase  = capitalizeFirstLetter(inputSignUpFirsName)

          dispatch(addUserInfo({username: inputSignInUsernameUppercase, firstname : inputSignUpFirsNameUppercase  ,password: inputSignUpPassword, token : data.dataUser.token } ))
          console.log(user)
          setInputSignUpFirsName('');
					setInputSignUpUsername('');
					setInputSignUpPassword('');
				}
			});
	};
  

  const handleConnection = () => {
    fetch('http://localhost:3000/users/signin', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username: inputSignInUsername ,password: inputSignInPassword }),
		}).then(response => response.json())
			.then(data => {
				if (data.result) {
          let inputSignInUsernameUppercase  = capitalizeFirstLetter(inputSignInUsername)
          console.log(inputSignInUsernameUppercase)
          let inputSignUpFirsNameUppercase  = capitalizeFirstLetter(data.data.firstname)
          dispatch(addUserInfo({username: inputSignInUsernameUppercase, firstname : inputSignUpFirsNameUppercase  ,password: inputSignInPassword, token : data.data.token } ))
          setInputSignUpFirsName('');
					setInputSignUpUsername('');
					setInputSignUpPassword('');
				}
			});
  }
 
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.div_container_left}>
          
        </div>
        <div className={styles.div_container_right}>
          <p>knk</p>
          <h1 className={styles.container_right_title }>
            See what's<br />
            happening
          </h1>
          <h2  className={styles.container_right_sous_title}>
            Join hackatweet today.
          </h2>
          <div className={styles.container_form}>
          <button type="button" className={styles.button_light} onClick={() => setOpenSignUp(o => !o)}>
                Sign up
          </button>   

          <Popup open={openSignUp} closeOnDocumentClick onClose={closeModalSignUp}>
                  <div className={styles.modal_login_signup}>
                    <div className={styles.closclass}>
                      <a className={styles.close} onClick={closeModalSignUp}>
                        &times;
                      </a>
                    </div>
                    <div className={styles.login_popup_signup}>
                      <p  className={styles.form_txt_p}>Create your hackatweet account</p>
                      <div className={styles.container_login_popup_signup}>
                        <input className={styles.input_form} type="text" placeholder="FirsName" id="signUpFirsName" onChange={(e) => setInputSignUpFirsName(e.target.value)} value={inputSignUpFirsName}/><br/>  
                        <input className={styles.input_form} type="text" placeholder="Username" id="signUpUsername" onChange={(e) => setInputSignUpUsername(e.target.value)} value={inputSignUpUsername}/><br/>              
                        <input className={styles.input_form} type="Password" placeholder="Password" id="signUpPassword" onChange={(e) => setInputSignUpPassword(e.target.value)} value={inputSignUpPassword}/><br/>
                        <button type='button' className={styles.button_light} id="register" onClick={() => handleRegister()}>Sign up</button>
                      </div>    
                      
                    </div>
                  </div>
            </Popup>
          <p className={styles.form_txt_p}>Already have on account? </p>
          <button type="button" className={styles.button_blue} onClick={() => setOpenSignIn(o => !o)}>
                Sign in
          </button>   
          <Popup open={openSignIn} closeOnDocumentClick onClose={closeModalSignIn}>
                  <div className={styles.modal_login_signup}>
                    <div className={styles.closclass}>
                      <a className={styles.close} onClick={closeModalSignIn}>
                        &times;
                      </a>
                    </div>
                    <div className={styles.login_popup_signup}>
                      <p  className={styles.form_txt_p}>Create your hackatweet account</p>
                      <div className={styles.container_login_popup_signup}>
                        <input className={styles.input_form} type="text" placeholder="Username" id="sigInpUsername" onChange={(e) => setInputSignInUsername(e.target.value)} value={inputSignInUsername}/><br/>              
                        <input className={styles.input_form} type="Password" placeholder="Password" id="signInPassword" onChange={(e) => setInputSignInPassword(e.target.value)} value={inputSignInPassword}/><br/>
                        <button type='button' className={styles.button_light} id="register" onClick={() => handleConnection()}>Sign up</button>
                      </div>    
                      
                    </div>
                  </div>
            </Popup>
          </div>
        </div>
        
      </main>
    </div>
  );
}

export default Connection;
