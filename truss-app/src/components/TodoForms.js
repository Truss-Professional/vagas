import React, {useState, useEffect, useRef} from "react"

const TodoForm = (props) => {
    const [input, setInput] = useState(props.edit ? props.edit.value : "")
    const inputRef = useRef(null)
    const [selectedValue, setSelectedValue] = React.useState('high')

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
    const handChange = ((e) => {
        setSelectedValue(e.target.value)
    })

    return (
        <form onSubmit={handleSubmit}>
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
                                id="1"
                                name="priority"
                                value="high"
                                onChange={handChange}
                            />
                            High
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                checked={selectedValue === 'medium'}
                                type="radio"
                                id="2"
                                name="priority"
                                value="medium"
                                onChange={handChange}
                            />
                            Medium
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                checked={selectedValue === 'low'}
                                type="radio"
                                id="3"
                                name="priority"
                                value="low"
                                onChange={handChange}
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