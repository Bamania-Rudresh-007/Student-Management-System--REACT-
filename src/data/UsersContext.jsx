import { useState, createContext, useEffect} from 'react';

export const UsersContext = createContext();

export function UsersProvider({children}){

  const [users, setUsers] = useState('');
  
  const logIn = (e)=>{
    setUsers(e.target.value);
  }
  
  useEffect(()=>{
    console.log(users);
  }, [users])

  // const values = {
  //   users,
  //   logIn
  // }


  return <UsersContext.Provider value={logIn}>{children}</UsersContext.Provider>
}


























