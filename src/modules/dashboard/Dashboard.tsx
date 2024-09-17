import { useState, useEffect } from "react";
import { TestDTO } from "../../dtos/TestDTO";
import { BASE_URL } from "../../env";

function Dashboard() {
  const [data, setData] = useState<TestDTO | null>();
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>();

  useEffect(() => {
    const fetcher = async () => {
      const response = await fetch(BASE_URL + "/Test");
      const result = await response.json();

      if (result?.data) {
        console.log(result.data);
        setData(result.data)
      }
      if (result?.error) setError(result.error);
      setLoading(false);
    };

    fetcher();
  }, []);

  if (loading) return <div><p>Loading...</p></div>
  if (error) return <div><p>error: {error}</p></div>

  return (
    <div>
      <p>Dashboard Page</p>
      <p>message: {data?.message}</p>
    </div>
  );
};

export default Dashboard