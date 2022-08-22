const initialState = localStorage.getItem("currentChatId") || 0

export default function currentChatReducer(state=initialState, action){
 
    switch (action.type) {

        case 'SET_CHAT' : {

            localStorage.setItem("currentChatId",action.payload)
            
            return action.payload
        }
        default : {
            return state
        }
    }
}