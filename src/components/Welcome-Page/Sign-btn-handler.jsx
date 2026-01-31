import { Link } from "react-router-dom";

function SignBtnHandler() {
  
  return (

    <Link to='/signup' className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg font-medium hover:bg-blue-50 transition">
      Sign Up
    </Link>
  );
}

export default SignBtnHandler;
