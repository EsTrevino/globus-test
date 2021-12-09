import React from "react";
import { useParams } from "react-router-dom";

export const useDataLoader = () => {
  const { testNumber } = useParams();

  const [loaded, setLoaded] = React.useState(false);
  const [callFailed, setCallFailed] = React.useState(false);
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const controller = new AbortController();

    fetch(`http://localhost:3000/api/${testNumber}`, {
      method: "GET",
      mode: "cors",
      headers: {
        "api-key": "globus"
      },
      signal: controller.signal
    })
      .then(async response => {
        try {
          const { DATA } = await response.json();
          setData(DATA);
          setLoaded(true);
        } catch (e) {
          setCallFailed(true);
        }
      })
      .catch(() => {
        setCallFailed(true);
      });

    return () => controller.abort();
  }, []);

  return { loaded, callFailed, data };
};
