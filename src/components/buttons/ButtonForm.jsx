import React from "react";

const ButtonForm = ({ color, text }) => {
  return (
    <input
      type="submit"
      className={`bg-${color}-600 w-full text-white p-3 rounded-md hover:bg-${color}-700 cursor-pointer transition-all`}
      value={text}
    />
  );
};

export default ButtonForm;
