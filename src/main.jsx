import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Home } from './routes/Home'
import { NewPost } from './routes/NewPost'
import { Post } from './routes/Post.jsx'
import { Admin } from './routes/Admin.jsx'
import './css/index.css'
import App from './components/App.jsx'

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'


const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Navigate to='/blog' />
      },
      {
        path: '/blog',
        element: <Home />,
      },
      {
        path: '/blog/new-post',
        element: <NewPost />
      },
      {
        path: '/blog/post/:id',
        element: <Post/>
      },
      {
        path: '/blog/admin/',
        element: <Admin/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
