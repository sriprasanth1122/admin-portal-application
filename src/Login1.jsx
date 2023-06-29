import React from "react"
import { Link, useNavigate } from "react-router-dom"


function Login() {

    let navigate = useNavigate()
    let login = () => {
        navigate("/portal/dashboard")
    }

    return (
        <div className=" align-items-center m-5">
            <h1 className="h2 mb-3 text-gray-800">Login</h1>

            <h4>Type 1</h4>

            <button type="button" onClick={login} class="btn btn-primary mr-3 mb-3">Open Portal JavaScript</button>

            <h4>Type 2</h4>

            <Link to="/open-portal">
            <button type="button" class="btn btn-primary">Open Portal Html</button>
            </Link>
            

            {/* <Link to="/open-portal" className="d-none m-0 d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                className="fas fa-download fa-sm text-white-50"></i>Open Portal</Link> */}
        </div>
        // <h1>Hello</h1>
    )
}

export default Login

// NOTE: 
// To redirect to another page there are two types one is using 
//             1. Html : Link tag; 
//             2. Js function ()