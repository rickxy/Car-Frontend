import React from "react";
import { useForm } from "react-hook-form";
import { registerUser } from "../services/authService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      await registerUser(data);
      toast.success("Registration successful! Please log in.");
    } catch (error) {
      toast.error("Registration failed. Try again.");
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName")} placeholder="First Name" required />
        <input {...register("lastName")} placeholder="Last Name" required />
        <input {...register("userName")} placeholder="Username" required />
        <input {...register("email")} placeholder="Email" type="email" required />
        <input {...register("password")} placeholder="Password" type="password" required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
