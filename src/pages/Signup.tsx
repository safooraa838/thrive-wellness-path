
import { Link } from "react-router-dom";
import SignupForm from "@/components/auth/SignupForm";

const Signup = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-thrive-500 bg-clip-text text-transparent">
              Thrive
            </h1>
          </Link>
          <p className="mt-2 text-gray-600">Start your fitness journey today</p>
        </div>
        <SignupForm />
      </div>
    </div>
  );
};

export default Signup;
