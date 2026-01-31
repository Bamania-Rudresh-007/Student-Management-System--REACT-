import { Link } from "react-router-dom";

function LoginBtnHandler() {
  return (
    <Link to='login' className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
      Login
    </Link>
  );
}

export default LoginBtnHandler;
