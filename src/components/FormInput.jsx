import React, { useEffect, useRef, useContext } from 'react'
import { FormContext } from '../App'

const FormInput = ({ id, inputProps, title }) => {
    const inputRef = useRef(null)
    useEffect(() => {
        if (id === 'id') {
            inputRef.current.focus()
        }
    }, [])
    const { formData, setFormData } = useContext(FormContext)
    return (
        <>
            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="id"
                >
                    {title}
                </label>
                <input
                    ref={inputRef}
                    id={id}
                    className="shadow border rounded w-full py-2 px-3 text-gray-700"
                    {...inputProps}
                    value={formData[id]}
                    onChange={(e) => {
                        setFormData({ ...formData, [id]: e.target.value })
                    }}
                />
                <div id="id-msg" className="mt-1 mb-3 text-xs text-red-500">
                    테스트
                </div>
            </div>
        </>
    )
}

export default FormInput
