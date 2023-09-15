import React from "react";

const Button = ({ name }) => {
  return (
    <button className="bg-gray-100 text-sm m-2 p-2 rounded-xl capitalize">
      {name}
    </button>
  );
};

export default Button;
