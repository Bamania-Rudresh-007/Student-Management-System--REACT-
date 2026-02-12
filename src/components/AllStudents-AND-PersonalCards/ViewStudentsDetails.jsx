import React from "react";

function ViewStudentDetails() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">

      {/* Card Container */}
      <div className="w-full max-w-3xl bg-white shadow-2xl rounded-3xl p-8 md:p-12">

        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-600">
            Student Details
          </h2>
          <p className="text-gray-500 mt-2">
            Complete information about the student
          </p>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

          {/* Name */}
          <div>
            <h4 className="text-gray-600 font-medium mb-1">Full Name</h4>
            <p className="text-gray-800 font-semibold">John Doe</p>
          </div>

          {/* Roll Number */}
          <div>
            <h4 className="text-gray-600 font-medium mb-1">Roll Number</h4>
            <p className="text-gray-800 font-semibold">101</p>
          </div>

          {/* Email */}
          <div>
            <h4 className="text-gray-600 font-medium mb-1">Email</h4>
            <p className="text-gray-800 font-semibold">john@example.com</p>
          </div>

          {/* Phone */}
          <div>
            <h4 className="text-gray-600 font-medium mb-1">Phone</h4>
            <p className="text-gray-800 font-semibold">9876543210</p>
          </div>

          {/* Course */}
          <div>
            <h4 className="text-gray-600 font-medium mb-1">Course</h4>
            <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm font-medium">
              BCA
            </span>
          </div>

          {/* Status */}
          <div>
            <h4 className="text-gray-600 font-medium mb-1">Status</h4>
            <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
              Active
            </span>
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <h4 className="text-gray-600 font-medium mb-1">Address</h4>
            <p className="text-gray-800 font-semibold">
              123 Main Street, City, State, ZIP Code
            </p>
          </div>

        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <button className="flex-1 bg-yellow-500 text-white py-3 rounded-xl font-semibold hover:bg-yellow-600 transition shadow-md">
            Edit Student
          </button>
          <button className="flex-1 bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-red-700 transition shadow-md">
            Delete Student
          </button>
        </div>

      </div>
    </div>
  );
}

export default ViewStudentDetails;
