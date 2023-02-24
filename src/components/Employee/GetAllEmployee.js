import { FaEdit, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import {deleteEmployeeRecord,getsingleEmployee} from "../../redux/actions";
import {toast } from 'react-toastify';


import {
    Card,
    Table
  } from "react-bootstrap";
function GetAllEmployee(){
    function deleteEmployee(id) {

        dispatch(deleteEmployeeRecord(id, Notificiation))
    }
    function editEmployee(id){
        dispatch(getsingleEmployee(id))
      
    }
    let dispatch = useDispatch()
    let employee = useSelector((state) => state.employee)
    const {reset} = useForm();
    function Notificiation(data, condition) {
        reset();
        condition === "error" ?
            toast.error(data, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            :
            toast.success(data, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
    }
  return (
<Card>
    <Card.Body>

            <Card.Header>
                Employees List
            </Card.Header>
    {
                        employee.getall
                            &&
                            employee.getall.length > 0
                            ?
                            <Table  bordered hover>
                                <thead className="background_tabledata">
                                    <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Department</th>
                                    <th>DOB</th>
                                    <th>Action</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                         employee.getall
                                        &&
                                        employee.getall.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{item.name}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.department}</td>
                                                    <td>{item.dateOfBirth}</td>
                                                    <td> 
                                        
                                                <button className="btn btn-sm btn btn-primary" data-for="Edit" data-tip="Edit" onClick={() => editEmployee(item.id)} data-iscapture="true" ><FaEdit />
                                                 </button> 
                                                 
                                           <button className="btn btn-sm btn btn-danger" data-for="Trash" data-tip="Delete" onClick={() => deleteEmployee(item.id)} data-iscapture="true" ><FaTrash />
                                             </button>
                                             
                                                      
                                   
                                   </td>
                                                </tr>
                                            );
                                        })
                                    }
                                </tbody>
                            </Table>
                            : <p>No Employee Added</p>
                    }
        </Card.Body>
        </Card>
  );
}
export default GetAllEmployee;
