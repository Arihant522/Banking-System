import React from "react";
import { useState } from "react";
import axios from "axios";

const ViewCustomer = () => {
  const [data, setData] = useState([]);
  const loadData = async () => {
    const responce = await axios.get("http://localhost:3001/api/transaction");
    setData(responce.data);
  };
  useState(() => {
    loadData();
  }, []);

  return (
    <div>
      
    <div className="customer" style={{marginBottom:380}}>
      <table className="table">
        <thead class="table table-dark">
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Sender Email</th>
            <th scope="col">Receiver Email</th>
            <th scope="col">Amount</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={item.sender} >
                <th>{index+1}</th>
                <td >{item.sender}</td>
                <td>{item.receiver}</td>
                <td>{item.amount}</td>
                <td>{item.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default ViewCustomer;
