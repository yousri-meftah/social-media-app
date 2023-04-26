
import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
function App() {
  const router=createBrowserRouter(
    [
      {
        path:"/",
        element : <div><a href="/register">register</a> hello</div>
      },
      {
        path:"/register",
        element : <Register />
      },
      {
        path:"/login",
        element : <Login />
      }
    ]
  )
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
