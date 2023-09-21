import React, { useState, useEffect } from "react";

function Test() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "https://dataportalen.stockholm.se/dataportalen/Data/Utbildningsforvaltningen/Alla_skolor_1920_elevantal.zip"
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
