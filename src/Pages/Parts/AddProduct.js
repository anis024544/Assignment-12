import React, { useState } from "react";

const AddProduct = () => {
  const [formData, setFormData] = useState(new FormData());

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    const newFormData = new FormData();
    newFormData.append(name, files[0] || value);
    setFormData(newFormData);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("/submit-form", {
      method: "POST",
      body: formData,
    });
    // handle the response as needed
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" onChange={handleChange} />
      </label>
      <label>
        Profile Picture:
        <input type="file" name="profile_picture" onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddProduct;
