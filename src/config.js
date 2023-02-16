const ERROR = {
    SYSTEM_ERROR: "System error. Please try again later!"
};
const PATH = {
    NOPAGE: "*",
    REGISTER: "/app",
    SIGNUP:"/signup"
};

const baseUrl = "https://emsbe.azurewebsites.net/api/";
const APP_SETTINGS = {
    API_PATH: {
        Employee: {
            registeremployee: baseUrl + "Employee/CreateOrUpdateEmployee",
            deleteemployee: baseUrl+"Employee/DeleteEmployee",
            getallemployee: baseUrl+"Employee/GetAllEmployees",
            getsingleemployee: baseUrl+"Employee/GetSingle",


        }
    }
};
export {
    ERROR,
    PATH,
    APP_SETTINGS
};
