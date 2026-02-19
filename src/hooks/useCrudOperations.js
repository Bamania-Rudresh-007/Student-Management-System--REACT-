import { useEffect, useEffectEvent, useState } from "react";

export default function useStudentServices() {

    // handles the storing and updating part of new students in local storage
    const [students , setStudents] = useState(() => {
        try {
        const storedStudents = localStorage.getItem("students");
        return storedStudents ? JSON.parse(storedStudents) : [];            
        } catch (error) {
            console.error("Failed to fetch students data from local Storage...", error);
            return [];
        }
        
    });

    useEffect(() => {
        localStorage.setItem("students", JSON.stringify(students));
    }, [students])

    // Unique id generator
    const newStudentId = students.length + 1001;

    // For addStudent component...
    const addStudent = (currentStudent) => {
        try {
            const updatedStudent = [...students, currentStudent];
            // localStorage.setItem("students", JSON.stringify(updatedStudent));
            setStudents(updatedStudent)
        } catch (error) {
            console.error("Failed to store the current student data in local storage...", error);
            return [];
        }
    };

    // Handles the logic for updating students data
    const updateStudent = (updatedStudent) => {
        setStudents((prev) => prev.map(item => item.id == updatedStudent.id ? updatedStudent: item))
        // localStorage.setItem("students", JSON.stringify(students));
    };

    const deleteStudent = (id) => {
        // const removeStudent = students.filter((student) => student.id != id);
        console.log(id);
        console.log(students)
        id ? setStudents((prev) => prev.filter((item) => item.id != id)) : alert("Please give the valid Student ID");
        console.log(students)
    };
    

    return { addStudent, updateStudent, deleteStudent, newStudentId, students };
}
