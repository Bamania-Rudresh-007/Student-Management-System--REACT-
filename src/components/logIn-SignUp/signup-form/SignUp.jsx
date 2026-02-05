import { Link } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import SignUpInput from "./Input";
import { useState } from "react";
import { useUsers } from "../../../contexts/UsersContext";

function SignUp() {

  const {setMember} = useUsers()
  const [user, setUser] = useState({name: "", email: "", password: ""});

  const handleChange= (e) =>{
    const {id, value} = e.target;
    setUser((prev) => ({...prev, [id]: value,}))
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    setMember((prev) => [...prev, user]);
    console.log("Data submitted: ", user);
  }

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <main className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
          <header className="mb-6 text-center">
            <h1 className="text-3xl font-bold text-gray-800">Sign Up</h1>
            <p className="text-gray-500 text-sm mt-1">Create your account</p>
          </header>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* For username */}
            <SignUpInput
              lab="Name"
              type="text"
              id="name"
              htmlFor="name"
              placeholder="Bamania Rudresh"
              onUpdate={handleChange}
            />

            {/* For useremail */}
            <SignUpInput
              lab="Email"
              type="email"
              id="email"
              htmlFor="email"
              placeholder="name@example.com"
              onUpdate={handleChange}
            />

            {/* For password */}
            <SignUpInput
              lab="Password"
              type="password"
              id="password"
              htmlFor="password"
              placeholder="name1234"
              onUpdate={handleChange}
            />

            <button
              type="submit"
              className="w-full mt-4 flex items-center justify-center gap-2 bg-cyan-400 hover:bg-cyan-500 text-white font-semibold py-2 rounded-md transition"
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
