import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class DeliverDetail extends Component {
  render() {
    return (
      <div className="dchannel-content" id="deliver">
        <div>
          <div className="order-info">
            <p className="title">Order Info</p>
            <div className="row">
              <div className="col-md-8">
                <table style={{ width: "100%" }}>
                  <tbody>
                    <tr>
                      <td>Buyer name</td>
                      <td>Mg Mag</td>
                    </tr>
                    <tr>
                      <td>Order Ref No</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td>Item</td>
                      <td>2</td>
                    </tr>
                    <tr>
                      <td>Qty</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <td>Payment Term</td>
                      <td>Cash</td>
                    </tr>
                    <tr>
                      <td>Address</td>
                      <td>No(20),1st floor,Pazundaung,Yangon</td>
                    </tr>
                    <tr>
                      <td>Amount</td>
                      <td>3500</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="order-list">
            <p className="title">Item List</p>
            <div className="row">
              <div className="col-md-12">
                <table style={{ width: "100%" }}>
                  <thead>
                    <tr>
                      <th>Brand</th>
                      <th>Item</th>
                      <th>Type</th>
                      <th>Qty</th>
                      <th>Price</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Bella</td>
                      <td>Loction</td>
                      <td>Cream</td>
                      <td>2</td>
                      <td>1000</td>
                      <td>2000</td>
                    </tr>
                    <tr>
                      <td>Royal</td>
                      <td>Loction</td>
                      <td>Cream</td>
                      <td>1</td>
                      <td>1000</td>
                      <td>1000</td>
                    </tr>
                    <tr>
                      <th colSpan={5}>Total</th>
                      <th>3000</th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="btn-order">
              <button className="btn yellow">
                <NavLink to="/dashboard/order/received">Received</NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default DeliverDetail;
