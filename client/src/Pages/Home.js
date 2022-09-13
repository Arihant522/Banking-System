import React, { useState } from 'react'
import axios from "axios";
import {Link} from "react-router-dom";
const Home = () => {
    const [data, setData] = useState([]);
    const loadData = async () =>{
        const responce = await axios.get("http://localhost:3001/api/get");
        setData(responce.data);
    };
      useState(()=>{
          loadData();
      },[]);
  return (
    <div >
      <table className="table">
          <thead style={{width:10000}} className="thead-dark">
            <tr >
              <th >Id</th>
              <th >Customer Name</th>
              <th >Customer Email</th>
              <th >Customer Balance</th>
             
            </tr>
          </thead>
          <tbody>
              {data.map((item, index)=>{
                return (
                  <tr key={item.cus_name}>
                    <th scope='row'>{index+1}</th>
                    <td>{item.cus_name}</td>
                    <td>{item.cus_email}</td>
                    <td>{item.cus_balance}</td>
                    <td>
                      <Link to={`/update/${item.id}`}>
                      </Link>
                    </td>
                  </tr>
                )
              })}
          </tbody>
      </table>
      
    </div>
  )
}

export default Home