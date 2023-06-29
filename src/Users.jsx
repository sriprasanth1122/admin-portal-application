import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Users() {

    // const users = [
    //     {
    //         id: 1,
    //         name: "Sri",
    //         position: "Web Developer",
    //         office: "Paypol",
    //         age: 23,
    //         startDate: "2024/03/01",
    //         salary: "50,000"
    //     },
    //     {
    //         id: 2,
    //         name: "Prasanth",
    //         position: "Developer",
    //         office: "zoho",
    //         age: 23,
    //         startDate: "2024/01/01",
    //         salary: "55,000"
    //     },
    //     {
    //         id: 3,
    //         name: "Saravanan",
    //         position: "Java Developer",
    //         office: "Infosys",
    //         age: 23,
    //         startDate: "2022/07/01",
    //         salary: "50,000"
    //     },
    // ]

    const [users, setUsers] = useState([])
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        loadData()
    }, []);

    let loadData = async () => {
        setLoading(true)
        let users = await axios.get("https://63a00c7324d74f9fe82cc690.mockapi.io/users");
        setUsers(users.data)
        setLoading(false)
    };

    let removeFromList = (id) => {
        let index = users.findIndex((obj)=> obj.id === id)
        users.splice(index,1)
        setUsers([...users])
    }

    let userDelete = async (id) => {
        try {
            let ask = window.confirm("Are you sure you want delete the User ?");
            if (ask) {
                await axios.delete(`https://63a00c7324d74f9fe82cc690.mockapi.io/users/${id}`);
                removeFromList(id)
            };

            // loadData();

        } catch (error) {

        }
    }

    return (
        <div className="container-fluid">

            {/* <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Users</h1>
                <Link to="/portal/create-user" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="fas fa-download fa-sm text-white-50"></i>Create User</Link>
            </div>

            {
                isLoading ? <h4>Loading...</h4> : (
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>S.No</th>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                            <th>Start date</th>
                                            <th>Salary</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>S.No</th>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                            <th>Start date</th>
                                            <th>Salary</th>
                                            <th>Action</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>

                                        {
                                            users.map((user, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{index + 1}</td>
                                                        <td>{user.name}</td>
                                                        <td>{user.position}</td>
                                                        <td>{user.office}</td>
                                                        <td>{user.age}</td>
                                                        <td>{user.startDate}</td>
                                                        <td>${user.salary}</td>
                                                        <td>
                                                            <Link to={`/portal/users/view/${user.id}`} type="button" className="btn btn-info mr-1">View</Link>
                                                            <Link to={`/portal/users/edit/${user.id}`} type="button" className="btn btn-info mr-1">Edit</Link>
                                                            <button onClick={() => userDelete(user.id)} type="button" className="btn btn-info mr-1">Delete</button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        } 

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )
            }




        </div>
    )
}

export default Users