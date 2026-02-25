import { useNavigate } from "react-router-dom";
import useStudentServices from "../../hooks/useCrudOperations";
import { useStudents } from "../../contexts/StudentsContext";

function DeleteStudent() {
    const navigate = useNavigate()
    const { deleteStudent } = useStudentServices()
    const { deletedStudent , setDeletedStudent } = useStudents()

    const isDark = JSON.parse(localStorage.getItem("Theme")) === "Dark Mode";

    const handlechange = (e) => {
        const {id , value} = e.target;
        setDeletedStudent({...deletedStudent ,[id]: value});
    }

    const handleForm = (e) => {
        e.preventDefault()  
        deleteStudent(deletedStudent)
        setDeletedStudent({id: "", confirm: ""});
    }

    const inputClass = `w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition ${isDark ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400" : "bg-white border-gray-300 text-gray-900"}`;

  return (
    <div className={`min-h-screen flex items-center justify-center px-4 py-10 transition-colors duration-300 ${isDark ? "bg-gray-900" : "bg-gray-100"}`}>
      
      <div className={`w-full max-w-xl shadow-2xl rounded-3xl p-8 md:p-12 transition-colors duration-300 ${isDark ? "bg-gray-800" : "bg-white"}`}>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-red-500 hover:text-red-400 font-medium transition cursor-pointer"
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
        <div className="text-center mb-8">
          <div className="text-5xl mb-4">⚠️</div>
          <h2 className="text-3xl font-bold text-red-500">
            Delete Student
          </h2>
          <p className={`mt-2 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
            This action cannot be undone. Please confirm before proceeding.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleForm}>

          {/* Student ID */}
          <div>
            <label className={`block font-medium mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
              Student ID
            </label>
            <input
              type="text"
              placeholder="Enter student ID to delete"
              id="id"
              value={deletedStudent.id}
              className={inputClass}
              onChange={handlechange}
            />
          </div>

          {/* Confirmation Text */}
          <div>
            <label className={`block font-medium mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
              Type <span className="font-bold text-red-500">DELETE</span> to confirm
            </label>
            <input
              type="text"
              placeholder="Type DELETE"
              id="confirm"
              value={deletedStudent.confirm}
              className={inputClass}
              onChange={handlechange}
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-red-700 transition shadow-md cursor-pointer"
            >
              Delete Student
            </button>

            <button
              type="button"
              className={`flex-1 py-3 rounded-xl font-semibold transition cursor-pointer ${isDark ? "bg-gray-600 text-gray-200 hover:bg-gray-500" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
              onClick={() => navigate(-1)}
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