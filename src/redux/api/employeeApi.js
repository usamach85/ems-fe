import axios from "axios";
import { APP_SETTINGS } from "../../config";

export function employeeRegister(employeedata) {
    return axios.post(APP_SETTINGS.API_PATH.Employee.registeremployee, employeedata)
}
export function employeeUpdate(employeedata) {
    return axios.post(APP_SETTINGS.API_PATH.Employee.registeremployee, employeedata)
}

export function deleteEmployee(id) {
    return axios.delete(`${APP_SETTINGS.API_PATH.Employee.deleteemployee}?id=${id}`);

}
export function getAllEmployee(search) {
    if(search===null){
    return axios.get(`${APP_SETTINGS.API_PATH.Employee.getallemployee}`);
    }
    else{
    return axios.get(`${APP_SETTINGS.API_PATH.Employee.getallemployee}?search=${search}`);

    }
 }
export function getSingleEmployeeRecord(id) {
    return axios.get(`${APP_SETTINGS.API_PATH.Employee.getsingleemployee}?id=${id}`);

}