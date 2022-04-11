import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'

const url = 'https://opentdb.com/api.php?amount=100'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [waiting, setWaiting] = useState(true)
    const [loading, setLoading] = useState(true)
    const [questions, setQuestions] = useState([])
    const [index, setIndex] = useState(0)
    const [correct, setCorrect] = useState(0)
    const [error, setError] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const fetchQuestions = async (url) => {
        setLoading(true)
        setWaiting(false)
        const response = await axios(url).catch((err) => console.log(err))
        console.log(response)
        if (response) {
            const data = response.data.results
            if (data.length > 0) {
                setQuestions(data)
                setLoading(false)
                setWaiting(false)
                setError(false)
            } 
            else {
                setWaiting(true)
                setError(true)
            }
        } 
        else {
            setWaiting(true)
        }
    }

    useEffect(() => {
        fetchQuestions(url)
    },[])
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