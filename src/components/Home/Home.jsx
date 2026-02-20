import { useNavigate, Link } from 'react-router-dom';
import { useUsers } from "../../contexts/UsersContext.jsx"
import { useEffect } from 'react';

function Home() {
    const navigate = useNavigate();
    const {setIsLogin, loginUser} =  useUsers();

  // handles the logOut button
  const handleLogout = () => {
      setIsLogin(() => {
          localStorage.setItem("isLogin", JSON.stringify(false));
      })
    navigate("/");
    window.location.reload();
  }

  // who is currently loged in so we can display there detials in profile section
    const currentLogedInUser = JSON.parse(localStorage.getItem("currentLogInUser"));


  return (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col lg:flex-row">

    {/* Sidebar */}
    <aside className="w-full lg:w-80 bg-gradient-to-br from-indigo-700 via-indigo-600 to-indigo-800 text-white flex lg:flex-col flex-row justify-between items-center lg:items-start p-4 lg:p-8 shadow-2xl lg:min-h-screen">

      <div className="w-full">
        <h1 className="text-xl lg:text-3xl font-bold mb-4 lg:mb-12 text-center lg:text-left tracking-tight">
          Student Dashboard
        </h1>

        {/* Profile Section */}
        <div className="bg-white/10 backdrop-blur-sm p-4 lg:p-6 rounded-3xl shadow-xl border border-white/20 flex lg:flex-col items-center lg:items-center gap-4 lg:gap-0">

          <div className="w-16 h-16 lg:w-24 lg:h-24 bg-white text-indigo-700 rounded-full flex items-center justify-center text-2xl lg:text-4xl font-bold shadow-lg ring-4 ring-white/30 flex-shrink-0">
            {currentLogedInUser?.name?.charAt(0)}
          </div>

          <div className="text-center lg:mt-5 flex-1 lg:flex-none">
            <h2 className="text-base lg:text-xl font-bold">
              {currentLogedInUser?.name}
            </h2>

            <p className="text-xs lg:text-sm text-indigo-100 mt-2 break-all px-2">
              {currentLogedInUser?.email}
            </p>

            <p className="text-xs lg:text-sm mt-3 bg-green-400 text-green-900 py-1.5 px-4 rounded-full inline-block font-semibold shadow-md">
              ● Logged In
            </p>
          </div>

          {/* Logout button on mobile - inside card */}
          <button 
            className="lg:hidden bg-white text-indigo-700 px-4 py-2 rounded-xl font-bold hover:bg-indigo-50 active:scale-95 transition-all shadow-lg text-sm whitespace-nowrap flex-shrink-0 cursor-pointer"
            onClick={handleLogout}
          >
            Logout
          </button>

        </div>
      </div>

      {/* Logout button on desktop - below card */}
      <button 
        className="hidden lg:block bg-white text-indigo-700 px-6 py-3 rounded-xl font-bold hover:bg-indigo-50 active:scale-95 transition-all shadow-lg hover:text-xl hover:shadow-xl text-base mt-8 w-full cursor-pointer hover:scale-100  duration-200"
        onClick={handleLogout}
      >
        Logout
      </button>

    </aside>


    {/* Main */}
    <div className="flex-1 flex flex-col">

      {/* Welcome */}
      <header className="bg-white shadow-sm px-4 lg:px-10 py-5 lg:py-8 border-b border-gray-200">
        <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 tracking-tight">
          Welcome Back {currentLogedInUser.name.split(" ")[0]}👋
        </h2>
        <p className="text-gray-600 mt-2 text-sm lg:text-lg">
          Manage your students efficiently using the options below.
        </p>
      </header>

      <main className="flex-1 p-4 lg:p-10">

        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-8 lg:mb-12">

          <div className="bg-white p-6 lg:p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-indigo-200 hover:-translate-y-1">
            <h3 className="text-gray-500 text-xs lg:text-sm font-semibold uppercase tracking-wide">Your Role</h3>
            <p className="text-2xl lg:text-3xl font-bold text-indigo-600 mt-3">
              Admin
            </p>
          </div>

          <div className="bg-white p-6 lg:p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200 hover:-translate-y-1">
            <h3 className="text-gray-500 text-xs lg:text-sm font-semibold uppercase tracking-wide">Account Status</h3>
            <p className="text-2xl lg:text-3xl font-bold text-green-500 mt-3">
              Active
            </p>
          </div>

          <div className="bg-white p-6 lg:p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-1 sm:col-span-2 lg:col-span-1">
            <h3 className="text-gray-500 text-xs lg:text-sm font-semibold uppercase tracking-wide">System Access</h3>
            <p className="text-2xl lg:text-3xl font-bold text-blue-500 mt-3">
              Full Access
            </p>
          </div>

        </div>

        {/* CRUD Section */}
        <div>
          <h3 className="text-xl lg:text-3xl font-bold text-gray-900 mb-6 lg:mb-8 tracking-tight">
            Student Management
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">

            <Link to={"/addStudent"}>
              <div className="bg-white p-6 lg:p-8 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-gray-100 hover:border-indigo-300 group">
                <div className="w-14 h-14 lg:w-16 lg:h-16 mb-4 lg:mb-5 text-indigo-600 bg-indigo-50 rounded-2xl flex items-center justify-center text-3xl lg:text-4xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  ➕
                </div>
                <h4 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">
                  Add Student
                </h4>
                <p className="text-gray-500 text-sm lg:text-base leading-relaxed">
                  Register a new student into the system.
                </p>
              </div>
            </Link>

            <Link to={"/viewStudents"}>
              <div className="bg-white p-6 lg:p-8 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-gray-100 hover:border-green-300 group">
                <div className="w-14 h-14 lg:w-16 lg:h-16 mb-4 lg:mb-5 text-green-600 bg-green-50 rounded-2xl flex items-center justify-center text-3xl lg:text-4xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  📋
                </div>
                <h4 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">
                  View Students
                </h4>
                <p className="text-gray-500 text-sm lg:text-base leading-relaxed">
                  Browse and search all student records.
                </p>
              </div>
            </Link>

            <Link to={"/updateStudent"}>
              <div className="bg-white p-6 lg:p-8 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-gray-100 hover:border-yellow-300 group">
                <div className="w-14 h-14 lg:w-16 lg:h-16 mb-4 lg:mb-5 text-yellow-600 bg-yellow-50 rounded-2xl flex items-center justify-center text-3xl lg:text-4xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  ✏️
                </div>
                <h4 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">
                  Update Student
                </h4>
                <p className="text-gray-500 text-sm lg:text-base leading-relaxed">
                  Modify student information easily.
                </p>
              </div>
            </Link>

            <Link to={"/deleteStudent"}>
              <div className="bg-white p-6 lg:p-8 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-gray-100 hover:border-red-300 group">
                <div className="w-14 h-14 lg:w-16 lg:h-16 mb-4 lg:mb-5 text-red-600 bg-red-50 rounded-2xl flex items-center justify-center text-3xl lg:text-4xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  ❌
                </div>
                <h4 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">
                  Delete Student
                </h4>
                <p className="text-gray-500 text-sm lg:text-base leading-relaxed">
                  Remove student records permanently.
                </p>
              </div>
            </Link>

          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-white text-center py-5 lg:py-6 text-gray-500 text-xs lg:text-sm shadow-inner border-t border-gray-200">
        © {new Date().getFullYear()} Student Management System. All rights reserved.
      </footer>

    </div>

  </div>
);

}

export default Home;
