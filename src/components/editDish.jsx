import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditDish = () => {
  let history = useHistory();
  const { id } = useParams();
  const [dish, setDish] = useState({
    name: "",
    protein: "",
    carbs: "",
    fats: "",
    calories: "",
  });

  const { name, protein, fats, carbs, calories } = dish;
  const onInputChange = e => {
    setDish({ ...dish, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadDishes();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/dishes/${id}`, dish);
    history.push("/admin");
  };

  const loadDishes = async () => {
    const result = await axios.get(`http://localhost:3003/dishes/${id}`);
    setDish(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A Dish</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Dish Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your protein"
              name="protein"
              value={protein}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your fats"
              name="fats"
              value={fats}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your carbs"
              name="carbs"
              value={carbs}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your calories"
              name="calories"
              value={calories}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-warning btn-block">Update Dish</button>
        </form>
      </div>
    </div>
  );
};

export default EditDish;
