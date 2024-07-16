import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from './components/Login.jsx';
import { store } from './store/store.jsx'
import { Provider } from 'react-redux'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Signup from './pages/Signup.jsx';
import Post from './pages/Post.jsx';
import Question from './pages/Question.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children :[
      {
        path: "login",
        element:<Login/>
      },
      {
        path : "signup",
        element :<Signup/>
      },
      {
        path : "new-post",
        element: <Post/>,
        
      },
      {
        path : "question/:id",
        element : <Question/>
      },
      {
        path : "*",
        element : <h1>404 Not Found</h1>
      },
      
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
