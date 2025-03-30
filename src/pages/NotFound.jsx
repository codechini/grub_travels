import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1>404 - Page Not Found</h1>
      <p>The page youre looking for doesnt exist.</p>
      <Link className="bg-lime-200" to="/">Home</Link>
    </div>
  );
};

export default NotFound;
