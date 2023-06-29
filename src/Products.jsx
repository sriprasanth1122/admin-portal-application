import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"


function Products() {

    const [products, setproducts] = useState([])
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        loadData()
    }, [])

    let loadData = async () => {
        try {
            setLoading(true)
            let prod = await axios.get("https://63a00c7324d74f9fe82cc690.mockapi.io/Users")
            setproducts(prod.data)
            setLoading(false)
        } catch (error) {

        }
    }

    let removeFromCartProducts= (id) => {
        let index = products.findIndex((obj) => obj.id === id)
        products.splice(index,1)
        setproducts([...products])
    }

    let handleDelete = async (id) => {
        try {
            let ask = window.confirm("Are you sure you want to DELETE the product ?")
            if (ask) {
                let deleteID = await axios.delete(`https://63a00c7324d74f9fe82cc690.mockapi.io/Users/${id}`)
                removeFromCartProducts(id)
            };            

            // loadData()
        } catch (error) {

        }
    }


    return (
        isLoading ? <h4>Loading...</h4> : (
            <div class="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Product</h1>
                    <Link to="/portal/create-product" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                        className="fas fa-download fa-sm text-white-50"></i>Create Product</Link>
                </div>

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
                                        <th>Invented On</th>
                                        <th>Used For</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th>S.No</th>
                                        <th>Name</th>
                                        <th>Invented On</th>
                                        <th>Used For</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                    </tr>
                                </tfoot>
                                <tbody>

                                    {
                                        products.map((user, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{user.name}</td>
                                                    <td>{user.inventedOn}</td>
                                                    <td>{user.usedFor}</td>
                                                    <td>${user.price}</td>
                                                    <td>
                                                        <Link to={`/portal/products/view/${user.id}`} type="button" className="btn btn-info mr-1">View</Link>
                                                        <Link to={`/portal/products/edit/${user.id}`} type="button" className="btn btn-info mr-1">Edit</Link>
                                                        <button onClick={() => { handleDelete(user.id) }} type="button" className="btn btn-info mr-1">Delete</button>
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

            </div>
        )

    )
}

export default Products;