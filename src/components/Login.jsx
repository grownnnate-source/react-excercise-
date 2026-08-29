import React, { useState } from "react";

function Login(props) {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setContact((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function storeInfo(event) {
    event.preventDefault();

    const newUser = {
      id: Date.now(),
      name: `${contact.fName} ${contact.lName}`,
      imgURL:
        "https://files.softicons.com/download/android-icons/flat-icons-by-martz90/png/128x128/contacts.png",
      phone: "Not provided",
      email: contact.email,
    };

    props.setUser(newUser);
  }

  return (
    <div className="container">
      <h1>Login</h1>

      <form onSubmit={storeInfo}>
        <input
          onChange={handleChange}
          name="fName"
          value={contact.fName}
          placeholder="First Name"
        />

        <input
          onChange={handleChange}
          name="lName"
          value={contact.lName}
          placeholder="Last Name"
        />

        <input
          onChange={handleChange}
          name="email"
          value={contact.email}
          placeholder="Email"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
