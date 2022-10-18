import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    carts();
  }, []);

  const config = {
    headers: { 
      "Content-type": "application/json",
      Authorization: `Bearer FZERwCiCtLZLMgtMjMDYUrEDRnDMukDs-doA1JsaBTA`
    }
  };

  const bodyParameters = {
    "cart": {
      "application_id": "5fec375dcb3e7c630428ca60",
      "return_url": "https://stagingbeta.invensislearning.com/",
      "cart_type": "Courses",
      "min_start_date": "01-7-2021",
      "customer_detail_attributes": {
        "email": "jayasree@nighthack.in",
        "phone": "8485848584",
        "name": "Jayasree",
        "organisation_name": "NHT",
        "organisation_title": "NHT",
        "customer_meta": {
        "customer_id": "5e923b21ddb94212c8825ad1",
        "customer_url": "https://callingapp.com/customers/5e923b21ddb94212c8825ad1",
        "customer_image": "https://callingapp.com/customers/5e923b21ddb94212c8825ad1/image.jpg"
        }
      },
      "cart_items_attributes": [
        {
          "position": 1,
          "quantity": 1,
          "item_attributes": {
            "name": "Safe for Teams Course",
            "code": "SFT0548",
            "item_id": "122",
            "item_url": "https://callingapp.com/products/122",
            "item_meta": {
              "start_date": ["25-11-2022"],
              "PMI R.E.P ID": "4177",
              "language": "english",
              "on_site": false
            },
            "pricing_attributes": {
              "discount_amount": 0.00,
              "gross_amount": 3000,
              "tax_amount": 0.00,
              "net_amount": 3000
            }
          },
          "discount_code": "DC1",
          "discount_amount": 0.00,
          "gross_amount": 3000,
          "tax_amount": 0.00,
          "net_amount": 3000,
          "total_amount": 3000
        }  ,
        {
          "position": 1,
          "quantity": 1,
          "item_attributes": {
            "name": "Agile Scrum Foundation Course",
            "code": "ASFC0543",
            "item_id": "122",
            "item_url": "https://callingapp.com/products/122",
            "item_meta": {
              "start_date": ["26-12-2022"],
              "PMI R.E.P ID": "4178",
              "language": "english",
              "on_site": false
            },
            "pricing_attributes": {
              "discount_amount": 0.00,
              "gross_amount": 3500,
              "tax_amount": 0.00,
              "net_amount": 3500
            }
          },
          "discount_code": "",
          "discount_amount": 0.00,
          "gross_amount": 3500,
          "tax_amount": 0.00,
          "net_amount": 3500,
          "total_amount": 3500
        },
        {
          "position": 1,
          "quantity": 1,
          "item_attributes": {
            "name": "Certified Agile Leadership Course",
            "code": "CALC",
            "item_id": "122",
            "item_url": "https://callingapp.com/products/122",
            "item_meta": {
              "start_date": ["30-11-2022"],
              "PMI R.E.P ID": "4178",
              "language": "english",
              "on_site": false
            },
            "pricing_attributes": {
              "discount_amount": 0.00,
              "gross_amount": 2400.0,
              "tax_amount": 0.00,
              "net_amount": 2400.0
            }
          },
          "discount_code": "",
          "discount_amount": 0.00,
          "gross_amount": 2400.0,
          "tax_amount": 0.00,
          "net_amount": 2400.0,
          "total_amount": 2400.00
        }
      ],
      "total_entities": 1,
      "total_items": 1,
      "currency": "INR",
      "discount_amount": 0.00,
      "gross_amount": 8900,
      // "tax_amount": 1602.00,
      "net_amount": 8900,
      // "total_amount": 10502,
      "total_amount": 8900,
      // "tax_percentage": 18, 
      "billing_detail_attributes": {
        "contact_person": "Sample Person",
        "email": "onrtime@gmail.com",
        "phone": "918552425425",
        "address": "510 Townsend St",
        "city": "San Francisco",
        "state": "CA",
        "country": "United States",
        "area_code": "98140"
      },
      "shipping_detail_attributes": {
        "contact_person": "Sample Person",
        "email": "onetime@gmail.com",
        "phone": "8552425425",
        "address": "510 Townsend St",
        "city": "San Francisco",
        "state": "CA",
        "country": "United States",
        "area_code": "98140"
      },
      "meta_data": {
        "cart_id": 2341
      },
      "reference_id": 234 //  Reference ID that corresponds to this Cart, set for your internal reference. Can have a maximum length of 50 characters. eg: order_id, transaction_id
    }
  };

  const carts = () => {
    axios.post(
      'https://invensis.payments-test.invensis.net/api/v1/carts', 
      bodyParameters, 
      config
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div className="App">
      <div>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>
      <h1>Sample App for checkout</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Button 1
        </button>
        <p>
          With Discount  
        </p>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Button 2
        </button>
        <p>
          Without Discount
        </p>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Button 3
        </button>
        <p>
          --No--
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
