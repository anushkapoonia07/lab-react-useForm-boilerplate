import React from "react";
import { useForm } from "react-hook-form";
import './App.css';

export default function App() {
  const {register,handleSubmit,formState: { errors },} = useForm();

  const onSubmit = (data) => {
    alert("Form submitted successfully");
  };

  return (
    <>
    <h2>Regestration Form</h2>
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="firstName" htmlFor="firstName">First Name: </label>
          <input type="text" id="firstName" placeholder="Enter your first Name"
            {...register("firstName", { required: " enter your first name" })}
          />
          <p className="error-message">{errors?.firstName?.message}</p>
        </div>
        <div>
          <label className="lastName" htmlFor="lastName">Last Name: </label>
          <input type="text" id="lastName" placeholder="Enter your Last Name"
            {...register("lastName", { required: " enter your last name" })}
          />
          <p className="error-message">{errors?.lastName?.message}</p>
        </div>
        <div>
          <label className="email" htmlFor="email">Email: </label>
          <input type="email" id="email" placeholder="Enter your Email"
            {...register("email", {required: "enter your email", pattern: {value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,message: " enter a valid email address",},
            })}
          />
          <p className="error-message">{errors?.email?.message}</p>
        </div>
        <div>
          <label className="password" htmlFor="password">Password: </label>
          <input type="password" id="password" placeholder="Enter your Password"
            {...register("password", {required: "enter your password", minLength: { value: 5, message: "Password must be at least 5 characters" },maxLength: { value: 20, message: "Password must be less than 20 characters" },
            })}
          />
          <p className="error-message">{errors?.password?.message}</p>
        </div>
        <button className="submit" type="submit">Submit</button>
      </form>
    </div>
    </>
  );
}
