import { useNavigate } from "react-router-dom";
import { useStudents } from "../../contexts/StudentsContext.jsx"; 
import { useState, useRef, useEffect } from "react";


function ViewStudentDetails() {
    const navigate = useNavigate();
    const { deletedStudent, setDeletedStudent } = useStudents()
    const [showFieldMenu, setShowFieldMenu] = useState(false);
    const menuRef = useRef(null);
    
    const currentStudent = JSON.parse(localStorage.getItem("CurrentViewDetails"));

    const fields = [
        { label: "Full Name", id: "name" },
        { label: "Email Address", id: "email" },
        { label: "Phone Number", id: "number" },
        { label: "Roll Number", id: "rollNumber" },
        { label: "Course", id: "course" },
        { label: "Address", id: "address" },
    ];

    // Close dropdown if user clicks outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setShowFieldMenu(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleFieldSelect = (fieldId) => {
        localStorage.setItem("CurrentViewDetails", JSON.stringify(currentStudent));
        localStorage.setItem("EditFocusField", JSON.stringify(fieldId));
        localStorage.setItem("IsDirectedFromViewDetailsPage", JSON.stringify(true));
        navigate("/updateStudent");
    };

    const handleDeleteBtn = () => {
        navigate("/deleteStudent")
        console.log(currentStudent)
        setDeletedStudent({...deletedStudent, id: currentStudent.id})
    }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">

      {/* Card Container */}
      <div className="w-full max-w-3xl bg-white shadow-2xl rounded-3xl p-8 md:p-12">
        {/* Back Button */}
         <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium transition cursor-pointer"
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


        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 pt-5">
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
            <p className="text-gray-800 font-semibold">{currentStudent.name}</p>
          </div>

          {/* Roll Number */}
          <div>
            <h4 className="text-gray-600 font-medium mb-1">Roll Number</h4>
            <p className="text-gray-800 font-semibold">{currentStudent.rollNumber}</p>
          </div>

          {/* Unique ID */}
          <div>
            <h4 className="text-gray-600 font-medium mb-1">Student ID</h4>
            <p className="text-gray-800 font-semibold">{currentStudent.id}</p>
          </div>

          {/* Email */}
          <div>
            <h4 className="text-gray-600 font-medium mb-1">Email</h4>
            <p className="text-gray-800 font-semibold">{currentStudent.email}</p>
          </div>

          {/* Phone */}
          <div>
            <h4 className="text-gray-600 font-medium mb-1">Phone</h4>
            <p className="text-gray-800 font-semibold">{currentStudent.number}</p>
          </div>

          {/* Course */}
          <div>
            <h4 className="text-gray-600 font-medium mb-1">Course</h4>
            <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm font-medium">
              {currentStudent.course}
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
              {currentStudent.address}
            </p>
          </div>

        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">

          {/* Edit Student Button with Click Dropdown */}
          <div className="flex-1 relative" ref={menuRef}>

            {/* Dropdown Field Menu - appears above button */}
            {showFieldMenu && (
              <div className="absolute bottom-full mb-2 left-0 w-full bg-white border border-gray-200 rounded-xl shadow-xl z-10 overflow-hidden">
                <p className="text-xs text-gray-400 font-medium px-4 pt-3 pb-1 uppercase tracking-wide">
                  Select field to edit
                </p>
                {fields.map((field) => (
                  <button
                    key={field.id}
                    onClick={() => handleFieldSelect(field.id)}
                    className="w-full text-left px-4 py-2.5 text-gray-700 hover:bg-yellow-50 hover:text-yellow-700 font-medium transition text-sm flex items-center gap-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block"></span>
                    {field.label}
                  </button>
                ))}
              </div>
            )}

            <button
              onClick={() => setShowFieldMenu((prev) => !prev)}
              className="w-full bg-yellow-500 text-white py-3 rounded-xl font-semibold hover:bg-yellow-600 transition shadow-md flex items-center justify-center gap-2"
            >
              Edit Student
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 transition-transform duration-200 ${showFieldMenu ? "rotate-180" : ""}`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          <button className="flex-1 bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-red-700 transition shadow-md"
          onClick={handleDeleteBtn}
          >
            Delete Student
          </button>
        </div>

      </div>
    </div>
  );
}

export default ViewStudentDetails;