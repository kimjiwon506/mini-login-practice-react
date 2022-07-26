import React, { useEffect, useRef, useContext } from 'react'
import { FormContext } from '../App'

const ID_REGEX = new RegExp('^[a-z0-9_-]{5,20}$')
const PW_REGEX = new RegExp('^[a-zA-Z0-9]{8,16}$')

const ERROR_MSG = {
    required: '필수 정보입니다.',
    invalidId:
        '5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.',
    invalidPw: '8~16자 영문 대 소문자, 숫자를 사용하세요.',
    invalidPwCheck: '비밀번호가 일치하지 않습니다.',
}

const FormInput = ({ id, inputProps, title, errorData, setErrorData }) => {
    const checkRegex = () => {
        let result
        const value = formData[id]
        if (value.length === 0) {
            result = 'required'
        } else {
            switch (id) {
                case 'id':
                    result = ID_REGEX.test(value) ? true : 'invalidId'
                    break
                case 'pw':
                    result = PW_REGEX.test(value) ? true : 'invalidPw'
                    break
                case 'pwCheck':
                    result =
                        value !== formData['pwCheck'].value
                            ? true
                            : 'invalidPwCheck'
                    break
            }
        }
        setErrorData({ ...errorData, [id]: result })
    }
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
                    value={formData[id]}
                    onChange={(e) => {
                        setFormData({ ...formData, [id]: e.target.value })
                    }}
                    onBlur={checkRegex}
                    {...inputProps}
                />
                <div id="id-msg" className="mt-1 mb-3 text-xs text-red-500">
                    {[id] !== true ? ERROR_MSG[errorData[id]] : ''}
                </div>
            </div>
        </>
    )
}

export default FormInput
