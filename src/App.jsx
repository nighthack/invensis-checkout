import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)

  // useEffect(() => {
  //   carts();
  // }, []);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: 'Bearer FZERwCiCtLZLMgtMjMDYUrEDRnDMukDs-doA1JsaBTA',
    },
  };

  // With Discount Amount
  const bodyParameters1 = {
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
      ],
      "total_entities": 1,
      "total_items": 1,
      "currency": "INR",
      "discount_amount": 0.00,
      "gross_amount": 3000,
      // "tax_amount": 1602.00,
      "net_amount": 3000,
      // "total_amount": 10502,
      "total_amount": 3000,
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

  // With Discount Amount 400 without tax
  const bodyParameters2 = {
    "cart": {
      "application_id": "5fec375dcb3e7c630428ca60",
      "return_url": "https://stagingbeta.invensislearning.com/",
      "cart_type": "Courses",
      "min_start_date": "01-7-2021",
      "customer_detail_attributes": {
        "email": "akshay@nighthack.in",
        "phone": "8485846767",
        "name": "Akshay",
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
              "discount_amount": 400.00,
              "gross_amount": 2400.0,
              "tax_amount": 0.00,
              "net_amount": 2400.0
            }
          },
          "discount_code": "",
          "discount_amount": 400.00,
          "gross_amount": 2400.0,
          "tax_amount": 0.00,
          "net_amount": 2400.0,
          "total_amount": 2000.00
        }
      ],
      "total_entities": 1,
      "total_items": 1,
      "currency": "INR",
      "discount_amount": 400.00,
      "gross_amount": 2400,
      // "tax_amount": 1602.00,
      "net_amount": 2400,
      // "total_amount": 10502,
      "total_amount": 2000,
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

   // With Discount and tax
   const bodyParameters3 = {
    "cart": {
      "application_id": "5fec375dcb3e7c630428ca60",
      "return_url": "https://stagingbeta.invensislearning.com/",
      "cart_type": "Courses",
      "min_start_date": "01-7-2021",
      "customer_detail_attributes": {
        "email": "akshay@nighthack.in",
        "phone": "8485846767",
        "name": "Akshay",
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
          "quantity": 2,
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
              "discount_amount": 400.5,
              "gross_amount": 2400.0,
              "tax_amount": 0.00,
              "net_amount": 2400.0
            }
          },
          "discount_code":"PARTICIPANT DISCOUNT",
          "discount_amount": 801,
          "gross_amount": 4800.0,
          "tax_amount": 0.00,
          "net_amount": 4800.0,
          "total_amount": 3999
        }
      ],
      "total_entities": 1,
      "total_items": 1,
      "currency": "INR",
      "discount_amount": 801,
      "gross_amount": 4800,
      "tax_amount": 719.82,
      "tax_percentage": 18, 
      "net_amount": 4800,
      // "total_amount": 10502,
      "total_amount": 4719,
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

  // Course start date is less than today date
  const bodyParameters4 = {
    "cart": {
      "application_id": "5fec375dcb3e7c630428ca60",
      "return_url": "https://stagingbeta.invensislearning.com/",
      "cart_type": "Courses",
      "min_start_date": "01-7-2021",
      "customer_detail_attributes": {
        "email": "archana@nighthack.in",
        "phone": "9686016757",
        "name": "Archana",
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
            "name": "Agile Scrum Foundation Course",
            "code": "ASFC0543",
            "item_id": "122",
            "item_url": "https://callingapp.com/products/122",
            "item_meta": {
              "start_date": ["26-08-2022"],
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
          "discount_code": "PARTICIPANT DISCOUNT",
          "discount_amount": 0.00,
          "gross_amount": 3500,
          "tax_amount": 0.00,
          "net_amount": 3500,
          "total_amount": 3500
        },
      ],
      "total_entities": 1,
      "total_items": 1,
      "currency": "INR",
      "discount_amount": 0.00,
      "gross_amount": 3500,
      // "tax_amount": 1602.00,
      "net_amount": 3500,
      // "total_amount": 10502,
      "total_amount": 3500,
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

  // Mahipat Test Case
  const bodyParameters5 = {
    "cart": { 
      "application_id":"5fec375dcb3e7c630428ca60",
      "return_url":"https://beta.invensislearning.com/payment-status?form_id=27009",
      "cart_type":"Courses",
      "customer_detail_attributes":{
        "email":"kepo@mailinator.com",
        "phone":"+931234567897",
        "name":"Husadsd Morin",
        "organisation_name":"Lott Schneider Associates",
        "organisation_title":"Explicabo Exercitat",
        "customer_meta":{}
      },
      "cart_items_attributes": [
        {
          "position":0,
          "quantity":3,
          "item_attributes":{
            "name":"PMP Certification Training",
             "code":"INL8143",
             "item_id":12948,
             "item_url":"https://alpha.invensislearning.com/storage/images/courses/icons/pmp-training.svg",
             "item_meta":{
               "start_date":["24-10-2022","25-10-2022","26-10-2022","27-10-2022"],
               "training_mode":"Live Virtual Classroom"
             },
             "pricing_attributes":{
               "discount_amount":750.5,
               "gross_amount":15010,
               "tax_amount":0,
               "net_amount":15010
             }
          },
          "discount_code":"PARTICIPANT DISCOUNT",
          "discount_amount":2250,
          "gross_amount":45030,
          "tax_amount":0,
          "net_amount":45030,
          "total_amount":42780
        }
      ],
      "total_entities":0,
      "total_items":1,
      "currency":"INR",
      "discount_amount":2250,
      "gross_amount":45030,
      "tax_amount":7700.4,
      "tax_percentage":"18",
      "net_amount":45030,
      "total_amount":50480.4,
      "billing_detail_attributes":{
        "contact_person":"Husadsd Morin",
        "email":"kepo@mailinator.com",
        "phone":"+931234567897",
        "address":"Consequat Veniam a",
        "city":"",
        "state":"",
        "country":"in",
        "area_code":"10751"
      },
      "shipping_detail_attributes":{
        "contact_person":"Husadsd Morin",
        "email":"kepo@mailinator.com",
        "phone":"+931234567897",
        "address":"Consequat Veniam a",
        "city":"",
        "state":"",
        "country":"in",
        "area_code":"10751"
      },
      "meta_data":{
        "form_id":27009
      },
      "reference_id":27009
    }
  };

  // Mahipat Test Case Fixed one
  const bodyParameters6 = {
    "cart": { 
      "application_id":"5fec375dcb3e7c630428ca60",
      "return_url":"https://beta.invensislearning.com/payment-status?form_id=27009",
      "cart_type":"Courses",
      "customer_detail_attributes":{
        "email":"kepo@mailinator.com",
        "phone":"+931234567897",
        "name":"Husadsd Morin",
        "organisation_name":"Lott Schneider Associates",
        "organisation_title":"Explicabo Exercitat",
        "customer_meta":{}
      },
      "cart_items_attributes": [
        {
          "position":1,
          "quantity":3,
          "item_attributes":{
            "name":"PMP Certification Training",
             "code":"INL8143",
             "item_id":12948,
             "item_url":"https://alpha.invensislearning.com/storage/images/courses/icons/pmp-training.svg",
             "item_meta":{
               "start_date":["24-10-2022","25-10-2022","26-10-2022","27-10-2022"],
               "training_mode":"Live Virtual Classroom"
             },
             "pricing_attributes":{
               "discount_amount":750.5,
               "gross_amount":15010,
               "tax_amount":0,
               "net_amount":15010
             }
          },
          "discount_code":"PARTICIPANT DISCOUNT",
          "discount_amount":2252,
          "gross_amount":45030,
          "tax_amount":0,
          "net_amount":45030,
          "total_amount":42778
        }
      ],
      "total_entities":0,
      "total_items":1,
      "currency":"INR",
      "discount_amount":2252,
      "gross_amount":45030,
      "tax_amount":7700.04,
      "tax_percentage":"18",
      "net_amount":45030,
      "total_amount":50478,
      "billing_detail_attributes":{
        "contact_person":"Husadsd Morin",
        "email":"kepo@mailinator.com",
        "phone":"+931234567897",
        "address":"Consequat Veniam a",
        "city":"",
        "state":"",
        "country":"in",
        "area_code":"10751"
      },
      "shipping_detail_attributes":{
        "contact_person":"Husadsd Morin",
        "email":"kepo@mailinator.com",
        "phone":"+931234567897",
        "address":"Consequat Veniam a",
        "city":"",
        "state":"",
        "country":"in",
        "area_code":"10751"
      },
      "meta_data":{
        "form_id":27009
      },
      "reference_id":27009
    }
  };


  const cart = (params) => {
    axios.post(
      'https://invensis.payments-test.invensis.net/api/v1/carts', 
      params, 
      config
    )
    .then(function (response) {
      console.log(response);
      const redirectURL = response.data.redirect_url;
      console.log(redirectURL)
      window.location.href = redirectURL;
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
      <h1>Sample App for Invensis Checkout</h1>
      <div className="card">
        <button onClick={() => cart(bodyParameters1)}>
          Without Discount
        </button>
        <p>
          No discounts for this  
        </p>
      </div>
      <div className="card">
        <button onClick={() => cart(bodyParameters2)}>
          With Discount
        </button>
        <p>
          Without Discount Amount 400
        </p>
      </div>
      <div className="card">
        <button onClick={() => cart(bodyParameters3)}>
          With Discount and Tax
        </button>
        <p>
          Without Discount Amt 400.5, Tax is 18% and quantity is 2
        </p>
      </div>
      <div className="card">
        <button onClick={() => cart(bodyParameters4)}>
          Course start date is less than today date
        </button>
        <p>
          --Course start date is less than today date---
        </p>
      </div>
      <div className="card">
        <button onClick={() => cart(bodyParameters5)}>
          Mahipat Test Case
        </button>
        <p>
          With Discount Amount 750.5 for each item
        </p>
      </div>
      <div className="card">
        <button onClick={() => cart(bodyParameters6)}>
          Mahipat Test Case Fixed one
        </button>
        <p>
          With Discount Amount 750.5 for each item
        </p>
      </div>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  )
}

export default App
