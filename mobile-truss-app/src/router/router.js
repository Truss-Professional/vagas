import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../pages/homePage/homePage'
import TodoList from "../components/todo/TodoList";

const Router = () => (
  <BrowserRouter>
        <Switch>
            <Route exact path='/'   
                component = { HomePage } 
            />

            <Route exact path='/todolist'  
                component = { TodoList } 
            />

            <Route>
              <div>"Erro 404 - Esta Pagina não existe!" </div>
            </Route>
    </Switch>
  </BrowserRouter>
);
export default Router;