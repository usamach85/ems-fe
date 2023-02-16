import axios from "axios";
import { getCountryTimeZone } from "../../assets";
import { APP_SETTINGS } from "../../config";

export function userLogin(userData) {
    userData = { ...userData, "timezone": getCountryTimeZone() }
    return axios.post(APP_SETTINGS.API_PATH.LOGIN.login, userData)
}