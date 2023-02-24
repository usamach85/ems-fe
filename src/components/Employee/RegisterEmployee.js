
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {toast } from 'react-toastify';
import { ErrorMessage, FieldError, Loader } from "../../assets";
import {registerEmployee,udpateEmployee,getAllEmployees} from "../../redux/actions";

import {
    FormControl,
    FormGroup,
    FormLabel,
    Card
  } from "react-bootstrap";
import GetAllEmployee from "./GetAllEmployee";
function Employee(){
    const { register, handleSubmit, errors ,reset} = useForm();
    let [id, setEmployeeId] = useState(0);
    let [name, setname] = useState('');
    let [email, setemail] = useState('');
    let [department, setdepartment] = useState('');
    let [dateOfBirth, setdateOfBirth] = useState('');
    let dispatch = useDispatch()
    let employee = useSelector((state) => state.employee)
    useEffect(() => {
        if(employee.getsingle!==null){
        setEmployeeId(employee.getsingle.id)
        setname(employee.getsingle.name)
        setemail(employee.getsingle.email)
        setdepartment(employee.getsingle.department)
        setdateOfBirth(employee.getsingle.dateOfBirth)
        }
      }, [employee.getsingle])
      function onSubmit(data) {
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
  );
}
export default Employee;
