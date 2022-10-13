import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
  useSignInWithGoogle,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../shared/Loading";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  let signInError;

  if (loading || gLoading) {
    return <Loading />;
  }

  if (error || gError) {
    signInError = (
      <p className="text-warning text-sm">
        {error?.message || gError?.message}
      </p>
    );
  }

  if (user || gUser) {
    console.log(gUser);
  }

  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <div className="flex px-2 pt-8 sm:pt-16 justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-lg border-2">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email Input filed start */}
            <div className="form-control w-full max-w-xs">
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
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            {/* Email Input filed end */}

            {/* Password Input filed start */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {/* Password Input filed start */}

            {/* Login Button */}
            {signInError}
            <input
              className="btn btn-primary w-full max-w-xs text-white"
              type="submit"
              value="Login"
            />
          </form>
          <p>
            <small>
              New at this website{"  "}
              <Link className="text-primary hover:underline" to="/register">
                create an account
              </Link>
            </small>
          </p>
          <div className="divider">OR</div>
          <button
            className="btn btn-outline"
            onClick={() => signInWithGoogle()}
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
