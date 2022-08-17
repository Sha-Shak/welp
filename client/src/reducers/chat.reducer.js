const msgs = [{
    content: "Hey",
    chat_id : "1",
    sender_id : 1,
    timestap : ""
},{
    content: "Hello",
    chat_id : "1",
    sender_id : 2,
    timestap : ""
},{
    content: "Did you push it?",
    chat_id : "1",
    sender_id : 1,
    timestap : ""
}] // This will fetch all the messages from the db

export default function messagesReducer(state=msgs, action){
    switch (action.type) {
        case 'SEND_MESSAGE' : {
            
            return [...state,action.payload];
            
        }
        
        default : {
            return state
        }
    }
}