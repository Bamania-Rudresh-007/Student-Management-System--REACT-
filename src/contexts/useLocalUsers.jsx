import { useState, useEffect } from "react";

export default function useLocalUsers() {
    const [user, setUser] = useState(() => {
        try {
            const savedUsers = localStorage.getItem("signUpUsers");
            return savedUsers ? JSON.parse(savedUsers) : [];
        } catch (error) {
            console.error("Failed to fetch data from local storage", error);
            return [];
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem('signUpUsers', JSON.stringify( user));
        } catch (error) {
            console.error("Failed to save users to local storage",error);
        }
    }, [user])

    useEffect(() => {
        const handleUsersLocalStorage = (e) => {
            try {
                if(e.key == 'signUpUsers'){
                    const newUser = JSON.parse(e.newValue || '[]');
                    setUser(newUser);
                }
            } catch (error) {
                console.error("Failed to store data to local storage", error);
            }
        };
        window.addEventListener("storage", handleUsersLocalStorage);
    }, []);

    return [user,setUser];
}
