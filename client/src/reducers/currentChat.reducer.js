export default function currentChatReducer(state=0, action){
 
    switch (action.type) {

        case 'SET_CHAT' : {
            return action.payload
        }
        default : {
            return state
        }
    }
}