import React from "react";
const queryParams = new URLSearchParams(window.location.search);

export default function Payment() {
  const result = queryParams.get("status");
  if(result == "success"){
    return (
      <>
        <h3>Payment Successful</h3>
        <center>
          <table><tbody>
            <tr>
              <td>Cart ID</td><td>{queryParams.get("cart_id")}</td>
            </tr>
            <tr>
              <td>Payment ID</td><td>{queryParams.get("payment_id")}</td>
            </tr>
            <tr>
              <td>Ref No</td><td>{queryParams.get("reference_id")}</td>
            </tr>
          </tbody></table>
        </center>

        <button onClick={() => {window.location.href="/"}}>
          Back Home
        </button>
      </>
    );
  } else {
    return(
      <>
        <h3>Payment Failed</h3>
        <center>
          <table><tbody>
            <tr>
              <td>Ref No</td><td>{queryParams.get("reference_id")}</td>
            </tr>
            <tr>
              <td>Error</td><td>{queryParams.get("errors")}</td>
            </tr>
          </tbody></table>
          <p>Take a screenshot of this page and report to the App team</p>
        </center>

        <button onClick={() => {window.location.href="/"}}>
          Back Home
        </button>
      </>
    )
  }
  
}
