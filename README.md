# welp
<img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fexternal-preview.redd.it%2FOEjNhnWsNSgOpNt1ytVvRMwGDPog6QZtQBOIBprueX4.jpg%3Fwidth%3D640%26crop%3Dsmart%26auto%3Dwebp%26s%3Ddb96a6688613a4a597988e8b3d88e98ae9201a8d&f=1&nofb=1' alt='awkward dog' width='150'>

Remote working and learning can be lonely and awkward. It is hard to build strong teams and develop school spirit when nobody knows each other. Another meeting, lecture...welp! that was awkward. Welp! aims to tackle this challenge with a chat and <[video call]> app that designed to help organizations with remote operations to build open environments and team spirit. Welp! helps to prevent the isolation of remote work and study, build teams and connect people. <mark>One team, one dream!</mark>

## Install and run
### Back-end
The back-end of the app utilizes an express server, postgreSQL database, JWT for authentication and socket.io for chatting and <[eventually]> video calls.

To setup, from the root navigate to the server directory and: 
 - Run `npm i` to install dependencies
 - Fill in the blank fields in the .env file (you can use the .env.example), if this doesn't already exist save a new file as '.env' in the server directory, copy paste the contents of .env.example and populate with your postgreSQL credentials and a JWT secret phrase (of your choice)
 - Ensure you have a connection to a postgres database open and from the CLI run `npm run dev` then run `npm run builddb` - this will start the server and populate the database with the required tables for this project

### Front-end
The front-end of the app utilizes react, tailwindcss, react-router-dom, redux for state management and socket.io for chat.

To setup, navigate to the client directory and:
 - Run `npm i` to install dependencies 
 - Run `npm start`; this will open the app in a new a browser window/tab 

 ### Contributors
 <a href='https://github.com/Sha-Shak'>
  <img src='https://avatars.githubusercontent.com/u/57285556?v=4' alt='sha-shak' width='50' height='50'>
 </a> 
 <a href='https://github.com/samiya-kazi'>
  <img src='https://avatars.githubusercontent.com/u/68043117?v=4' alt='samiya-kazi' width='50' height='50'>
 </a> 
 <a href='https://github.com/noelalam9999'>
  <img src='https://avatars.githubusercontent.com/u/22258835?v=4' alt='noelalam9999' width='50' height='50'>
 </a> 
 <a href='https://github.com/jessewh'>
  <img src='https://avatars.githubusercontent.com/u/33237365?v=4' alt='jessewh' width='50' height='50'>
 </a> 
 


  