import * as myActions from   './myActions'
import * as actionType from   './actionType'

const initialState={
    active:"not_active"
}

const user=(state=initialState,action)=>{

const {type,payload}=action

switch (type) {
    case actionType.SETACTIVATE:
        return {
            ...state,
            active:payload
        }
     

    default:
        break;
}
}
export default user