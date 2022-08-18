
export default function currentUsersChatsReducer(state=[], action){
  
    switch (action.type) {

        case 'SET_CHATS' : {
         
            state = action.payload
            return state;   
        }
        default : {
            return state
        }
    }
}