import { Link, useNavigate } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import SignUpInput from "./Input.jsx";
import InputPass from "./inputPass.jsx";
import { useState, useEffect } from "react";
import { useUsers } from "../../../contexts/UsersContext.jsx";

function SignUp() {

  const { setMember, arrayOfMember, setIsLogin } = useUsers();
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [passType, setPassType] = useState("password");
  const navigate = useNavigate()

    // hanldes the changes for the current user and updates to the localstorage
  const handleChange = (e) => {
    let { id, value } = e.target;
    setUser((prev) => ({ ...prev, [id]: value }));
  };

  //  handles the submit button of the signUp Form 
  const handleSubmit = (e) => {
    const processedUserArray = arrayOfMember(user);

    if (user.name != "") {
      setMember((prev) => [...prev, ...processedUserArray]);
      setUser({ name: "", email: "", password: "" });
    }
    handlerIsLogin()
  };
  
  // handles the auto redirect to home page if user is already signEd up
  const handlerIsLogin = () => {
    if(user.name == "" && user.email == "" || user.password == ""){
        alert("First fill the Above details please...")
        return;
    }
    setIsLogin(() => {
        localStorage.setItem("isLogin", JSON.stringify(true));
    });
    navigate("/home");
  }

  return (
    <div>        
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <main className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
          <header className="mb-6 text-center">
            <h1 className="text-3xl font-bold text-gray-800">Sign Up</h1>
            <p className="text-gray-500 text-sm mt-1">Create your account</p>
          </header>

          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            {/* For username */}
            <SignUpInput
              lab="Name"
              type="text"
              id="name"
              htmlFor="name"
              placeholder="Bamania Rudresh"
              onUpdate={handleChange}
              value={user.name}
            />

            {/* For useremail */}
            <SignUpInput
              lab="Email"
              type="email"
              id="email"
              htmlFor="email"
              placeholder="name@example.com"
              onUpdate={handleChange}
              value={user.email}
            />

            {/* For password */}
            <InputPass
              lab="Password"
              type={passType}
              id="password"
              htmlFor="password"
              placeholder="name1234"
              onUpdate={handleChange}
              passType={passType}
              setPassType={setPassType}
              value={user.password}
            />

            <button
              type="submit"
              className="w-full mt-4 flex items-center justify-center gap-2 bg-cyan-400 hover:bg-cyan-500 text-white font-semibold py-2 rounded-md transition cursor-pointer"
              onClick={handleSubmit}
            >
              <FaSignInAlt />
              Sign Up
            </button>

            <div className="flex gap-4.5">
              <p>If you already have an account?</p>
              <Link to="/login" className="text-blue-800 font-bold underline">
                Login
              </Link>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}

export default SignUp;
