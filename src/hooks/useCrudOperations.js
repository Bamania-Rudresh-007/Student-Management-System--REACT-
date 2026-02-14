import { useState } from "react";

export default function useStudentServices() {

    const [student , setStudent] = useState(() => {
        try {
        const storedStudents = localStorage.getItem("students");
        return storedStudents ? JSON.parse(storedStudents) : [];            
        } catch (error) {
            console.error("Failed to fetch students data from local Storage...", error);
            return [];
        }
    });

    const addStudent = (currentStudent) => {
        try {
            const updatedStudent = [...student, currentStudent];
            setStudent(updatedStudent)
            localStorage.setItem("students", JSON.stringify(student));
        } catch (error) {
            console.error("Failed to store the current student data in local storage...", error);
            return [];
        }
    };


    const updateStudent = () => {};

    const readStudents = () => {};

    const deleteStudent = () => {};

    return { addStudent, updateStudent, readStudents, deleteStudent };
}
