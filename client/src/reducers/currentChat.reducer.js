const currentUsersChats = [{
    chat_id : 1,
    user_id1 : 1,
    user_id2 : 2,
},{
    chat_id : 2,
    user_id1 : 1,
    user_id2 : 3,
},{
    chat_id : 3,
    user_id1 : 4,
    user_id2 : 1,
}] // This will fetch all the messages from the db

const interactingWith = {
    chat_id : 1,
    user_id1 : 1,
    user_id2 : 2,
} // last interacted with

export default function currentChatReducer(state=interactingWith, action){

    switch (action.type) {

        case 'SET_CHAT' : {
            return currentUsersChats.filter((currentUsersChat)=>{ 
                return currentUsersChat.chat_id === action.payload
            })[0];
        }
        default : {
            return state
        }
    }
}