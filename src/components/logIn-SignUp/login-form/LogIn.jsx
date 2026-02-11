import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";
import InputPass from "./inputPass";

function LogIn() {
    const [passType, setPassType] = useState("password");
    const [user, setUser] = useState({email: "", password: ""});
    // storing user email pass to check wheather they are signed up or not!!
    const handleChange = (e) => {
        const {id , value} = e.target;
        setUser((prev) => ({...prev, [id]: value}));
    }

    // checking wheather they are signedUp or not...?
    const handleVarificationOfUser = () => {

        const existingData = localStorage.getItem('signUpUsers');
        JSON.parse(existingData).forEach((data) => {
            if(data.email == user.email){
                console.log(true);
            }
            else{
                console.log(false);
            }
         })
     }

  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <main className="w-full shadow-lg bg-white max-w-md p-6">
          <header className="flex flex-col justify-center items-center w-full mb-6">
            <h1 className="font-bold text-3xl mb-1">Log In</h1>
            <p>Log in to your account</p>
          </header>

          <div className="flex flex-col items-center w-full">
            <div className="w-full">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700 block mb-1"
                  >
                    Enter your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    placeholder="example@gmail.com"
                    onChange={handleChange}
                  />
                </div>
                
                <InputPass 
                lab="Password"
              type={passType}
              id="password"
              htmlFor="password"
              placeholder="name1234"
              onUpdate={handleChange}
              passType={passType}
              setPassType={setPassType}
              value={user.password}/>
              </form>
            </div>

            <div className="w-full mt-5">
              <button className="w-full flex items-center justify-center gap-2 bg-cyan-400 hover:bg-cyan-500 text-white font-semibold py-2 rounded-md transition"
              onClick={() => {
                console.log(user)
                handleVarificationOfUser()
              }}
              >
                <FaUser /> Login
              </button>
            </div>

            <div className="flex mt-4">
              <p className="text-sm pr-1.5">Dont have an account ?</p>
              <Link to="/signup" className="text-blue-500 font-bold underline">
                SignUp
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default LogIn;
