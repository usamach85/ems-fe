import { EMPLOYEE_REQUEST } from "../actions/utilities";
const INITIAL_STATE = {
    registerLoading: false,
    registerSuccess: false,
    registerFailure: false,
    registerError: null,
    employee: null,

    updateLoading: false,
    updateSuccess: false,
    updateFailure: false,
    updateError: null,
    employee: null,

    getsingleLoading: false,
    getsingleSuccess: false,
    getsingleFailure: false,
    getsingleError: null,
    getsingle: null,

    getallLoading: false,
    getallSuccess: false,
    getallFailure: false,
    getallError: null,
    getall: [],

    deleteLoading: false,
    deleteSuccess: false,
    deleteFailure: false,
    deleteError: null,
    deleteresponse: null,
};

export const employeeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case EMPLOYEE_REQUEST.EMPLOYEE_REGISTER_REQUEST:
            return {
                ...state,
                registerLoading: true,
                registerSuccess: false,
                registerFailure: false,
                registerError: null,
            }
        case EMPLOYEE_REQUEST.EMPLOYEE_REGISTER_FAILURE:
            return {
                ...state,
                registerLoading: false,
                registerSuccess: false,
                registerFailure: true,
                registerError: action.payload
            }
        case EMPLOYEE_REQUEST.EMPLOYEE_REGISTER_SUCCESS:
            const allEmpList = state.getall;
            allEmpList.push(action.payload);
            return {
                ...state,
                registerLoading: false,
                registerSuccess: true,
                registerFailure: false,
                registerError: null,
                getall: allEmpList
            }

            case EMPLOYEE_REQUEST.EMPLOYEE_UPDATE_REQUEST:
                return {
                    ...state,
                    updateLoading: true,
                    updateSuccess: false,
                    updateFailure: false,
                    updateError: null,
                }
            case EMPLOYEE_REQUEST.EMPLOYEE_UPDATE_FAILURE:
                return {
                    ...state,
                    updateLoading: false,
                    updateSuccess: false,
                    updateFailure: true,
                    updateError: action.payload
                }
            case EMPLOYEE_REQUEST.EMPLOYEE_UPDATE_SUCCESS:
                const allemployeelist = state.getall;
                for (let i = 0; i < allemployeelist.length; i++) {
                    if (allemployeelist[i].id === action.payload.id)
                    allemployeelist[i] = action.payload
                }
                return {
                    ...state,
                    updateLoading: false,
                    updateSuccess: true,
                    updateFailure: false,
                    updateError: null,
                    getall: allemployeelist
                }

            case EMPLOYEE_REQUEST.EMPLOYEE_GET_SINGLE_REQUEST:
                return {
                    ...state,
                    getsingleLoading: true,
                    getsingleLoadingSuccess: false,
                    getsingleLoadingFailure: false,
                    getsingleLoadingError: null,
                }
            case EMPLOYEE_REQUEST.EMPLOYEE_GET_SINGLE_FAILURE:
                return {
                    ...state,
                    getsingleLoading: false,
                    getsingleSuccess: false,
                    getsingleFailure: true,
                    getsingleError: action.payload
                }
            case EMPLOYEE_REQUEST.EMPLOYEE_GET_SINGLE_SUCCESS:
                return {
                    ...state,
                    getsingleLoading: false,
                    getsingleSuccess: true,
                    getsingleFailure: false,
                    getsingleError: null,
                    getsingle: action.payload
                }

                case EMPLOYEE_REQUEST.EMPLOYEE_GET_ALL_REQUEST:
                    return {
                        ...state,
                        getallLoading: true,
                        getallLoadingSuccess: false,
                        getallLoadingFailure: false,
                        getallLoadingError: null,
                    }
                case EMPLOYEE_REQUEST.EMPLOYEE_GET_ALL_FAILURE:
                    return {
                        ...state,
                        getallLoading: false,
                        getallSuccess: false,
                        getallFailure: true,
                        getallError: action.payload
                    }
                case EMPLOYEE_REQUEST.EMPLOYEE_GET_ALL_SUCCESS:
                    return {
                        ...state,
                        getallLoading: false,
                        getallSuccess: true,
                        getallFailure: false,
                        getallError: null,
                        getall: action.payload
                    }

                    case EMPLOYEE_REQUEST.EMPLOYEE_DELETE_REQUEST:
                        return {
                            ...state,
                            deleteLoading: true,
                            deleteSuccess: false,
                            deleteFailure: false,
                            deleteError: null,
                        }
                    case EMPLOYEE_REQUEST.EMPLOYEE_DELETE_FAILURE:
                        return {
                            ...state,
                            deleteLoading: false,
                            deleteSuccess: false,
                            deleteFailure: true,
                            deleteError: action.payload
                        }
                    case EMPLOYEE_REQUEST.EMPLOYEE_DELETE_SUCCESS:
                        let allemplist = state.getall;
                        for (let i = 0; i < allemplist.length; i++) {
                          if (allemplist[i].id === action.payload) {
                            allemplist.splice(i, 1);
                          }
                        }
                        return {
                            ...state,
                            deleteLoading: false,
                            deleteSuccess: true,
                            deleteFailure: false,
                            deleteError: null,
                            getall: allemplist
                        }
        default:
            return state;
    }
};
