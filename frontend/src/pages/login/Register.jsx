import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex pt-8 sm:pt-16  px-2 justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl border-2">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Registr</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name Input filed start */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                name="fname"
                type="text"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
                {...register("fname", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  },
                })}
              />
              <label className="label p-[2px]">
                {errors.fname?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.fname.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.fname.message}
                  </span>
                )}
              </label>
            </div>
            {/* Name Input filed end */}

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
              <label className="label p-[2px]">
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
                name="password"
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
            <input
              className="btn btn-primary w-full max-w-xs text-white"
              type="submit"
              value="Register"
            />
          </form>
          <p>
            <small>
              Alrady have an account?{" "}
              <Link className="text-primary hover:underline" to="/login">
                please login
              </Link>
            </small>
          </p>
          <div className="divider m-0">OR</div>
          <button className="btn btn-outline">Continue with Google</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
