import React, { useEffect,useState } from "react";
import {getAllEmployees} from "../../redux/actions";
import { ToastContainer } from 'react-toastify';
import {
  FormControl,
  FormGroup,
  FormLabel
} from "react-bootstrap";
import { useDispatch} from "react-redux";
import GetAllEmployee from "./GetAllEmployee";
import Employee from "./RegisterEmployee";
function EmployeeRegister() {
  const [searchvalue, setsearchvalue] = useState('')
  let dispatch = useDispatch()
  useEffect(() => {
    document.title = "Register Employee"
    dispatch(getAllEmployees(null))
  },[dispatch])
function GetFilterRecord(search) {
    setsearchvalue(search)
    dispatch(getAllEmployees(search.trim().length ? search : null))
}
  return (
    <React.Fragment>

    <ToastContainer />
    <div className="container-fluid page-height main-login-body p-5">
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
            {/* Get all employee list component */}
    <GetAllEmployee/>
<div className="mt-3">
  {/* Register employee component */}
   <Employee/>
            </div>
            </div>
    </React.Fragment>
  );
}
export default EmployeeRegister;

