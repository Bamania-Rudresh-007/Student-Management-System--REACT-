import { FaSignInAlt } from "react-icons/fa";

function SignUp() {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <main className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <header className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Sign Up</h1>
          <p className="text-gray-500 text-sm mt-1">Create your account</p>
        </header>

        <form className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Bamania Rudresh"
              className="mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="pass" className="text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="pass"
              placeholder="••••••••"
              className="mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 flex items-center justify-center gap-2 bg-cyan-400 hover:bg-cyan-500 text-white font-semibold py-2 rounded-md transition"
          >
            <FaSignInAlt />
            Sign Up
          </button>
          <div className="flex gap-4.5">
            <p>If you already have an account?</p>
            {/* <button className="bg-cyan-400 text-white hover:bg-cyan-500 ">Login</button>   */}
            <a href="#" className="text-blue-800 font-bold underline">Login</a>
          </div>
        </form>
      </main>
    </div>
    </div>
  )
}

export default SignUp
