import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'

const url = 'https://opentdb.com/api.php?amount=100'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [waiting, setWaiting] = useState(false)
    const [loading, setLoading] = useState(false)
    const [questions, setQuestions] = useState([])
    const [index, setIndex] = useState(0)
    const [correct, setCorrect] = useState(0)
    const [error, setError] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

return (
    <AppContext.Provider
        value={{
            waiting,
            loading,
            questions,
            correct,
            error,
            isModalOpen
        }}
    >
        {children}
    </AppContext.Provider>
    )
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }