import React, {useState, useEffect, useRef} from "react"

const TodoForm = (props) => {
    const [input, setInput] = useState(props.edit ? props.edit.value : "")
    const inputRef = useRef(null)
    const [selectedValue, setSelectedValue] = React.useState('')

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })
        setInput('')
    }


    return (
        <form>
            <>
                <input
                    placeholder="Add a Todo"
                    value={input}
                    onChange={handleChange}
                    name="text"
                    ref={inputRef}
                />
                <div>
                    What are your priorities:
                    <div>
                        <label>
                            <input
                                checked={selectedValue === 'high'}
                                type="radio"
                                name="priority"
                                value="high"
                                onChange={handleChange}
                            />
                            High
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                checked={selectedValue === 'medium'}
                                type="radio"
                                name="priority"
                                value="medium"
                                onChange={handleChange}
                            />
                            Medium
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                checked={selectedValue === 'low'}
                                type="radio"
                                name="priority"
                                value="low"
                                onChange={handleChange}
                            />
                            Low
                        </label>
                    </div>
                </div>
                <button onClick={handleSubmit}>
                    Add Todo
                </button>
            </>
        </form>
    )
}

export default TodoForm