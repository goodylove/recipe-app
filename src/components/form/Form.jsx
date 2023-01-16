import React, { useState, useEffect } from "react";

const Form = ({ value, onchange, onSubmit }) => {
  return (
    <div className="form container">
      <form action="" onSubmit={onSubmit}>
        <input type="text" value={value} onChange={onchange} />
        <button type="submit">search</button>
      </form>
    </div>
  );
};

export default Form;
