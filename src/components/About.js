import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

const About = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    age: "",
    address: "",
    file: "",
  });
  const history = useHistory();

  const userContact = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log(data);
      setUserData({
        ...userData,
        name: data.name,
        email: data.email,
        phone: data.phone,
        age: data.age,
        address: data.address,
        file: data.file,
      });

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    userContact();
  }, []);

  // we are storing data in states

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData({ ...userData, [name]: value });
  };

  //  send the data to backend

  const contactForm = async (e) => {
    alert("User Added Successfully");
    history.push("/");
    e.preventDefault();

    const { name, email, phone, message, age, address, file } = userData;

    const res = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
        age,
        address,
        file,
      }),
    });

    const data = await res.json();

    if (!data) {
      console.log("message not send ");
    } else {
      alert("Message Send");
      setUserData({ ...userData, message: "" });
    }
  };
  return (
    <>
      <div className="contact_form">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="contact_form_container py-5">
                <div className="contact_form_title">ADD USER</div>
                <form method="POST" id="contact_form">
                  <div className="contact_form_inputs d-flex flex-md-row flex-column justify-content-between align-items-between">
                    <input
                      type="text"
                      id="contact_form_name"
                      className="contact_form_name input_field"
                      name="name"
                      value={userData.name}
                      onChange={handleInputs}
                      placeholder="Your Name"
                      required
                    />

                    <input
                      type="email"
                      id="contact_form_email"
                      className="contact_form_email input_field"
                      name="email"
                      value={userData.email}
                      onChange={handleInputs}
                      placeholder="Your Email"
                      required
                    />

                    <input
                      type="number"
                      id="contact_form_phone"
                      className="contact_form_phone input_field"
                      name="phone"
                      value={userData.phone}
                      onChange={handleInputs}
                      placeholder="Your Phone Number"
                      required
                    />
                  </div>
                  <div className="contact_form_inputs d-flex flex-md-row flex-column justify-content-between align-items-between">
                    <input
                      type="text"
                      id="contact_form_name"
                      className="contact_form_name input_field"
                      name="age"
                      value={userData.age}
                      onChange={handleInputs}
                      placeholder="Age"
                      required
                    />

                    <input
                      type="email"
                      id="contact_form_email"
                      className="contact_form_email input_field"
                      name="address"
                      value={userData.address}
                      onChange={handleInputs}
                      placeholder="Address"
                      required
                    />

                    <input
                      type="file"
                      id="contact_form_phone"
                      className="contact_form_phone input_field"
                      name="file"
                      value={userData.file}
                      onChange={handleInputs}
                      placeholder=""
                      required
                    />
                  </div>

                  <div className="contact_form_button">
                    <button
                      type="submit"
                      className="button contact_submit_button"
                      onClick={contactForm}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
