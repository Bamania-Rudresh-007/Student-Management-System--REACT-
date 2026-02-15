import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useStudentServices from "../../hooks/useCrudOperations.js";

function ViewStudentCards() {

    const {students} = useStudentServices()
    const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-10 flex flex-col">

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium transition w-fit cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
        Back
      </button>

      {/* Header & Filter */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <h2 className="text-3xl font-bold text-indigo-600">
          Student Directory
        </h2>

        {/* Filter */}
        <div className="flex gap-4 items-center">
          <label className="text-gray-700 font-medium">Filter by Course:</label>
          <select className="px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition">
            <option>All</option>
            <option>BCA</option>
            <option>BBA</option>
            <option>B.Tech</option>
            <option>MCA</option>
          </select>
        </div>
      </div>

      {/* Scrollable Cards Container */}
      <div className="flex-1 overflow-y-auto">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          style={{ minHeight: "400px" }}
        >
          {/* Student Cards */}
          {students.map((student) => (
            <div
              key={student.id}
              className="bg-white shadow-lg rounded-2xl p-6 cursor-pointer hover:shadow-2xl transition flex flex-col h-full"
            >
              {/* Minimal Info */}
              <div className="flex items-center justify-between mb-4">
                <div className="text-lg font-semibold text-gray-800">
                  {student.name}
                </div>
                <div className="text-sm bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full">
                  {student.course}
                </div>
              </div>

              <div className="text-gray-500 text-sm mb-2">
                Roll No: {student.rollNumber}
              </div>
              
              {/* Email with truncation */}
              <div className="text-gray-500 text-sm mb-4 break-words overflow-hidden">
                <span className="font-medium">Email:</span>{" "}
                <span className="block truncate" title={student.email}>
                  {student.email}
                </span>
              </div>
              
              <div className="text-gray-500 text-sm mb-4">
                Student ID: {student.id}
              </div>
              
              {/* Spacer to push button to bottom */}
              <div className="flex-grow"></div>
              
              <Link to={"/viewStudentDetails"}>
                <button className="w-full bg-indigo-600 text-white py-2 rounded-xl font-semibold hover:bg-indigo-700 transition">
                  View Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ViewStudentCards;