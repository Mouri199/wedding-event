import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthProvider } from "../Contributor/AuthContributor";


const SignIn = () => {

  const {createSignInUser} = useContext(AuthProvider);

  const clickSignIn = e => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);
    createSignInUser(email,password)
    .then(result=>{
      console.log(result.user);
    })
    .catch(error=>{
      console.error(error);
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
            <button className="btn bg-purple-900 text-white">Sign In</button>
          </div>
        </form>
        <p className="text-center mb-5">Are you new here? <br /> Please <Link to="/signUp" className="font-semibold underline text-purple-900">Sign Up</Link> </p>
      </div>
    </div>
     </div>
    </div>
    
  );
};

export default SignIn;