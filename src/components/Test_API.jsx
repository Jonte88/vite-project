import React, { useState, useEffect } from "react";

function Test() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "http://api.scb.se/OV0104/v1/doris/sv/ssd/BO/BO0406/BO0406E/BO0406Tab04"
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : "Loading..."}
    </div>
  );
}

export default Test;
