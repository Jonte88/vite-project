import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "https://catalog.skl.se/rowstore/dataset/ed60ba69-f267-4b63-9f62-840342ba29f6"
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Kommuner och Regioner:</h1>
      {data ? (
        <div>
          <table>
            <tr className="myTableRow">
              <th>Kommun: </th>
              <th className="transparent">---</th>
              <th>Ort och postnummer: </th>
              <th className="transparent">---</th>
              <th>Telefon:</th>
              <th className="transparent">---</th>
              <th>Webbadress:</th>
            </tr>
            {data.results.map((county) => (
              <tr key={county.id} className="myTableRow">
                <td>
                  <h3>{county.namn}</h3>
                </td>
                <td></td>
                <td>
                  <p>
                    {county.ort} {county.postnr}
                  </p>
                </td>
                <td></td>
                <td>
                  <p>{county.telefon}</p>
                </td>
                <td></td>
                <td>
                  <p>{county.webbadress}</p>
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
