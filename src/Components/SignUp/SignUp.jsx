
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthProvider } from "../Contributor/AuthContributor";



const SignUp = () => {

  const { createSignUpUser } = useContext(AuthProvider);


  const clickSignUp = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(name, email, password);
    createSignUpUser(email, password)
    .then(result=>{
      console.log(result.user);
    })
    .catch(error=>{
      console.error(error);
    })


  }


  return (
    <div className="hero min-h-screen bg-base-200 ">
      <div className="hero-content flex-col">
        <div className="card flex-shrink-0  w-full max-w-sm shadow-2xl bg-base-100">
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
              <button className="btn bg-purple-900 text-white">Sign Up</button>
            </div>
          </form>
          <p className="text-center mb-5">You already have an account? <br /> Please <Link to="/signin" className="hover:underline"><button className="btn btn-link">Sign In</button></Link> </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;