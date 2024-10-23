import Header from "../../elements/Header"
import TaskListNumbers from "../../elements/TaskListNumbers"
import TaskList from "../../TaskList/TaskList"


const EmployeeDashboard = () => {
    return (
        <div className="p-10 bg-[#1C1C1C] h-screen">
            <Header/>
            <TaskListNumbers/>
            <TaskList/>
        </div>
    )
}

export default EmployeeDashboard
