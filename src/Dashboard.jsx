import { useContext } from "react"
import Card from "./Card"
import UserContext from "./userContext"

function Dashboard() {
    const data = [
        {
            title : "Earnings (Monthly)",
            price : '$40,000',
            theme : "primary",
        },
        {
            title : "Earnings (Annual)",
            price : "$215,000",
            theme : "success",
        },
        {
            title : "Taske",
            price : '50%',
            theme : "info",
        },
        {
            title : "Pending Request",
            price : '18',
            theme : "warning",
        },
    ]

    let context = useContext(UserContext)

    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard - {context.userName}</h1>
                <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
            </div>
            <div className="row">

                {/* <!-- Earnings (Monthly) Card Example --> */}
                {
                    data.map((item) => {
                        return <Card cardData = {item}></Card>
                    })
                }
            </div>
        </div>


    )
}

export default Dashboard