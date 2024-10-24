import AllTask from "../../elements/AllTask"
import CreateTask from "../../elements/CreateTask"
import Header from "../../elements/Header"

const AdminDashboard = () => {
    return (
        <div className="h-screen w-full p-10">
            <Header />
            <CreateTask/>
            <AllTask/>
        </div>
    )
}

export default AdminDashboard