const initialState = {
    currentUser: null
}

const GET_CURRENT_USER = 'GET_CURRENT_USER'

export const getCurrentUser = (user) => ({
        type: GET_CURRENT_USER,
        payload: user
    
})


const users = (state = initialState, action) =>{
    switch(action.type){
        case 'GET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }
            default:
             return state;
    }
}

export default users;