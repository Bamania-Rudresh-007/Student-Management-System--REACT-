import { createContext, useContext, useState } from "react"

const StudentsContext = createContext();

export function StudentsProvider({children}){

    // const [student , setStudent] = useState(() => {
    //     try {
    //         const savedStudent = localStorage.getItem('students')
    //         return savedStudent ? JSON.parse(savedStudent) : []; 
    //     } catch (error) {
    //         console.error("Failed to fetch students data from local storage", error);
    //         return [];
    //     }
    // })




    const values = {
        name: "Hey"
    }
    
    return <StudentsContext.Provider value={values}>{children}</StudentsContext.Provider>
}

export function useStudents(){
    const context = useContext(StudentsContext);

    if(!context){
        throw new Error("Students context must be used within the StudentsProvider...");
    }

    return context;
}