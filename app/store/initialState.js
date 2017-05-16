import enums from "../constants/Const"

const initialState ={
	errorToAccess: true,
	information: '',
	userInSystem: {},
	loadingStatus: enums.LOAD_REQUEST,
	tasks:[],
	allUsers:[]
};

export default initialState;