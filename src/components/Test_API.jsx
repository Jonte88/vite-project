import React, { useState, useEffect } from "react";

function Test() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      ""
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : ""}
    </div>
  );
}

export default Test;
