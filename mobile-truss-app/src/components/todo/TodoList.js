import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import TodoForm from './TodoForms'
import Todo from './Todo'
import { goBack } from '../../router/coordinator'
import Logo from '../../assets/logo.png'
import { ButtonContainer, DetailsFlexBox, Container } from '../styled/styled'
import { Header }from '../../pages/styled/styled'

export default function TodoList() {
    const history = useHistory();
    
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
          return;
        }
    
        const newTodos = [todo, ...todos];
    
        setTodos(newTodos);
        console.log(...todos);
    };
    
    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
          return;
        }
    
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    };
    
    const removeTodo = id => {
        const removedArr = [...todos].filter(todo => todo.id !== id);
    
        setTodos(removedArr);
    };
    
    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
          if (todo.id === id) {
            todo.isComplete = !todo.isComplete;
          }
          return todo;
        });
        setTodos(updatedTodos);
    };
    
    return (
        <div>
            <Header>
                <ButtonContainer>
                    <button
                        onClick={()=>goBack(history)}
                    >
                            Go Back
                        </button>
                    </ButtonContainer>
                    <h2>App Mobile Truss</h2>
                    <img src={Logo} />
            </Header>
            <Container>
                <DetailsFlexBox>
                    <h1>What's the Plan for Today?</h1>
                    <TodoForm onSubmit={addTodo} />
                    <Todo
                        todos={todos}
                        completeTodo={completeTodo}
                        removeTodo={removeTodo}
                        updateTodo={updateTodo}
                    />
                </DetailsFlexBox>
            </Container>
        </div>
    );
}