import Image from "../components/Imagem/imag"
import React, {useState, useEffect, useRef} from "react"
import { ButtoRadio } from "./styled"

const TodoForm = (props) => {
    const [input, setInput] = useState(props.edit ? props.edit.value : "")
    const inputRef = useRef(null)
    const [selectedValue, setSelectedValue] = useState({
        isAgree: false,
        priority: " High ",

    })
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleInput = e => {
        setInput(e.target.value)
    }
    const handleChange = e => {
        const target = e.target
        const name = target.name
        const value = target.type=="input" ? target.checked : target.value
        setSelectedValue({
            ...selectedValue,
            [name] : value
        })
    }

    const uploadImage = async e => {
      const files = e.target.files
      const data = new FormData()
      data.append('file', files[0])
      data.append('upload_preset', 'darwin')
      setLoading(true)
      const res = await fetch(
        '	https://api.cloudinary.com/v1_1/dihifeicm/image/upload',
        {
          method: 'POST',
          body: data
        }
      )
      const file = await res.json()
      setImage(file.secure_url)
      setLoading(false)
    }
    const handleSubmit = e => {
        e.preventDefault()
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: `${input} - ${selectedValue.priority} - ${Image.file} `,
            input: document.querySelector("selectedValue"),
        })
        setInput('')
        setSelectedValue('')
    }
// aceitei


    return (
        <div>
            <form>
                <>
                    <input
                        placeholder="Insert task"
                        value={input}
                        onChange={handleInput}
                        name="text"
                        ref={inputRef}
                    />
                    {input.length > 0 && (
                        <div>
                            <label for="file" >Upload file:</label>
                            <input
                                type="file"
                                name="file"
                                placeholder="Upload an image"
                                onChange={uploadImage}
                            />
                            <img src={file} style={{ width: '300px' }} />
                        </div>
                    )}
                    <ButtoRadio>
                        <h2>What are your priority:</h2>
                        <div>
                            <label>
                                High
                                <input
                                    type="radio"
                                    name="priority"
                                    value="High"
                                    onChange={handleChange}
                                    checked={selectedValue.priority == "High"}
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                Medium
                                <input
                                    type="radio"
                                    name="priority"
                                    value="Medium"
                                    onChange={handleChange}
                                    checked={selectedValue.priority == "Medium"}
                                    />
                            </label>
                        </div>
                        <div>
                            <label>
                                Low
                                <input
                                    type="radio"
                                    name="priority"
                                    value="Low"
                                    onChange={handleChange}
                                    checked={selectedValue.priority == "Low"}
                                    />
                            </label>
                        </div>
                    </ButtoRadio>
                    <br/>
                    <br/>
                    <button onClick={handleSubmit}>
                        To Add
                    </button>
                    <h2>List Task: {input} - {selectedValue.priority} {file} </h2>
                </>
            </form>
        </div>
    )
}

export default TodoForm