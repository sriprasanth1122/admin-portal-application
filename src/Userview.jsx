import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, useSearchParams } from "react-router-dom"

function Userview() {

  const params = useParams()
  console.log(params)

  // const [searchParams , setSeachParams] = useSearchParams()
  // console.log(...searchParams)

  // To change url
  // let changeurl = () => {
  //     setSeachParams({
  //         gender: "male",
  //         age : 22,
  //     })
  // }

  const [user, setUser] = useState([])

  useEffect(() => { 
    loadData()
  })

  let loadData = async () => {
    try {
      let user = await axios.get(`https://63a00c7324d74f9fe82cc690.mockapi.io/users/${params.id}`)
      console.log(user.data)
      setUser(user.data)
    } catch (error) {

    }
  }

  return (
    <>

      {/* <h1 class="ml-2">{params.id}</h1> */}

      <div className="row">
        <div className="col-lg-2 ml-4 pr-1">
          <ul class="list-group">
            <li class="list-group-item"><h3>Name</h3></li>
            <li class="list-group-item"><h3>Position</h3></li>
            <li class="list-group-item"><h3>Office</h3></li>
            <li class="list-group-item"><h3>Age</h3></li>
            <li class="list-group-item"><h3>Start Date</h3></li>
            <li class="list-group-item"><h3>Salary</h3></li>
          </ul>
        </div>
        <div className="col-lg-4 pl-0">
          <ul class="list-group">
            <li class="list-group-item"><h3>{user.name}</h3></li>
            <li class="list-group-item"><h3>{user.position}</h3></li>
            <li class="list-group-item"><h3>{user.office}</h3></li>
            <li class="list-group-item"><h3>{user.age}</h3></li>
            <li class="list-group-item"><h3>{user.startDate}</h3></li>
            <li class="list-group-item"><h3>{user.salary}</h3></li>
          </ul>
        </div>
      </div>


      {/* <button onClick={changeurl} type="button" class="btn btn-primary ml-2">Change URL</button> */}
    </>

  )
}

export default Userview