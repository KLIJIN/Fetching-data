import React from "react";
import "./table.css"

const Table = ({ data }) => {

  return <div>
    {
      data?.length > 0 &&
      <table border="1">
        <thead>
          <tr>
            <th>name</th>
            <th>age</th>
            <th>phone</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            const { age, id, name, phone } = item;
            return (
              <tr key={id}>
                <td>{name}</td>
                <td>{age}</td>
                <td>{phone}</td>
              </tr>
            )
          })
          }
        </tbody>


      </table>


    }






  </div>
};
export default Table;