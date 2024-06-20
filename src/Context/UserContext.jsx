import React, { createContext, useState } from 'react'

const Context = createContext();

function UserContext({ children }) {
    const [changeHome, setChangeHome] = useState('');
  return (
    <Context.Provider value={{changeHome, setChangeHome}}>
        {children}
    </Context.Provider>
  )
}
export {Context}
export default UserContext