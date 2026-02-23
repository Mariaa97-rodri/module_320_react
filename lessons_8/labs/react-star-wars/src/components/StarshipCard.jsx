import { useParams } from "react-router-dom";

export default function Profile() {
  const params = useParams();
  const userId = params.id;
  return <h1>User ID: {userId}</h1>;
}
