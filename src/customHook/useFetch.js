import React from "react";

const useFetch = (id) => {
  const [state, setState] = React.useState([]);

  React.useEffect(() => {
    setState([]);

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setState(data.filter(item => item.id !== id));
      });
  }, [id]);

  return state;
};

export default useFetch;
