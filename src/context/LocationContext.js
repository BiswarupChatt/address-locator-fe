import React, { createContext, useContext, useState } from 'react'

const LocationContext = createContext()

export const LocationProvider = ({ children }) => {
    const [response, setResponse] = useState({})

    return (
        <LocationContext.Provider value={{ response, setResponse }}>
            {children}
        </LocationContext.Provider>
    )
}

export const useLocation = () => {
    return useContext(LocationContext)
}