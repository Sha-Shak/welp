export default function searchInputReducer(state="", action){
  
    switch (action.type) {

        case 'SET_SEARCH_INPUT' : {
         
            
            return action.payload  
        }
       
        default : {
            return state
        }
    }
}