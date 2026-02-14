import { createContext, useContext, useState } from "react"

const StudentsContext = createContext();

export function StudentsProvider({children}){

    const [student, setStudent] = useState({
        fullName: "",
        email: "",
        phone: "",
        rollNumber: "",
        course: "",
        address: "",
    })


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