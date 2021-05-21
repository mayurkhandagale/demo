import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AddDish = () => {
  let history = useHistory();
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

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/dishes", dish);
    history.push("/admin");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A Dish</h2>
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
          <button className="btn btn-primary btn-block">Add Dish</button>
        </form>
      </div>
    </div>
  );
};

export default AddDish;
