import React from "react";
import { Link } from "react-router-dom";

function ViewStudentCards() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-10 flex flex-col">

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
          {/* Example Student Cards */}
          {Array.from({ length: 12 }).map((_, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg rounded-2xl p-6 cursor-pointer hover:shadow-2xl transition flex flex-col"
            >
              {/* Minimal Info */}
              <div className="flex items-center justify-between mb-4">
                <div className="text-lg font-semibold text-gray-800">
                  John Doe
                </div>
                <div className="text-sm bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full">
                  BCA
                </div>
              </div>

              <div className="text-gray-500 text-sm mb-2">
                Roll No: 101
              </div>
              <div className="text-gray-500 text-sm mb-4">
                Email: john@example.com
              </div>
              <div className="text-gray-500 text-sm mb-4">
                Student_id: 29874 
              </div>
            <Link to={"/viewStudentDetails"}>
                <button className="mt-auto bg-indigo-600 text-white py-2 rounded-xl font-semibold hover:bg-indigo-700 transition w-5/5">
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
