// import ActionTypes from '../Constant/Constant'

// import ActionTypes from "../Constant/Constant";

const Intitial_State ={
    students_data:{},
    company_data:{},
    postget:[],
    postview:[],
    current_user:{},
}

export default (state = Intitial_State,action)=>{
    // console.log("action............",action)
    // console.log('bfdbsfb=====',ActionTypes.SetUser)
    switch(action.type){
        case "STUDENTS":
            return({
                ...state,
                // current_user:[...state.current_user,action.payload]
                students_data:action.payload
            })
        case "COMPANY":
            return({
                ...state,
                // currentAction_user:[...state.currentAction_user,action.payload]
                company_data:action.payload
            })
        case "CURRENTUSER":
            return({
                ...state,
                // current_user:[...state.user,action.payload]
                current_user:action.payload
            })
        case "POSTGET":
                return ({
                    ...state,
                    postget: [...state.postget, action.payload]
                    // postget:action.payload
                })
        case "POSTVIEW":
                return ({
                    ...state,
                    postview: [...state.postget, action.payload]
                    // postget:action.payload
                })
        }
        return state;
}

