import React, { useState, useEffect, useRef } from 'react'

export default function TodoForm(props){
    const [input, setInput] = useState(props.edit ? props.edit.value : "")
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = event => {
        setInput(event.tareget.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })
        setInput('')
    }

    return (
        <form onSubmit={handleSubmit} >
            {props.edit ? (
                    <>
                        <input
                            placeholder="Update your item"
                            value={input}
                            onChange={handleChange}
                            name='text'
                            ref={inputRef}
                        />
                        <button onClick={handleSubmit}>
                            Update
                        </button>
                    </>
                ):(
                <>
                    <input
                        placeholder='Add a Todo'
                        value={input}
                        onChange={handleChange}
                        name='text'
                        ref={inputRef}
                    />
                    <button onClick={handleSubmit}>
                        Add Todo
                    </button>
                </>
            )}
        </form>
    )
}