import { useNavigate } from "react-router-dom";
import useStudentServices from "../../hooks/useCrudOperations";
import { useStudents } from "../../contexts/StudentsContext";
import { useEffect } from "react";

function DeleteStudent() {
    const navigate = useNavigate()
    const { deleteStudent } = useStudentServices()
    const { deletedStudent , setDeletedStudent } = useStudents()
    // const [deletedStudent , setDeletedStudent] = useState({id: "", confirm: ""});

    useEffect(() => {
      console.log(deletedStudent)
    }, [deletedStudent])
    

    const handlechange = (e) => {
        const {id , value} = e.target;
        setDeletedStudent({...deletedStudent ,[id]: value});
    }

    const handleForm = (e) => {
        e.preventDefault()  
        deleteStudent(deletedStudent)
        setDeletedStudent({id: "", confirm: ""});
    }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      
      <div className="w-full max-w-xl bg-white shadow-2xl rounded-3xl p-8 md:p-12">

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className=" flex items-center gap-2 text-red-600 hover:text-red-800 font-medium transition cursor-pointer"
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
          <div className="text-5xl mb-4 text-red-500">⚠️</div>
          <h2 className="text-3xl font-bold text-red-600">
            Delete Student
          </h2>
          <p className="text-gray-500 mt-2">
            This action cannot be undone. Please confirm before proceeding.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleForm}>

          {/* Student ID */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Student ID
            </label>
            <input
              type="text"
              placeholder="Enter student ID to delete"
              id="id"
              value={deletedStudent.id}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
              onChange={handlechange}
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
              id="confirm"
              value={deletedStudent.confirm}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
              onChange={handlechange}
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
