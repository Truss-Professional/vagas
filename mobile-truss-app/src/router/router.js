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
              <iframe src="https://giphy.com/embed/dsWOUTBz5aae8ET8Ss" 
                  width="305" height="380" frameBorder="0" class="giphy-embed" allowcenterscreen>
              </iframe>
            </Route>
    </Switch>
  </BrowserRouter>
);
export default Router;