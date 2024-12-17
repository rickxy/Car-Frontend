import React, { useEffect, useState } from "react";
import { getCarBrands, createCarBrand } from "../services/carService";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const CarBrands = () => {
  const [carBrands, setCarBrands] = useState([]);
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    fetchCarBrands();
  }, []);

  const fetchCarBrands = async () => {
    const response = await getCarBrands();
    setCarBrands(response.data);
  };

  const onSubmit = async (data) => {
    try {
      await createCarBrand(data);
      toast.success("Car brand added successfully!");
      fetchCarBrands();
      reset();
    } catch (error) {
      toast.error("Failed to add car brand.");
    }
  };

  return (
    <div className="container">
      <h2>Car Brands</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} placeholder="Car Brand Name" required />
        <button type="submit">Add Brand</button>
      </form>

      <ul>
        {carBrands.map((brand) => (
          <li key={brand.id}>{brand.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CarBrands;
