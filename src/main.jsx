import { Children, StrictMode } from 'react'
import { createRoot} from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Home from "./pages/Home"
import Category from "./pages/Category"
import Search from "./pages/Search"
import Article from "./pages/Article"
import NotFound from "./pages/NotFound"
import Layout from './components/Layout.jsx'


// const router = createBrowserRouter([
//   { path: "/", element: <Home /> },
//   { path: "/category/:categoryName", element: <Category /> },
//   { path: "/search", element: <Search /> },
//   { path: "/article/:id", element: <Article /> },
//   { path: "*", element: <NotFound /> },
// ]);


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/category/:categoryName", element: <Category /> },
      { path: "/search", element: <Search /> },
      { path: "/article/:id", element: <Article /> },
      { path: "*", element: <NotFound /> },
    ]},
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={router} />
  </StrictMode>
)
