import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [dishes, setDish] = useState([]);

  useEffect(() => {
    loadDishes();
  }, []);

  const loadDishes = async () => {
    const result = await axios.get("http://localhost:3003/dishes");
    setDish(result.data.reverse());
  };

  const deleteDish = async id => {
    await axios.delete(`http://localhost:3003/dishes/${id}`);
    loadDishes();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Admin Page</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr className="bg-warning">
              <th scope="col">#</th>
              <th scope="col">Dish Name</th>
              <th scope="col">Protein</th>
              <th scope="col">Carbs</th>
              <th scope="col">Fats</th>
              <th scope="col">Calories</th>
              <th>Action</th>
              <th>
                <Link className="btn btn-secondary mr-2" to={"/dishes/add"}>
                  Add Dish
                </Link>
              </th>
            </tr>
          </thead>
          <tbody>
            {dishes.map((dish, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{dish.name}</td>
                <td>{dish.protein}</td>
                <td>{dish.carbs}</td>
                <td>{dish.fats}</td>
                <td>{dish.calories}</td>

                <td>
                  <Link
                    className="btn btn-outline-primary mr-2"
                    to={`/dishes/edit/${dish.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    className="btn btn-danger"
                    onClick={() => deleteDish(dish.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
