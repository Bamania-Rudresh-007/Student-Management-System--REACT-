import React from "react";

function DeleteStudent() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      
      <div className="w-full max-w-xl bg-white shadow-2xl rounded-3xl p-8 md:p-12">
        
        {/* Title */}
        <div className="text-center mb-8">
          <div className="text-5xl mb-4 text-red-500">⚠️</div>
          <h2 className="text-3xl font-bold text-red-600">
            Delete Student
          </h2>
          <p className="text-gray-500 mt-2">
            This action cannot be undone. Please confirm before proceeding.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6">

          {/* Student ID */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Student ID
            </label>
            <input
              type="text"
              placeholder="Enter student ID to delete"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
            />
          </div>

          {/* Confirmation Text */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Type <span className="font-bold text-red-600">DELETE</span> to confirm
            </label>
            <input
              type="text"
              placeholder="Type DELETE"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-red-700 transition shadow-md"
            >
              Delete Student
            </button>

            <button
              type="button"
              className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-300 transition"
            >
              Cancel
            </button>
          </div>

        </form>
      </div>

    </div>
  );
}

export default DeleteStudent;
