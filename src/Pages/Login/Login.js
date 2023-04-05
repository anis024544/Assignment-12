import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';


const Login = () => {
  const location = useLocation()
  const navigate = useNavigate();

 
  let from = location.state?.from?.pathname || "/";

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [ signInWithEmailAndPassword,user,loading, error]= useSignInWithEmailAndPassword(auth); 
      

    const [token] = useToken(user || gUser);

    useEffect(() => {
      if (token) {
        navigate(from, { replace: true });
      }
    });
    
     let signInError;

    
     if(loading || gLoading){
      return <loading></loading>
    }
    if(error || gError){
      signInError = <p>{error?.message || gError?.message}</p>
    }
  
    




    const handleLogin = async data => {
      const rest = await signInWithEmailAndPassword(data.email, data.password)
        console.log(rest,'from line 26',data);
       
    }

    return (
        <div className="flex justify-center items-center h-screen">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-center text-2xl font-bold">Login</h2>
            {/* <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
               
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                      value: true,
                      message:'Email is required'
                  },
   
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: 'Provide a valid email' 
                  }
                })}
              />
              <label className="label">
              {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors.email.message}</span>} 
              {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.email.message}</span>} 
                
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
               
              </label>
              <input
                type="password"
                placeholder="Your password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                      value: true,
                      message:'Password is required'
                  },
   
                  minLength: {
                    value: 6,
                    message: 'Must be six characters or longer' 
                  }
                })}
              />
              <label className="label">
              {errors.password?.type === 'required' && <span className="label-text-alt text-red-600">{errors.email.message}</span>} 
              {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors.email.message}</span>} 
                
              </label>
            </div> */}
            <form onSubmit={handleSubmit(handleLogin)}>
                      <div className="form-control w-full max-w-xs">
                          <label className="label"> <span className="label-text">Email</span></label>
                          <input type="text"
                              {...register("email", {
                                  required: "Email Address is required"
                              })}
                              className="input input-bordered w-full max-w-xs" />
                          {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                      </div>
                      <div className="form-control w-full max-w-xs">
                          <label className="label"> <span className="label-text">Password</span></label>
                          <input type="password"
                              {...register("password", {
                                  required: "Password is required",
                                  minLength: { value: 6, message: 'Password m  ust be 6 characters or longer' }
                              })}
                              className="input input-bordered w-full max-w-xs" />
                          <label className="label"> <span className="label-text">Forget Password?</span></label>
                          {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}
                      </div>
                      <input className='btn btn-accent w-full' value="Login" type="submit" />
                      <div className="text-red-500  font-bold">
                      {signInError}
                      </div>
                  </form>
                  <p><small>New to Doctors-Portals? <Link className='text-primary' to='/signUp'>Please Crate an account</Link></small></p>
           
            <div className="divider">OR</div>
  
  
            <button
              onClick={() => signInWithGoogle()}
              className="btn  btn-outline"
            >
              Continue With Google
            </button>
  
          </div>
        </div>
      </div>
    );
};

export default Login;