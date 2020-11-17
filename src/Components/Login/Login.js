import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import "./login.scss";
import { useHistory, Link } from "react-router-dom";
import firebase from "firebase";
// import config from "./firebase.config";
import { auth } from "./firebase.config";
import Navbar from '../Home/Navbar/Navbar';
import { UserContext } from '../../App';
// firebase.initializeApp(config);

const Login = () => {
  const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, watch, errors } = useForm();
    const history = useHistory();

   // useEffect(() => {
  //   setUser(JSON.parse(localStorage.getItem("apartment-hunt")) || {});
  //   if (user?.email) {
  //     history.replace("/admin/bookinglist");
  //   }
  // }, []);
    const loginWithGoogle = async () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({
        display: "popup",
      });
  
      await auth
        .signInWithPopup(provider)
        .then(function (result) {
          const newUser = result.user;
          localStorage.setItem(
            "apartment-hunt",
            JSON.stringify({
              name: newUser.displayName,
              email: newUser.email,
              image: newUser.photoURL,
              id: newUser.uid,
            })
          );
          setLoggedInUser({
            name: newUser.displayName,
            email: newUser.email,
            image: newUser.photoURL,
            id: newUser.uid,
          });
        })
        .then(() => {
          history.push("/admin/bookinglist");
        })
        .catch(function (error) {
          alert(error.message);
          return;
        });
    };



    const handleBlur=(e)=> {
      let isFormValid = true;
       if(e.target.name === 'email'){
        isFormValid =  /\S+@\S+\.\S+/.test(e.target.value);
         
       }
       if(e.target.name === 'password'){
             const isPasswordValid = e.target.value.length > 6;
             const hasNumber = /\d{1}/.test(e.target.value);
           isFormValid = isPasswordValid && hasNumber;
       }
       if(isFormValid === true){
           console.log(" ha sob thik ache true");
       }
    }
// const handleSubmit =() => {

// }

    return (<>
        <div className="container">
            <Navbar></Navbar>
        <div className="row justify-content-center">
            <div className="col-sm-10 col-md-8 col-lg-6 mt-5 pt-5">
                <form class="loginForm">
                    <h4 className="text-left pb-4"><strong>Create an account</strong></h4>
                    <div class="form-group">
                        <input type="text" name="name" class="form-control" placeholder="First Name" required=""/>
                        <input type="text" name="name" class="form-control" placeholder="Last Name" required=""/>
                        <input type="email" name="email" onBlur={handleBlur} class="form-control" placeholder="User Name Or Email" required=""/>
                        <input name="password" type="password" onBlur={handleBlur} class="form-control" placeholder="Password" required=""/>
                        <input name="retypePassword" type="password" class="form-control" placeholder="Confirm Password" required=""/>
                        <label class="pr-2 text-danger"> </label>
                        <input type="submit" class="form-control submitButton" value="SUBMIT"/>
                    </div>
                </form>
                
            </div>
        </div>
    </div>
    <div className="login">
      <div className="login__logo">
        <img src="https://img.icons8.com/color/452/google-logo.png" alt="" />
      </div>
      <div className="login__body">
        <h3>Login With</h3>
        <button className="login__btn" onClick={loginWithGoogle}>
          <img
            src="https://img.icons8.com/color/452/google-logo.png"
            alt=""
            className="login__btnLogo"
          />
          <p className="m-auto">Continue with google</p>
        </button>
        <p>
          Don't have an account? <Link to="/login">Create an account</Link>{" "}
        </p>
      </div>
    </div>
    </>
    );
};

export default Login;