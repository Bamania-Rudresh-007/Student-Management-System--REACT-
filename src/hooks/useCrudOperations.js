import { useState } from "react";

export default function useStudentServices() {

    const [student , setStudent] = useState(() => {
        try {
        const storedStudents = JSON.parse(localStorage.getItem("students"));
        return storedStudents ? [storedStudents] : [];            
        } catch (error) {
            console.error("Failed to fetch students data from local Storage...", error);
        }
    });

    const addStudent = (currentStudent) => {
        try {
            localStorage.setItem("students", JSON.stringify(currentStudent));
        } catch (error) {
            console.error("Failed to store the current student data in local storage...", error);
        }
    };

    const updateStudent = () => {};

    const readStudents = () => {};

    const deleteStudent = () => {};

    return { addStudent, updateStudent, readStudents, deleteStudent };
}
