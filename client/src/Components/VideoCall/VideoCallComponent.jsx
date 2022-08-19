import React, { useEffect, useRef, useState } from "react"
import Peer from "simple-peer"
import io from "socket.io-client"
import { getChatRoom } from "../../utils/apiClientService"
import { useNavigate } from 'react-router'

const socket = io.connect('http://localhost:3001')

function VideoCallComponent({ chat_id }) {
  const user = JSON.parse(localStorage.getItem("data"));
  const [ me, setMe ] = useState("")
	const [ stream, setStream ] = useState()
	const [ receivingCall, setReceivingCall ] = useState(false)
	const [ caller, setCaller ] = useState("")
	const [ callerSignal, setCallerSignal ] = useState()
	const [ callAccepted, setCallAccepted ] = useState(false)
	const [ idToCall, setIdToCall ] = useState("")
	const [ callEnded, setCallEnded] = useState(false)
	const [ name, setName ] = useState(user.firstname + ' ' + user.lastname)
	const myVideo = useRef()
	const userVideo = useRef()
	const connectionRef= useRef()
  const navigate = useNavigate();

  useEffect(() => {

    if (!user || !user.id) {
      navigate("/login");
    }

		navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
			setStream(stream)
				myVideo.current.srcObject = stream
		})

    socket.emit('join_room', chat_id);

    getUserId();

    socket.on("me", (id) => {
			setMe(id)
		})

		socket.on("callUser", (data) => {
      console.log(data);
			setReceivingCall(true)
			setCaller(data.from)
			setName(data.name)
			setCallerSignal(data.signal)
		})

    socket.on('endCall', leaveCall);
	}, [])


  const callUser = (id) => {
		const peer = new Peer({
			initiator: true,
			trickle: false,
			stream: stream
		})
		peer.on("signal", (data) => {
			socket.emit("callUser", {
				userToCall: id,
				signalData: data,
				from: me,
				name: name
			})
		})
		peer.on("stream", (stream) => {
			
				userVideo.current.srcObject = stream
			
		})
		socket.on("callAccepted", (signal) => {
			setCallAccepted(true)
			peer.signal(signal)
		})

		connectionRef.current = peer

	}



  const answerCall =() =>  {
		setCallAccepted(true)
    setReceivingCall(false)
		const peer = new Peer({
			initiator: false,
			trickle: false,
			stream: stream
		})
		peer.on("signal", (data) => {
			socket.emit("answerCall", { signal: data, to: caller })
		})
		peer.on("stream", (stream) => {
			userVideo.current.srcObject = stream
		})

		peer.signal(callerSignal)
		connectionRef.current = peer
	}

	const leaveCall = () => {
    socket.emit('endCall', chat_id);
		setCallAccepted(false)
		connectionRef.current = null;
    navigate('/chat');
	}


  const getUserId = async () => {
    try {
      const chatRoomInfo = await getChatRoom(chat_id);
      setIdToCall(JSON.stringify(chatRoomInfo.data.id));
    } catch (error) {
      console.log('Error from getUserId(): ', error);
    }
  }




  return (
    <div className="flex justify-around">
      <div className="w-full lg:pl-20">
      <div className="video-container">
				<div className="video">
					{stream &&  <video playsInline muted ref={myVideo} autoPlay style={{ width: "300px" }} />}
				</div>
				<div className="video">
					{callAccepted ?
					<video playsInline ref={userVideo} autoPlay style={{ width: "300px"}} />:
					null}
				</div>
			</div>

      <div className="call-button">
					{callAccepted ? (
						<button variant="contained" color="secondary" onClick={leaveCall}>
							End Call
						</button>
					) : (
						<button color="primary" aria-label="call" onClick={() => callUser(idToCall)}>
							Call 
						</button>
					)}
				</div>
      </div>


      <div>
				{receivingCall && !callAccepted ? (
						<div className="caller">
						<h1 >{name} is calling...</h1>
						<button variant="contained" color="primary" onClick={answerCall}>
							Answer
						</button>
					</div>
				) : null}
			</div>

      
    </div>
  );
}

export default VideoCallComponent;