import React, { useContext, useState } from 'react'
import UserContext from './userContext'

function Profile() {

    const context = useContext(UserContext)
    const [name, setName] = useState("")
    let changeProfile = () => {
        context.setUserName(name)
        alert("Profile Name Changed")
    }

    return (
        <div className='container'>
            <div className="col-lg-8 mt-5 mb-3">
                <label for="exampleDataList" class="form-label"><h3>Profile</h3></label>
                <input class="form-control" list="datalistOptions" id="exampleDataList" type="text"
                    value={name}
                    onChange={(e) => {                          // (1:26:40) => What is 'e'
                        setName(e.target.value)
                        context.setUserName(e.target.value)     // This is for to change the name at a time when we type in the input.
                    }}
                />
            </div>
            <button class="btn btn-primary ml-3"
                type="submit"
                onClick={changeProfile}
            > Submit form </button>


        </div>
    )
}

export default Profile