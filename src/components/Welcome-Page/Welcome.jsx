import SignBtnHandler from "./Sign-btn-handler";
import LoginBtnHandler from "./Login-btn-handler";

function Welcome() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
        <header className="absolute top-2.5 text-4xl font-bold text-gray-800">
          Student Management System
        </header>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Empowering Education Through Efficient Management
              </h1>

              <p className="text-gray-600 text-lg mb-8">
                A comprehensive platform to manage student records, track
                progress, and maintain academic data seamlessly.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <LoginBtnHandler />

                <SignBtnHandler />
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <img
                src="/home-logo.png"
                alt="Student Management Illustration"
                className="w-full max-w-md"
              />
            </div>
          </div>
        </div>
        <footer className=" text-gray-600 absolute bottom-4">
          Made by Bamania Rudresh Vinay Chandra{" "}
        </footer>
      </div>
    </>
  );
}

export default Welcome;
