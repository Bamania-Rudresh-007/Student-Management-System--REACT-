import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import useStudentServices from "../../hooks/useCrudOperations.js";

function AddStudent() {

    const { addStudent, newStudentId } = useStudentServices();
    const navigate = useNavigate();

    const [currentStudent, setCurrentStudent] = useState({
        name: "",
        email: "",
        number: "",
        rollNumber: "",
        course: "",
        address: "",
    })

    const handleAddStudentChanges = (e) => {
        const {id , value} = e.target;
        setCurrentStudent({...currentStudent, [id]: value, id: newStudentId});
    }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      
      <div className="w-full max-w-3xl bg-white shadow-2xl rounded-3xl p-8 md:p-12 relative">
        
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium transition cursor-pointer"
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
        <form className="space-y-6" onSubmit={(e) => {
            e.preventDefault()
        }}>

          {/* Full Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter full name"
              value={currentStudent.name}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              onChange={(e) => {
                handleAddStudentChanges(e)
              }}
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
              id="email"
            value={currentStudent.email}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              onChange={(e) => {
                handleAddStudentChanges(e)
              }}
            />
          </div>

          {/* Phone + Roll No */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Phone Number
              </label>
              <input
                type="number"
                id="number"
                placeholder="Enter phone number"
                value={currentStudent.number}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                onChange={(e) => {
                    handleAddStudentChanges(e)
                }}
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Roll Number
              </label>
              <input
                type="number"
                id="rollNumber"
                placeholder="Enter roll number"
                value={currentStudent.rollNumber}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                onChange={(e) => {
                    handleAddStudentChanges(e)
                }}
              />
            </div>
          </div>

          {/* Course */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Course
            </label>
            <select
            id="course"
            value={currentStudent.course}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              onChange={(e) => {
                handleAddStudentChanges(e)
              }}
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
              id="address"
              placeholder="Enter address"
              value={currentStudent.address}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              onChange={(e) => {
                handleAddStudentChanges(e)
              }}
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition shadow-md cursor-pointer"
              onClick={() => {
                if(currentStudent.name != "" && currentStudent.email != "" && currentStudent.number != "" && currentStudent.rollNumber != "" && currentStudent.course != "" && currentStudent.address != ""){
                    addStudent(currentStudent)
                    console.log(currentStudent)
                    setCurrentStudent({
                        name: "",
                        email: "",
                        number: "",
                        rollNumber: "",
                        course: "",
                        address: "",
                    })
                }
                else{
                    alert("Please first fill the following details...")
                }
              }}
            >
              Add Student
            </button>

            <button
              type="reset"
              onClick={() => {
                setCurrentStudent({
                    name: "",
                    email: "",
                    number: "",
                    rollNumber: "",
                    course: "",
                    address: "",
                })
              }}
              className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-300 transition cursor-pointer"
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