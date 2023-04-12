import React from "react";
import "./Users.css";
import axios from "axios";

function Users() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setData(res.data);
    });
  }, []);

  const deleteHandler = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  if (data !== null) {
    const users = document.querySelectorAll(".user");
    const btn = document.querySelectorAll(".btn");
    users.forEach((item, i) => {
      item.addEventListener("mouseover", () => {
        btn[i].style.display = "block";
      });
      item.addEventListener("mouseout", () => {
        btn[i].style.display = "none";
      });
    });
  }

  return (
    <div className="Users">
      <ul className="userList">
        {data.map((item) => (
          <li key={item.id} className="user">
            <div className="header">
              <div className="headerName">
                <h3>{item.username}</h3>
                <p>{item.name}</p>
              </div>
            </div>
            <ul className="main">
              <li>
                <p>Company</p>
                <span>{item.company.name}</span>
              </li>
              <li>
                <p>Email</p>
                <span>{item.email}</span>
              </li>
              <li>
                <p>Phone</p>
                <span>{item.phone}</span>
              </li>
              <li>
                <p>Website</p>
                <span>{item.website}</span>
              </li>
              <button
                onClick={() => deleteHandler(item.id)}
                key={item.id}
                className="btn"
              >
                Remove
              </button>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
