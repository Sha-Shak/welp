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
	const [ callEnded, setCallEnded] = useState(false)
	const [ name, setName ] = useState(user.firstname + ' ' + user.lastname)
	const myVideo = useRef()
	const userVideo = useRef()
	const connectionRef= useRef()
  const navigate = useNavigate();
	const room_id = 'video_' + chat_id;

  


  const callUser = (id) => {
		console.log('callUser(): ');
		const peer = new Peer({
			initiator: true,
			trickle: false,
			stream: stream
		})
		peer.on("signal", (data) => {
			console.log('signalData: ', data);
			socket.emit("callUser", {
				userToCall: id,
				signalData: data,
				from: me,
				name: name
			})
		})
		peer.on("stream", (stream) => {
				console.log('stream: ', stream);
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
			console.log('signalData: ', data);
			socket.emit("answerCall", { signal: data, to: room_id })
		})
		peer.on("stream", (stream) => {
			console.log('stream: ', stream);
			userVideo.current.srcObject = stream
		})

		peer.signal(callerSignal)
		connectionRef.current = peer
	}

	const leaveCall = () => {
    socket.emit('endCall', room_id);
		setCallAccepted(false)
		connectionRef.current = null;
    window.close();
	}


	useEffect(() => {

    if (!user || !user.id) {
      navigate("/login");
    }

		navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
				setStream(stream)
					myVideo.current.srcObject = stream
		})

    socket.emit('join_video_room', room_id);
		socket.emit('check_user', room_id);

    socket.on("me", (id) => {
			setMe(id)
		})




		socket.on("callUser", (data) => {
			setReceivingCall(true)
			setCaller(data.from)
			setName(data.name)
			setCallerSignal(data.signal)
		})

    socket.on('endCall', leaveCall);
	}, [])



	socket.on("get_user", () => {
		callUser(room_id);
	});



  return (
    <div className="flex justify-around">
      <div className="w-full lg:pl-20">
				<div className="video-container flex justify-around">
					<div className="video" style={{ border: "grey solid 1px", margin: "20px" }}>
						<video playsInline muted ref={myVideo} autoPlay style={{ width: "900px" }} />
					</div>
					<div className="video" style={{ border: "grey solid 1px", margin: "20px" }}>
						<video playsInline ref={userVideo} autoPlay style={{ width: "900px" }} />
					</div>
				</div>

				<div className="call-button">
						{callAccepted ? (
							<button variant="contained" color="secondary" onClick={leaveCall}>
								End Call
							</button>
						) : "Waiting for participant to join..."}
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
    </div>
  );
}

export default VideoCallComponent;