import { useEffect } from "react";
import { TestDTO } from "../../dtos/TestDTO";
import { BASE_URL } from "../../env";
import useFetch from "../../hooks/useFetch";

function Dashboard() {
  const { data, loading, error, fetcher } = useFetch<TestDTO>(BASE_URL + "/Test", { method: "GET" });

  useEffect(() => {
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