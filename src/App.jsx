import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "https://data.tomelilla.se/rowstore/dataset/3617552e-4c28-4a46-9b74-ac8bbbfee33f"
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <h1>Skolor i Tomelilla</h1>
          <table>
            <tr className="myTableRow">
              <th>Namn: </th>
              <th className="transparent">-----</th>
              <th>Adress: </th>
              <th className="transparent">---</th>
              <th>Antal elever:</th>
            </tr>
            {data.results.map((school) => (
              <tr key={school.id} className="myTableRow">
                <td>
                  <h3>{school.name}</h3>
                </td>
                <td></td>
                <td>
                  <p>{school.street}</p>
                </td>
                <td></td>
                <td>
                  <p>{school.students}</p>
                </td>
              </tr>
            ))}
          </table>
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
}

export default App;
