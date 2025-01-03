import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Home } from './routes/Home'
import { NewPost } from './routes/NewPost'
import { Post } from './routes/Post.jsx'
import './css/index.css'
import App from './componets/App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/new-post',
        element: <NewPost />
      },
      {
        path: '/post/:id',
        element: <Post/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
