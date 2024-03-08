import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import App from './App.jsx'
// import Home from './pages/Home.jsx'
// import AddPost from "./pages/AddPost";
// import Signup from './pages/Signup'
// import EditPost from "./pages/EditPost";
// import Post from "./pages/Post";
// import AllPosts from "./pages/AllPosts";
// import Login from './components/index.js'
import { AuthLayout } from './components/index.js'

import { lazy } from 'react'
const App = lazy(() => import('./App.jsx'));
const Home = lazy(() => import('./pages/Home.jsx'));
const Login = lazy(() => import('./components/Login.jsx'));
const Signup = lazy(() => import('./pages/Signup.jsx'));
const AddPost = lazy(() => import('./pages/AddPost.jsx'));
const EditPost = lazy(() => import('./pages/EditPost.jsx'));
const Post = lazy(() => import('./pages/Post.jsx'));
const AllPosts = lazy(() => import('./pages/AllPosts.jsx'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/login",
            element: (
                <AuthLayout authentication={false}>
                    <Login />
                </AuthLayout>
            ),
        },
        {
            path: "/signup",
            element: (
                <AuthLayout authentication={false}>
                    <Signup />
                </AuthLayout>
            ),
        },
        {
            path: "/all-posts",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AllPosts />
                </AuthLayout>
            ),
        },
        {
            path: "/add-post",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AddPost />
                </AuthLayout>
            ),
        },
        {
            path: "/edit-post/:slug",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <EditPost />
                </AuthLayout>
            ),
        },
        {
            path: "/post/:slug",
            element: <Post />,
        },
    ],
},
])


ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
)

