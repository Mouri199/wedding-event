
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthProvider } from "../Contributor/AuthContributor";
import Swal from "sweetalert2";


const SignUp = () => {

  const { createSignUpUser, signInWithGoogle } = useContext(AuthProvider);
  const signUpNavi = useNavigate()
  const [userError, setUserError] = useState();
  const [userSuccess, setUserSuccess] = useState();


  const clickSignUp = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(name, email, password);

    setUserError(" ");
    setUserSuccess(" ")


    if (password.length < 6) {
      setUserError(" Password should be at least 6 characters ")
      return;
    } else if (!/[A-Z]/.test(password)) {
      setUserError('you should use one uppercase character.')
      return;
    }else if (!/[!@#$%^&*]/.test(password))
    setUserError('you should a special character')


    createSignUpUser(email, password)
      .then(result => {
        console.log(result.user);
        setUserSuccess("User Created successfully!")
        e.target.reset()
        signUpNavi("/")
        Swal.fire({
          icon: "success",
          title: "Sign In Successful",
          text: "You have successfully signed in!",
        });
      })
      .catch(error => {
        console.error(error);
        setUserError(error.message)
        Swal.fire({
          icon: "error",
          title: "Sign In Failed",
          text: "An error occurred during sign in. Please try again.",
        });
      })


  }

  const handleSignUpGoogle = () => {
    signInWithGoogle()
      .then(result => {
        console.log(result.user)
        signUpNavi("/")
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
    <div className="hero min-h-screen bg-base-200 ">
      <div className="hero-content flex-col">
        <div className="card flex-shrink-0  w-[1000px] max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={clickSignUp} className="card-body">
            <div>
              <p>Name</p>
              <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
            </div>

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
              <button className="btn-sm rounded-lg mx-12 bg-purple-900 text-white">Sign Up</button>
            </div>
          </form>
       
        {
          userError && <p className="mx-8 text-red-600">{userError}</p>
        }
        {
          userSuccess && <p className="mx-8 text-green-600">{userSuccess}</p>
        }
      
      <p className="text-center mb-5">Already have an account? Please <Link to="/signin" className="underline text-purple-900 font-semibold">Sign In</Link> <hr className="w-[300px] mx-5 mt-5" /> </p>

      <button onClick={handleSignUpGoogle} className="btn-sm bg-purple-900 text-white mx-20 rounded-lg mb-5">SignIn with Google</button>
    </div>
      </div >
    </div >
  );
};

export default SignUp;