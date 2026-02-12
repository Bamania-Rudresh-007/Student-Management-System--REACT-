
function AddStudent() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      
      <div className="w-full max-w-3xl bg-white shadow-2xl rounded-3xl p-8 md:p-12">
        
        {/* Title */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-600">
            Add New Student
          </h2>
          <p className="text-gray-500 mt-2">
            Fill in the details below to register a student.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6">

          {/* Full Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter full name"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
          </div>

          {/* Phone + Roll No */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="Enter phone number"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Roll Number
              </label>
              <input
                type="text"
                placeholder="Enter roll number"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              />
            </div>
          </div>

          {/* Course */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Course
            </label>
            <select
              className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            >
              <option>Select Course</option>
              <option>BCA</option>
              <option>BBA</option>
              <option>B.Tech</option>
              <option>MCA</option>
            </select>
          </div>

          {/* Address */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Address
            </label>
            <textarea
              rows="3"
              placeholder="Enter address"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition shadow-md"
            >
              Add Student
            </button>

            <button
              type="reset"
              className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-300 transition"
            >
              Reset
            </button>
          </div>

        </form>
      </div>

    </div>
  );
}

export default AddStudent;
