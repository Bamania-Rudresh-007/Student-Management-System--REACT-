import { useNavigate, Link } from 'react-router-dom';
import { useUsers } from "../../contexts/UsersContext.jsx"

function Home() {
    const navigate = useNavigate();
    const {setIsLogin} =  useUsers();

  // handles the logOut button
  const handleLogout = () => {
      setIsLogin(() => {
          localStorage.setItem("isLogin", JSON.stringify(false));
      })
    navigate("/");
    window.location.reload();
  }



  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">

      {/* Header */}
      <header className="bg-indigo-600 text-white py-4 px-6 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Student Dashboard</h1>
          <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition cursor-pointer" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 p-6 max-w-7xl mx-auto w-full">

        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Welcome Back 👋
          </h2>
          <p className="text-gray-600 mt-2">
            Manage your students efficiently using the options below.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-gray-500 text-sm">Total Students</h3>
            <p className="text-3xl font-bold text-indigo-600 mt-2">120</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-gray-500 text-sm">Active Students</h3>
            <p className="text-3xl font-bold text-green-500 mt-2">98</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-gray-500 text-sm">Graduated</h3>
            <p className="text-3xl font-bold text-blue-500 mt-2">22</p>
          </div>

        </div>

        {/* CRUD Operations Section */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Student Management
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Add Student */}
            <Link to={"/addStudent"}>
                <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer">
                <div className="text-4xl mb-4 text-indigo-600">➕</div>
                <h4 className="text-lg font-semibold text-gray-800">
                    Add Student
                </h4>
                <p className="text-gray-500 text-sm mt-2">
                    Register a new student into the system.
                </p>
                </div>
            </Link>


            {/* View Students */}
            <Link to={"/viewStudents"}>
                <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer">
                <div className="text-4xl mb-4 text-green-500">📋</div>
                <h4 className="text-lg font-semibold text-gray-800">
                    View Students
                </h4>
                <p className="text-gray-500 text-sm mt-2">
                    Browse and search all student records.
                </p>
                </div>
            </Link>

            {/* Update Student */}
            <Link to={"/updateStudent"}>
                <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer">
                <div className="text-4xl mb-4 text-yellow-500">✏️</div>
                <h4 className="text-lg font-semibold text-gray-800">
                    Update Student
                </h4>
                <p className="text-gray-500 text-sm mt-2">
                    Modify student information easily.
                </p>
                </div>
            </Link>

            {/* Delete Student */}
            <Link to={"/deleteStudent"}>    
                <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer">
                <div className="text-4xl mb-4 text-red-500">❌</div>
                <h4 className="text-lg font-semibold text-gray-800">
                    Delete Student
                </h4>
                <p className="text-gray-500 text-sm mt-2">
                    Remove student records permanently.
                </p>
                </div>
            </Link>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-white text-center py-4 text-gray-500 text-sm shadow-inner">
        © {new Date().getFullYear()} Student Management System
      </footer>

    </div>
  );
}

export default Home;
