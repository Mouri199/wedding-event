import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthProvider } from "../Contributor/AuthContributor";
import Swal from "sweetalert2";


const SignIn = () => {

  const {createSignInUser,signInWithGoogle} = useContext(AuthProvider);
  const signInNavi = useNavigate()
  const [signError, setSignError] = useState();
  const [signSuccess, setSignSuccess] = useState();

  const clickSignIn = e => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);
    setSignError(" ");
    setSignSuccess(" ");

    if (password !== password) {
      setSignError("Your password doesn't match")
      return;
    }else if(email !== email){
      setSignError("Your email doesn't match")
      return;
    }

    createSignInUser(email,password)
    .then(result=>{
      console.log(result.user);
      e.target.reset();
      signInNavi("/")
      Swal.fire({
        icon: "success",
        title: "Sign In Successful",
        text: "You have successfully signed in!",
      });
    })
    .catch(error=>{
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Sign In Failed",
        text: "An error occurred during sign in. Please try again.",
      });
    })

  }

  const handleGoogle=()=>{
    signInWithGoogle()
    .then(result => {
      console.log(result.user)
      signInNavi("/")
      Swal.fire({
        icon: "success",
        title: "Sign In Successful",
        text: "You have successfully signed in!",
      });
    })
    .then(error => {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Sign In Failed",
        text: "An error occurred during sign in. Please try again.",
      });
    })
  }


  return (

    <div>
       <div className="hero min-h-screen bg-base-200 ">
    <div className="hero-content flex-col">
      <div className="card flex-shrink-0  w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={clickSignIn} className="card-body">

          <div>
            <p>Email</p>
            <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" required />
          </div>
          <div>
            <p>Password</p>
            <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn-sm rounded-lg mx-12 bg-purple-900 text-white">Sign In</button>
          </div>
        </form>

        {
          signError && <p className="mx-8 text-red-600">{signError}</p>
        }
        {
          signSuccess && <p className="mx-8 text-green-600">{signSuccess}</p>
        }
        <p className="text-center mb-5">Dont have an account? Please <Link to="/signUp" className="font-semibold underline text-purple-900">Sign Up</Link>      <hr className="mt-10 mx-5 w-[300px]" />   </p>
      
  
      
        <button onClick={handleGoogle} className="btn-sm rounded-lg bg-purple-900 text-white mx-20 mb-10">SignUp with Google</button>
        
      </div>
    </div>
     </div>
    </div>
    
  );
};

export default SignIn;