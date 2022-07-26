import React, { createContext, useState, useRef } from 'react'
import './App.css'
import Footer from './components/Footer'
import Form from './components/Form'
import Modal from './components/Modal'

const initialFormData = {
    id: '',
    pw: '',
    pwCheck: '',
}
export const FormContext = createContext({
    formData: initialFormData,
    setFormData: () => {},
})

function App() {
    const modalRef = useRef(null)
    const [formData, setFormData] = useState(initialFormData)
    return (
        <>
            <FormContext.Provider value={{ formData, setFormData }}>
                <Form modalRef={modalRef} />
                <Footer />
                <Modal ref={modalRef} />
            </FormContext.Provider>
        </>
    )
}

export default App
