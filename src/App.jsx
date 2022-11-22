import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import axios from "axios";

import { bodyParameters1, bodyParameters2, bodyParameters3, bodyParameters4, bodyParameters5 } from './data/examples.js';

const BASE_URL="https://payments-test.invensis.net";
// const BASE_URL="http://localhost:3000";

function App() {
  const [count, setCount] = useState(0);
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [currentData, setCurrentData] = useState({});

  const client_auth = async () => {
    setLoading(true);
    console.log("Calling",BASE_URL);
    setError(false);
    try {
      const config = {
        method: "post",
        url: BASE_URL+"/oauth/token",
        headers: {
          grant_type: "client_credentials",
          "Content-Type": "application/json",
        },
        data: {
          grant_type: "client_credentials",
          client_id: "_iZaWEpaW2O4Hp-lEDVngo8claCE5deEMQTtUCAuYc0",
          client_secret: "B4bK0hWiFJv66Vdpjmn6TkyXANUgVH8884q4YsnyD4s",
        },
      };
      const resp = await axios(config);
      const tk = resp.data.access_token;
      setToken(tk);
    } catch (err) {
      console.log(err);
      setToken("");
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    client_auth();
  }, []);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const showPayload = (params) => {    
    setCurrentData(params);
  };

  const cart = () => {
    axios
      .post(BASE_URL+"/api/v1/carts", currentData, config)
      .then(function (response) {
        console.log(response);
        const redirectURL = response.data.redirect_url;
        console.log(redirectURL);
        window.location.href = redirectURL;
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return loading ? (
    <h5>Initializing app .... </h5>
  ) : error || token == undefined || token == "" ? (
    <h5>
      There was an error initializing the app. Please contact administator.
    </h5>
  ) : (
    <div className="App">
      <center><h1>Sample App for Invensis Checkout</h1></center>
      <table>
        <thead><tr><th><h2> Test Cases </h2></th><th>Payload</th></tr></thead>
        <tbody>          
          <tr>
            <td>
              <button onClick={() => showPayload(bodyParameters1)}>Without Discount</button>
              <p>No discounts for this</p>
            </td>
            <td rowSpan="7" style={{padding: "10px"}}>
              <center><button onClick={() => cart()}>Checkout</button></center>
              <div><pre>{JSON.stringify(currentData, null, 2) }</pre></div>
            </td>
          </tr>
          <tr><td>
            <button onClick={() => showPayload(bodyParameters2)}>With Discount</button>
            <p>Without Discount Amount 400</p>
          </td></tr>
          <tr><td>
            <button onClick={() => showPayload(bodyParameters3)}>
              With Discount and Tax
            </button>
            <p>Without Discount Amt 400.5, Tax is 18% and quantity is 2</p>
          </td></tr>
          <tr><td>
            <button onClick={() => showPayload(bodyParameters4)}>
              Course start date is less than today date
            </button>
            <p>--Course start date is less than today date---</p>
          </td></tr>
          <tr><td>
            <button onClick={() => showPayload(bodyParameters5)}>Mahipat Test Case</button>
            <p>With Discount Amount 750.5 for each item</p>
          </td></tr>
          <tr><td>
            <button onClick={() => showPayload(bodyParameters6)}>
              Mahipat Test Case Fixed one
            </button>
            <p>With Discount Amount 750.5 for each item</p>
          </td></tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
