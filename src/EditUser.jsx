import axios from 'axios'
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function EditUser() {
    const params = useParams()
    const navigate = useNavigate()

    const formik = useFormik(
        {
            initialValues: {
                name: "",
                position: "",
                office: "",
                age: "",
                startDate: "",
                salary: ""
            },

            validate: (values) => {
                let errors = {}

                if (values.name === "") {
                    errors.name = "* Please enter the username"
                }
                if (values.name.length < 5) {
                    errors.name = "* Please enter greater than 5"
                }
                if (values.position === "") {
                    errors.position = "* Please enter the position"
                }
                if (values.office === "") {
                    errors.office = "* Please enter the office"
                }
                if (values.age === "") {
                    errors.age = "* Please enter the age"
                }
                if (values.startDate === "") {
                    errors.startDate = "* Please enter the start Date"
                }
                if (values.salary === "") {
                    errors.salary = "* Please enter the salary"
                }

                return errors;
            },

            onSubmit: async (value) => {
                try {
                    await axios.put(`https://63a00c7324d74f9fe82cc690.mockapi.io/users/${params.id}`, value);
                    navigate("/portal/users")
                    alert("Your Edit is updated")
                } catch (error) {

                }
            }
        }
    )

    // const [user, setUser] = useState({})

    useEffect(() => {
        loadData()
    }, [])

    let loadData = async () => {
        try {
            let user = await axios.get(`https://63a00c7324d74f9fe82cc690.mockapi.io/users/${params.id}`)
            formik.setValues(
                {
                    name: user.data.name,
                    position: user.data.position,
                    office: user.data.office,
                    age: user.data.age,
                    startDate: user.data.startDate,
                    salary: user.data.salary
                }
            )
        } catch (error) {

        }
    }

    return (
        <div className="container">
            <form onSubmit={formik.handleSubmit}>
                <div class="row">
                    <div className="col-lg-8 mt-3">
                        <label for="exampleDataList" class="form-label"><h5>Name</h5></label>
                        <input class={`form-control ${formik.errors.name ? 'input-error' : ''}`} list="datalistOptions" id="exampleDataList"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            name="name"
                        />
                        <span style={{ color: 'red' }}>{formik.errors.name}</span>
                    </div>
                    <div className="col-lg-8 mt-3">
                        <label for="exampleDataList" class="form-label"><h5>Position</h5></label>
                        <input class="form-control" list="datalistOptions" id="exampleDataList"
                            value={formik.values.position}
                            onChange={formik.handleChange}
                            name="position"
                        />
                        <span style={{ color: 'red' }}>{formik.errors.position}</span>
                    </div>
                    <div className="col-lg-8 mt-3">
                        <label for="exampleDataList" class="form-label"><h5>Office</h5></label>
                        <input class="form-control" list="datalistOptions" id="exampleDataList"
                            value={formik.values.office}
                            onChange={formik.handleChange}
                            name="office"
                        />
                        <span style={{ color: 'red' }}>{formik.errors.office}</span>
                    </div>
                    <div className="col-lg-8 mt-3">
                        <label for="exampleDataList" class="form-label"><h5>Age</h5></label>
                        <input class="form-control" list="datalistOptions" id="exampleDataList"
                            value={formik.values.age}
                            onChange={formik.handleChange}
                            name="age"
                        />
                        <span style={{ color: 'red' }}>{formik.errors.age}</span>
                    </div>
                    <div className="col-lg-8 mt-3">
                        <label for="exampleDataList" class="form-label"><h5>Start Date</h5></label>
                        <input class="form-control" list="datalistOptions" id="exampleDataList"
                            value={formik.values.startDate}
                            onChange={formik.handleChange}
                            name="startDate"
                        />
                        <span style={{ color: 'red' }}>{formik.errors.startDate}</span>
                    </div>
                    <div className="col-lg-8 mt-3">
                        <label for="exampleDataList" class="form-label"><h5>Salary</h5></label>
                        <input class="form-control" list="datalistOptions" id="exampleDataList"
                            value={formik.values.salary}
                            onChange={formik.handleChange}
                            name="salary"
                        />
                        <span style={{ color: 'red' }}>{formik.errors.salary}</span>
                    </div>
                    <div className="col-lg-8 mt-3">
                        <button class="btn btn-primary mt-3"
                            type="submit"
                            disabled={!formik.isValid}
                        > Submit form </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditUser