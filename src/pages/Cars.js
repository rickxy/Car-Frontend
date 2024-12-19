import React, { useState, useEffect } from "react";
import axios from "axios";

const Cars = () => {
  const [cars, setCars] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  // Fetch cars from the API
  const fetchCars = async () => {
    try {
      const response = await axios.get("https://localhost:7254//api/cars"); // Replace with your API endpoint
      setCars(response.data);
      setLoading(false);
    } catch (err) {
      setError("Error fetching car data. Please try again later.");
      setLoading(false);
    }
  };

  // Run fetchCars when the component mounts
  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <div className="container">
      <h2>Cars Page</h2>
      <p>This is where you can manage cars.</p>

      {loading && <p>Loading cars...</p>}

      {error && <p className="error">{error}</p>}

      {!loading && !error && (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Brand</th>
              <th>Model</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car) => (
              <tr key={car.id}>
                <td>{car.id}</td>
                <td>{car.brand}</td>
                <td>{car.model}</td>
                <td>{car.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Cars;
