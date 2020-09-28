import React, { useContext, useState } from 'react';
import './login.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [newUser,setNewUser] = useState(false);

    const [user,setUser] = useState({
  
        isSign:false,
        name:'',
        email:'',
        password:'',
        error:'',
        success:''
  
    })

    const [loggedInUser,setloggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    const gLogin = () => {

        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(function(result) {
           
            var {displayName,email} = result.user;
            const signInUser = {name:displayName , email}
            setloggedInUser(signInUser);
            history.replace(from)
console.log(result.user)
          
          }).catch(function(error) {
            var errorMessage = error.message;
            console.log(errorMessage);
          });
          

    }

    const fildBlur = (e) =>{

        console.log(e.target.name,e.target.value);
        let inputValid = true;
        if(e.target.name === 'email'){
    
          inputValid = /\S+@\S+\.\S+/.test(e.target.value)
        }
        if(e.target.name === 'password'){
    
          const passLength = e.target.value.length >7;
          const passNum = /\d{1}/.test(e.target.value);
          inputValid = passLength && passNum
        }
    
        if(inputValid){
    
          const oldUser = {...user};
          oldUser[e.target.name] = e.target.value ;
          setUser(oldUser)
    
    
        }
    
      }


      const fromSubmit = (e) =>{
        console.log(user.email , user.password)
        if(newUser && user.email && user.password){
    
          firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
          .then(res =>{
          const newUser = {...user};
          newUser.success = true;
          newUser.error ='';
          setUser(newUser);
          updateUserInfo(user.name);
          history.replace(from)
    
    
          })
          .catch(function(error) {
            const newUser = {...user};
            newUser.error = error.message;
            newUser.success = false;
            setUser(newUser)
          });
    
        }
        if(!newUser && user.email && user.password){
    
          firebase.auth().signInWithEmailAndPassword(user.email, user.password)
          .then(res => {
    
            const newUser = {...user};
          newUser.success = true;
          newUser.error ='';
          setUser(newUser);
          history.replace(from)
          console.log(res.user)
    
          })
          
          .catch(function(error) {
            
            const newUser = {...user};
            newUser.error = error.message;
            newUser.success = false;
            setUser(newUser)
            
          });
    
    
        }
    
        e.preventDefault();
      }
      const updateUserInfo = name =>{

        const user = firebase.auth().currentUser;
    
    user.updateProfile({
      displayName: name,
      
    }).then(function() {
      console.log('create user successfuly')
    }).catch(function(error) {
      console.log(error)
    });
    
    
      }
    return (
        <div>
            <div className="signUp">
                <h1>Create an acount</h1>

                <form onSubmit={fromSubmit}>


                {

                    newUser && <div>
                        <input type="text" id="fname" name="fname" onBlur={fildBlur} placeholder="Fast name"/>
                <br/> <br/>
                <input type="text" id="fname" name="fname" onBlur={fildBlur} placeholder="Last name"/>
                    </div>
                }
                <br/> <br/>
                <input type="text" id="fname" name="email" onBlur={fildBlur} placeholder="Enter Your email"/>
                <br/> <br/>
                <input type="text" id="fname" name="password" onBlur={fildBlur}  placeholder="Password"/>
                <br/> <br/>
                {

                    newUser && <input type="text" id="fname" name="cpassword" onBlur={fildBlur} placeholder="Confrim Password"/>
                    
                }
                <br/>
                <input type="submit" value="submit"/>

                <p onClick={() => setNewUser(!newUser)}>already I have a acount</p>

                </form>
                
            </div>
                <div className="buttons">

                <button className="fbLogin">login with facebook</button>
               <button className="gLogin" onClick={gLogin}> login with google</button>

                </div>
            
        </div>
    );
};

export default Login;