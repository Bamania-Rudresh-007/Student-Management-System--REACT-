import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useStudentServices from "../../hooks/useCrudOperations.js";

function ViewStudentCards() {
  const { students } = useStudentServices();
  const [filterStudents , setFilterStudents] = useState([]);
  const navigate = useNavigate();

  const isDark = JSON.parse(localStorage.getItem("Theme")) === "Dark Mode";

    useEffect(() => {
        setFilterStudents(students);
    }, [])    

    const handleFilter = (e) => {
        const selectedCourse = e.target.value;
        let filteredStudent = students.filter((student) => student.course == selectedCourse)

        if(e.target.value == "All"){
           setFilterStudents(students) 
           return;
        }
        setFilterStudents(filteredStudent);
    }

    // Now i have to add search functionality to search student instantly using name or student id

  return (
    <div className={`min-h-screen p-6 md:p-10 transition-colors duration-300 ${isDark ? "bg-gray-900" : "bg-gray-50"}`}>

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center gap-2 text-indigo-500 hover:text-indigo-400 font-medium transition w-fit cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back
      </button>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <h2 className={`text-3xl font-bold ${isDark ? "text-white" : "text-gray-800"}`}>Student Directory</h2>
        
        {/* Filter */}
        <div className="flex flex-col gap-1 w-full md:w-auto">
          <label className={`font-medium text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>Filter by Course:</label>
          <select
            className={`w-full md:w-auto px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition ${isDark ? "bg-gray-700 border-gray-600 text-gray-200" : "bg-white border-gray-200 text-gray-600"}`}
            onChange={handleFilter}
          >
            <option>All</option>
            <option>Diploma in Computer Engineering</option>
            <option>Diploma in Information Technology</option>
            <option>Diploma in Mechanical Engineering</option>
            <option>Diploma in Electrical Engineering</option>
            <option>Diploma in Civil Engineering</option>
            <option>Diploma in Electronics & Communication</option>
          </select>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {filterStudents && filterStudents.length > 0 ? (
          filterStudents.map((student) => (
            <div
              key={student.id}
              className={`rounded-2xl shadow-sm border p-5 flex flex-col hover:shadow-md transition ${isDark ? "bg-gray-800 border-gray-700 hover:border-indigo-500" : "bg-white border-gray-100 hover:border-indigo-100"}`}
            >
              {/* Avatar + Name + Course */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${isDark ? "bg-indigo-900 text-indigo-300" : "bg-indigo-100 text-indigo-600"}`}>
                  {student.name?.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase()}
                </div>
                <div className="flex flex-col min-w-0">
                  <span className={`font-semibold text-sm leading-tight truncate ${isDark ? "text-white" : "text-gray-800"}`}>{student.name}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full mt-1 w-fit max-w-full truncate ${isDark ? "text-indigo-300 bg-indigo-900/50" : "text-indigo-500 bg-indigo-50"}`}>{student.course}</span>
                </div>
              </div>

              {/* Divider */}
              <div className={`border-t mb-4 ${isDark ? "border-gray-700" : "border-gray-100"}`} />

              {/* Info */}
              <div className="flex flex-col gap-2 text-sm mb-5">
                <div className="flex justify-between">
                  <span className={isDark ? "text-gray-500" : "text-gray-400"}>Roll No</span>
                  <span className={`font-medium ${isDark ? "text-gray-300" : "text-gray-600"}`}>{student.rollNumber}</span>
                </div>
                <div className="flex justify-between gap-2">
                  <span className={`flex-shrink-0 ${isDark ? "text-gray-500" : "text-gray-400"}`}>Email</span>
                  <span className={`font-medium truncate ${isDark ? "text-gray-300" : "text-gray-600"}`} title={student.email}>{student.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className={isDark ? "text-gray-500" : "text-gray-400"}>Student ID</span>
                  <span className={`font-medium ${isDark ? "text-gray-300" : "text-gray-600"}`}>{student.id}</span>
                </div>
              </div>

              <div className="flex-grow" />

              {/* Button */}
              <Link to="/viewStudentDetails">
                <button
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-xl text-sm font-semibold transition cursor-pointer"
                  onClick={() => localStorage.setItem("CurrentViewDetails", JSON.stringify(student))}
                >
                  View Details
                </button>
              </Link>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-16">
            <p className={`text-lg font-medium ${isDark ? "text-gray-600" : "text-gray-400"}`}>No students added till now</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ViewStudentCards;