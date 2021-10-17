import React, { useState, useEffect, useRef } from 'react'
import { InputRadio, ContainerInput, ImagemInput, InputDate } from '../styled/styled'
import DatePicker from 'react-datepicker'

/*componente que controla os input */

export default function TodoForm(props){
    const [input, setInput] = useState(props.edit ? props.edit.value : "")
    const [ startDate, setStartDate ] = useState(new Date())
    const inputRef = useRef(null)

    let priority = " "
    let priorityData = " "

    /*
     pega os dados do input
    */

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = event => {
        setInput(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })
        setInput('')
        alert("Task added Successfully!!")
    }

    /*
     pega os dados do radio
     */
    const HandlePriorityChange = ((e) => {
        const {name,value,id} = e.target 
        const target = e.target;
        
        console.log("radio datas here: ", target.value)
        
        priority = value
        priorityData = value
    })

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
                    <ContainerInput>
                            <h3>What are your priorities:</h3>
                        <InputRadio>
                            <div>
                                <label>
                                    <input
                                        type="radio" 
                                        id="1" 
                                        name="priority" 
                                        value="high"
                                        onChange={(e) => HandlePriorityChange(e)}
                                    />
                                    A - High
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input
                                        type="radio" 
                                        id="2" 
                                        name="priority" 
                                        value="medium"
                                        onChange={(e) => HandlePriorityChange(e)}
                                    />
                                    B - Medium
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input
                                        type="radio" 
                                        id="3" 
                                        name="priority" 
                                        value="low "
                                        onChange={(e) => HandlePriorityChange(e)}
                                    />
                                    C - Low
                                </label>
                            </div>
                        </InputRadio>
                        <InputDate>
                            Date:
                            <DatePicker
                                selected = {startDate} 
                                onChange = { (date) => setStartDate(date)}
                            />
                        </InputDate>
                        <ImagemInput>
                            <div>
                                <label for='arquivo'>Select an Image:</label>
                            </div>
                            <div>
                                <input type='file' id='arquivo' name='arquivo' multiple />
                            </div>
                        </ImagemInput>
                    </ContainerInput>
                    <button onClick={handleSubmit}>
                        Add Todo
                    </button>
                </>
            )}
        </form>
    )
}