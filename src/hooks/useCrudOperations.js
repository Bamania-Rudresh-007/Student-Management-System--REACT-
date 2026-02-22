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
    const UniqueIdGenerator = () => {
        let newStudentId;
        const lastUpdatedId = JSON.parse(localStorage.getItem("lastUpdatedId"))
        if(lastUpdatedId){
            newStudentId = lastUpdatedId + 1;
        }
        else{
            newStudentId = students.length + 1001;
        }

        return newStudentId;
    }

    // For addStudent component...
    const addStudent = (currentStudent) => {
        try {
            const updatedStudent = [...students, currentStudent];
            setStudents(updatedStudent)
        } catch (error) {
            console.error("Failed to store the current student data in local storage...", error);
            return [];
        }
    };

    // Handles the logic for updating students data
    const updateStudent = (updatedStudent) => {
        setStudents((prev) => prev.map(item => item.id == updatedStudent.id ? updatedStudent: item))
    };

    const deleteStudent = (data) => {
        if(students.length < 0){
            return false;
        }
        else{
            if(data.confirm.toLowerCase() == "delete"){
            data.id ? setStudents((prev) => prev.filter((item) => item.id != data.id)) : alert("Please give the valid Student ID");
            console.log(data)
            }
            else{
                alert("Confim through writing delete in below given form...");
            }
        }

    };
    

    return { addStudent, updateStudent, deleteStudent, UniqueIdGenerator, students, setStudents };
}
