import React from "react";
import { useForm } from "react-hook-form";
import { loginUser } from "../services/authService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await loginUser(data);
      localStorage.setItem("token", response.data.token);
      toast.success("Login successful!");
      navigate("/car-brands");
    } catch (error) {
      toast.error("Invalid credentials. Try again.");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("userName")} placeholder="Username" required />
        <input {...register("password")} placeholder="Password" type="password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
