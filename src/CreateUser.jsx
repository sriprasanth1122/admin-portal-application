import axios from "axios"
import { useFormik } from "formik"

function CreateUser() {

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
                let user = await axios.post("https://63a00c7324d74f9fe82cc690.mockapi.io/users", value)
                alert("User Created")
            }
        }
    )

    return (
        <div className="container">
            <form onSubmit={formik.handleSubmit}>
                <div class="row">
                    <div className="col-lg-8 mt-3">
                        <label for="exampleDataList" class="form-label">User Name</label>
                        <input class={`form-control ${formik.errors.username ? 'input-error' : ''}`} list="datalistOptions" id="exampleDataList" placeholder="Type to User Name..."
                            value={formik.values.username}
                            onChange={formik.handleChange}
                            name="name"
                        />
                        <span style={{ color: 'red' }}>{formik.errors.username}</span>
                    </div>
                    <div className="col-lg-8 mt-3">
                        <label for="exampleDataList" class="form-label">Position</label>
                        <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to Position..."
                            value={formik.values.position}
                            onChange={formik.handleChange}
                            name="position"
                        />
                        <span style={{ color: 'red' }}>{formik.errors.position}</span>
                    </div>
                    <div className="col-lg-8 mt-3">
                        <label for="exampleDataList" class="form-label">Office</label>
                        <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to Office..."
                            value={formik.values.office}
                            onChange={formik.handleChange}
                            name="office"
                        />
                        <span style={{ color: 'red' }}>{formik.errors.office}</span>
                    </div>
                    <div className="col-lg-8 mt-3">
                        <label for="exampleDataList" class="form-label">Age</label>
                        <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to Age..."
                            value={formik.values.age}
                            onChange={formik.handleChange}
                            name="age"
                        />
                        <span style={{ color: 'red' }}>{formik.errors.age}</span>
                    </div>
                    <div className="col-lg-8 mt-3">
                        <label for="exampleDataList" class="form-label">Start Date</label>
                        <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to Start Date..."
                            value={formik.values.startDate}
                            onChange={formik.handleChange}
                            name="startDate"
                        />
                        <span style={{ color: 'red' }}>{formik.errors.startDate}</span>
                    </div>
                    <div className="col-lg-8 mt-3">
                        <label for="exampleDataList" class="form-label">Salary</label>
                        <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to Salary..."
                            value={formik.values.salary}
                            onChange={formik.handleChange}
                            name="salary"
                        />
                        <span style={{ color: 'red' }}>{formik.errors.salary}</span>
                    </div>
                    <div className="col-lg-8 mt-3">
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

export default CreateUser

