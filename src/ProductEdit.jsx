import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function ProductEdit() {

    let params = useParams()
    let navigate = useNavigate()

    const formik = useFormik(
        {
            initialValues: {
                name: "",
                inventedOn: "",
                usedFor: "",
                price: "",
            },

            validate: (value) => {
                let error = {}

                if (value.name == "") {
                    error.name = "* Please enter the name"
                }
                if (value.inventedOn == "") {
                    error.inventedOn = "* Please enter the Invented On"
                }
                if (value.usedFor == "") {
                    error.usedFor = "* Please enter the used for"
                }
                if (value.price == "") {
                    error.price = "* Please enter the price"
                }

                return error
            },

            onSubmit: async (value) => {
                try {
                    let product = await axios.put(`https://63a00c7324d74f9fe82cc690.mockapi.io/Users/${params.id}`, value)
                    alert("Product is Updated Successfully")
                    navigate("/portal/products")
                    console.log(value)
                } catch (error) {

                }
            }
        }

    )

    useEffect(() => {
        loadData()
    }, [])

    let loadData = async () => {
        try {
            let data = await axios.get(`https://63a00c7324d74f9fe82cc690.mockapi.io/Users/${params.id}`)
            formik.setValues(
                {
                    name: data.data.name,
                    inventedOn: data.data.inventedOn,
                    usedFor: data.data.usedFor,
                    price: data.data.price,
                }
            )
        } catch (error) {

        }
    }

    return (
        <div className="container">
            <form onSubmit={formik.handleSubmit}>
                <div className="row">
                    <div className="col-lg-8 mt-3">
                        <label for="exampleDataList" class="form-label"><h4>Name</h4></label>
                        <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to Position..."
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            name="name"
                        />
                        <span style={{ color: "red" }}>{formik.errors.name}</span>
                    </div>
                    <div className="col-lg-8 mt-4">
                        <label for="exampleDataList" class="form-label"><h4>Invented On</h4></label>
                        <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to Position..."
                            value={formik.values.inventedOn}
                            onChange={formik.handleChange}
                            name="inventedOn"
                        />
                        <span style={{ color: "red" }}>{formik.errors.inventedOn}</span>
                    </div>
                    <div className="col-lg-8 mt-4">
                        <label for="exampleDataList" class="form-label"><h4>Used For</h4></label>
                        <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to Position..."
                            value={formik.values.usedFor}
                            onChange={formik.handleChange}
                            name="usedFor"
                        />
                        <span style={{ color: "red" }}>{formik.errors.usedFor}</span>
                    </div>
                    <div className="col-lg-8 mt-4">
                        <label for="exampleDataList" class="form-label"><h4>Price</h4></label>
                        <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to Position..."
                            value={formik.values.price}
                            onChange={formik.handleChange}
                            name="price"
                        />
                        <span style={{ color: "red" }}>{formik.errors.price}</span>
                    </div>
                    <div className="col-lg-8 mt-4">
                        <button class="btn btn-primary"
                            type="submit"
                            disabled={!formik.isValid}
                        > Submit form </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ProductEdit