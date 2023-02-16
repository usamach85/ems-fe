function request(actionType) {
    return {
        type: actionType
    }
}
function success(actionType, response) {
    return {
        type: actionType,
        payload: response
    }
}
function failure(actionType, error) {
    return {
        type: actionType,
        payload: error
    }
}
const EMPLOYEE_REQUEST = {
    EMPLOYEE_REGISTER_RESET: "EMPLOYEE_REGISTER_RESET",
    EMPLOYEE_REGISTER_REQUEST: "EMPLOYEE_REGISTER_REQUEST",
    EMPLOYEE_REGISTER_SUCCESS: "EMPLOYEE_REGISTER_SUCCESS",
    EMPLOYEE_REGISTER_FAILURE: "EMPLOYEE_REGISTER_FAILURE",

    EMPLOYEE_UPDATE_RESET: "EMPLOYEE_UPDATE_RESET",
    EMPLOYEE_UPDATE_REQUEST: "EMPLOYEE_UPDATE_REQUEST",
    EMPLOYEE_UPDATE_SUCCESS: "EMPLOYEE_UPDATE_SUCCESS",
    EMPLOYEE_UPDATE_FAILURE: "EMPLOYEE_UPDATE_FAILURE",

    EMPLOYEE_GET_SINGLE_REQUEST: "EMPLOYEE_GET_SINGLE_REQUEST",
    EMPLOYEE_GET_SINGLE_SUCCESS: "EMPLOYEE_GET_SINGLE_SUCCESS",
    EMPLOYEE_GET_SINGLE_FAILURE: "EMPLOYEE_GET_SINGLE_FAILURE",

    EMPLOYEE_GET_ALL_REQUEST: "EMPLOYEE_GET_ALL_REQUEST",
    EMPLOYEE_GET_ALL_SUCCESS: "EMPLOYEE_GET_ALL_SUCCESS",
    EMPLOYEE_GET_ALL_FAILURE: "EMPLOYEE_GET_ALL_FAILURE",

    EMPLOYEE_DELETE_REQUEST: "EMPLOYEE_DELETE_REQUEST",
    EMPLOYEE_DELETE_SUCCESS: "EMPLOYEE_DELETE_SUCCESS",
    EMPLOYEE_DELETE_FAILURE: "EMPLOYEE_DELETE_FAILURE",
}



export {
    request,
    success,
    failure,
    EMPLOYEE_REQUEST
}