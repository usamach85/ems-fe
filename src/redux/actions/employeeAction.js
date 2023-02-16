import { request, success, failure, EMPLOYEE_REQUEST } from './utilities';
import { employeeRegister, deleteEmployee,getSingleEmployeeRecord,getAllEmployee,employeeUpdate} from '../api';

export function registerEmployee(employeeData,Notificiation) {
    return (dispatch) => {
        dispatch(request(EMPLOYEE_REQUEST.EMPLOYEE_REGISTER_REQUEST));
        employeeRegister(employeeData).then(
            response => {
                console.log("log from action",response)
                if (response.status === 200) {
                     dispatch(success(EMPLOYEE_REQUEST.EMPLOYEE_REGISTER_SUCCESS, response.data))
                     Notificiation("Employee Added Successfully", "success")
                }
                else {
                    dispatch(failure(EMPLOYEE_REQUEST.EMPLOYEE_REGISTER_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(EMPLOYEE_REQUEST.EMPLOYEE_REGISTER_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    };
}
export function udpateEmployee(employeeData,Notificiation) {
    return (dispatch) => {
        dispatch(request(EMPLOYEE_REQUEST.EMPLOYEE_UPDATE_REQUEST));
        employeeUpdate(employeeData).then(
            response => {
                console.log("log from action",response)
                if (response.status === 200) {
                     dispatch(success(EMPLOYEE_REQUEST.EMPLOYEE_UPDATE_SUCCESS, response.data))
                     Notificiation("Employee Updated Successfully", "success")
                }
                else {
                    dispatch(failure(EMPLOYEE_REQUEST.EMPLOYEE_UPDATE_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(EMPLOYEE_REQUEST.EMPLOYEE_UPDATE_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    };
}
export function deleteEmployeeRecord(id,Notificiation) {
    return (dispatch) => {
        dispatch(request(EMPLOYEE_REQUEST.EMPLOYEE_DELETE_REQUEST));
        deleteEmployee(id).then(
            response => {
                console.log("log from action",response)
                if (response.status === 200) {
                     dispatch(success(EMPLOYEE_REQUEST.EMPLOYEE_DELETE_SUCCESS, id))
                     Notificiation("Employee Deleted Successfully", "success")
                }
                else {
                    dispatch(failure(EMPLOYEE_REQUEST.EMPLOYEE_DELETE_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(EMPLOYEE_REQUEST.EMPLOYEE_DELETE_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    };
}
export function getsingleEmployee(id) {
    return (dispatch) => {
        dispatch(request(EMPLOYEE_REQUEST.EMPLOYEE_GET_SINGLE_REQUEST));
        getSingleEmployeeRecord(id).then(
            response => {
                console.log("log from action",response)
                if (response.status === 200) {
                     dispatch(success(EMPLOYEE_REQUEST.EMPLOYEE_GET_SINGLE_SUCCESS, response.data))
                }
                else {
                    dispatch(failure(EMPLOYEE_REQUEST.EMPLOYEE_GET_SINGLE_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(EMPLOYEE_REQUEST.EMPLOYEE_GET_SINGLE_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    };
}
export function getAllEmployees(search) {
    return (dispatch) => {
        dispatch(request(EMPLOYEE_REQUEST.EMPLOYEE_GET_ALL_REQUEST));
        getAllEmployee(search).then(
            response => {
                console.log("log from action",response)
                if (response.status === 200) {
                     dispatch(success(EMPLOYEE_REQUEST.EMPLOYEE_GET_ALL_SUCCESS, response.data))
                }
                else {
                    dispatch(failure(EMPLOYEE_REQUEST.EMPLOYEE_GET_ALL_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(EMPLOYEE_REQUEST.EMPLOYEE_GET_ALL_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    };
}
