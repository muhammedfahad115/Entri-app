import React, { createContext, useState } from 'react'

const Context = createContext();

function UserContext({ children }) {
    const [changeHome, setChangeHome] = useState('');
    const [error, setError] = useState(null);
  return (
    <Context.Provider value={{changeHome, setChangeHome , error, setError}}>
        {children}
    </Context.Provider>
  )
}
export {Context}
export default UserContext