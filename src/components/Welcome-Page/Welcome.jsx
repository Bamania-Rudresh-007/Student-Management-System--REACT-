import SignBtnHandler from "./Sign-btn-handler";
import LoginBtnHandler from "./Login-btn-handler";

function Welcome() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-indigo-50 via-white to-blue-100 flex flex-col">
      
      {/* Header */}
      <header className="py-6 text-center text-3xl md:text-4xl font-extrabold text-indigo-700 tracking-wide">
        Student Management System
      </header>

      {/* Main */}
      <main className="flex-1 flex items-center justify-center px-4 md:px-8">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center bg-white shadow-xl rounded-3xl p-6 md:p-12">
          
          {/* Left */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
              Empowering Education Through Efficient Management
            </h1>

            <p className="text-gray-600 text-lg mb-8">
              A comprehensive platform to manage student records, track
              progress, and maintain academic data seamlessly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <LoginBtnHandler />
              <SignBtnHandler />
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center">
            <img
              src="/home-logo.png"
              alt="Student Management Illustration"
              className="max-w-full h-auto hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Made by Bamania Rudresh Vinay Chandra
      </footer>

    </div>
  );
}

export default Welcome;
