import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useStudentServices from "../../hooks/useCrudOperations.js";

function ViewStudentCards() {
  const { students } = useStudentServices();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium transition w-fit cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back
      </button>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <h2 className="text-3xl font-bold text-gray-800">Student Directory</h2>

        {/* Filter */}
        <div className="flex gap-3 items-center">
          <label className="text-gray-500 font-medium text-sm">Filter by Course:</label>
          <select className="px-4 py-2 rounded-xl border border-gray-200 bg-white text-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition">
            <option>All</option>
            <option>BCA</option>
            <option>BBA</option>
            <option>B.Tech</option>
            <option>MCA</option>
          </select>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {students && students.length > 0 ? (
          students.map((student) => (
            <div
              key={student.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex flex-col hover:shadow-md hover:border-indigo-100 transition"
            >
              {/* Avatar + Name + Course */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-sm flex-shrink-0">
                  {student.name?.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase()}
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-semibold text-gray-800 text-sm leading-tight truncate">{student.name}</span>
                  <span className="text-xs text-indigo-500 bg-indigo-50 px-2 py-0.5 rounded-full mt-1 w-fit max-w-full truncate">{student.course}</span>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-100 mb-4" />

              {/* Info */}
              <div className="flex flex-col gap-2 text-sm mb-5">
                <div className="flex justify-between">
                  <span className="text-gray-400">Roll No</span>
                  <span className="font-medium text-gray-600">{student.rollNumber}</span>
                </div>
                <div className="flex justify-between gap-2">
                  <span className="text-gray-400 flex-shrink-0">Email</span>
                  <span className="font-medium text-gray-600 truncate" title={student.email}>{student.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Student ID</span>
                  <span className="font-medium text-gray-600">{student.id}</span>
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
            <p className="text-gray-400 text-lg font-medium">No students added till now</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ViewStudentCards;