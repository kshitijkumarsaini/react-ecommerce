import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";

export default function ShippingScreen(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  // Check if user is signed In or not. In case, if he'she's not the redirect them to the sign-in page
  if (!userInfo) {
    props.history.push("/signin");
  }

  const [fullName, setFullName] = useState(shippingAddress.fullName);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({ fullName, address, city, postalCode, country })
    );
    props.history.push("/payment");
  };

  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Shipping Address</h1>
        </div>
        <div>
          <lable htmlFor="fullName">Full Name</lable>
          <input
            type="text"
            id="fullName"
            placeholder="Enter full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <lable htmlFor="address">Address</lable>
          <input
            type="text"
            id="address"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <lable htmlFor="city">City</lable>
          <input
            type="text"
            id="city"
            placeholder="Enter City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <lable htmlFor="postalCode">Postal Code</lable>
          <input
            type="text"
            id="postalCode"
            placeholder="Enter postal code"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <lable htmlFor="country">Country</lable>
          <input
            type="text"
            id="country"
            placeholder="Enter country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}
