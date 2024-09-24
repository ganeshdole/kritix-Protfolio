import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <AlertTriangle className="w-16 h-16 text-yellow-500 mb-4" />
      <h1 className="text-4xl font-bold mb-2">404 - Page Not Found</h1>
      <p className="text-xl mb-8">
        Oops! The page you're looking for doesn't exist.
      </p>
      <button className="border-2 p-2 rounded-md bg-black text-white">
        <Link to="/">Go back home</Link>
      </button>
    </div>
  );
};

export default NotFound;
