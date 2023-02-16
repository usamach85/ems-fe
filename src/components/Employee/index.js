import React, { useEffect,useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage, FieldError, Loader } from "../../assets";
import {registerEmployee,udpateEmployee,getAllEmployees,deleteEmployeeRecord,getsingleEmployee} from "../../redux/actions";
import { ToastContainer, toast } from 'react-toastify';
import { FaEdit, FaTrash } from "react-icons/fa";
import {
  FormControl,
  FormGroup,
  FormLabel,
  Card,
  Table
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
function EmployeeRegister() {
  const { register, handleSubmit, errors ,reset} = useForm();
  const [searchvalue, setsearchvalue] = useState('')
  let [id, setEmployeeId] = useState(0);
  let [name, setname] = useState('');
  let [email, setemail] = useState('');
  let [department, setdepartment] = useState('');
  let [dateOfBirth, setdateOfBirth] = useState('');



  let dispatch = useDispatch()
  let employee = useSelector((state) => state.employee)
  useEffect(() => {
    document.title = "Register Employee"
    if(employee.getsingle!==null){
    setEmployeeId(employee.getsingle.id)
    setname(employee.getsingle.name)
    setemail(employee.getsingle.email)
    setdepartment(employee.getsingle.department)
    setdateOfBirth(employee.getsingle.dateOfBirth)
    }
    dispatch(getAllEmployees("all"))
  }, [employee.getsingle,dispatch])
  function onSubmit(data) {
    console.log("data",data)

    if (data.id > 0) {
        dispatch(udpateEmployee(data, Notificiation))

    }
    else {
        dispatch(registerEmployee(data, Notificiation))

  }
  setEmployeeId(0)
  setname('')
  setemail('')
  setdepartment('')
  setdateOfBirth('')
}
   
  function deleteEmployee(id) {

    dispatch(deleteEmployeeRecord(id, Notificiation))
}
function editEmployee(id){
    dispatch(getsingleEmployee(id))
  
}
function GetFilterRecord(search) {
    setsearchvalue(search)
  if(search.trim().length === 0){
    dispatch(getAllEmployees("all"))
  }
  else{
    dispatch(getAllEmployees(search))

  }
}
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
  console.log(employee)
  return (
    <React.Fragment>

    <ToastContainer />
    <div className="container-fluid page-height main-login-body p-5">
        
    <Card>
    <Card.Body>
    <div className="row mt-1">
            <div className="col-4">
              <FormGroup>
                <FormLabel className="bold">
                  {"Search Employee"}
                </FormLabel>
                <FormControl onChange={(e) => GetFilterRecord(e.target.value)} value={searchvalue}/>
              </FormGroup>
            </div>

            </div>
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
<div className="mt-3">
    <Card>
    <Card.Header>
                Register Employee
            </Card.Header>
    <Card.Body>
  
        {
          employee.registerFailure === true
          &&
          <ErrorMessage message={employee.registerError} />
        }
        <form onSubmit={handleSubmit(onSubmit)} className="form-aside">
          <div className="row mt-1">
            <div className="col-6">
              <FormGroup>
                <FormLabel>
                  {"Name"}
                </FormLabel>
                <FormControl
                  style={{ borderColor: (errors && errors.name) ? "#a80000" : "" }}
                  name="name"
                  defaultValue={name}
                  type="name"
                  ref={register({ required: true })} />
              </FormGroup>
              {
                errors.name
                &&
                <FieldError message={"This Field is Required"} />
              }
            </div>
            <div className="col-6">
              <FormGroup>
                <FormLabel>
                  {"Email"}
                </FormLabel>
                <FormControl
                  style={{ borderColor: (errors && errors.email) ? "#a80000" : "" }}
                  name="email"
                  type="email"
                  defaultValue={email}
                  ref={register({ required: true })} />
                {
                  errors.email
                  &&
                  <FieldError message={"This Field Is Required"} />
                }
              </FormGroup>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <FormGroup>
                <FormLabel>
                  {"Department"}
                </FormLabel>
                <FormControl
                  style={{ borderColor: (errors && errors.department) ? "#a80000" : "" }}
                  name="department"
                  type="department"
                  defaultValue={department}
                  ref={register({ required: true })} />
                {
                  errors.department
                  &&
                  <FieldError message={"This Field Is Required"} />
                }
              </FormGroup>
              <input type="hidden" name="id"defaultValue={id} ref={register()} />
            </div>
            <div className="col-6">
              <FormGroup>
                <FormLabel>
                  {"Date of Birth"}
                </FormLabel>
                <FormControl
                  style={{ borderColor: (errors && errors.dateOfBirth) ? "#a80000" : "" }}
                  name="dateOfBirth"
                  ref={register({required:true})}
                  type="date"
                  
                   />
                   {
                  errors.dateOfBirth
                  &&
                  <FieldError message={"This Field Is Required"} />
                }
              </FormGroup>
            </div>
          </div>
          <div className="row">
      
          <div className="col-6">
          {
                                    employee
                                        &&
                                        employee.registerLoading === true
                                        ?
                                        <Loader />
                                        : <button
                                            type="submit"
                                            // className="btn-2 btn_register btn-create py-2"
                                            className="btn btn btn-primary"

                                        >
                                            {"Register"}
                                        </button>
                                }
            
          </div>
          
          </div>
        </form>
        </Card.Body>
            </Card>
            </div>
            </div>
    </React.Fragment>
  );
}
export default EmployeeRegister;

