import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductView() {

    let params = useParams()
    const [state, setState] = useState({})

    useEffect(() => {
        loadData()
    }, [])

    let loadData = async () => {
        let data = await axios.get(`https://63a00c7324d74f9fe82cc690.mockapi.io/Users/${params.id}`)
        setState(data.data)
    }

    return (
        <div className="conatainer ml-5">
            <div className="row">
                <div className="col-lg-8 mt-3">
                    <label for="exampleDataList" class="form-label"><h4>Name : {state.name}</h4></label>
                    
                </div>
                <div className="col-lg-8 mt-4">
                    <label for="exampleDataList" class="form-label"><h4>Invented On : {state.inventedOn}</h4></label>
                    
                </div>
                <div className="col-lg-8 mt-4">
                    <label for="exampleDataList" class="form-label"><h4>Used For : {state.usedFor}</h4></label>
                    
                </div>
                <div className="col-lg-8 mt-4">
                    <label for="exampleDataList" class="form-label"><h4>Price : ${state.price}</h4></label>
                    
                </div>

            </div>
        </div>
    )
}

export default ProductView