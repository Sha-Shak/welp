const users = [
    {
      id : 1, 
      name : "Shahriar"
    },{
      id : 2, 
      name : "Samiya"
    },{
      id : 3, 
      name : "Jesse"
    },
    {
      id : 4, 
      name : "Noel"
    }
  ]
  
  export const findContactName = (room, currentUser) => {
      if(room.user_id1===currentUser){
        return users.filter((user)=>user.id===room.user_id2);
      }
      return users.filter((user)=>user.id===room.user_id1);
  }


  export const getTime = (timestamp) => {
    const date = new Date(timestamp);
    let hours = date.getHours();
    const minutes = date.getMinutes() < 10 ? ('0' + date.getMinutes()) : date.getMinutes();

    const amOrPm = hours >= 12 ? 'pm' : 'am';

    if (amOrPm === 'pm') {
      hours = hours - 12;
    }

    return hours + ':' + minutes + ' ' + amOrPm;
  }