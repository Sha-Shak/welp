import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import Peer from "simple-peer";
import io from "socket.io-client";

const socket = io.connect('https://welp-server.herokuapp.com')

function VideoCallComponent({ chat_id }) {
  const user = JSON.parse(localStorage.getItem("data"));
  const [me, setMe] = useState("");
  const [stream, setStream] = useState();
  const [receivingCall, setReceivingCall] = useState(false);
  const [caller, setCaller] = useState("");
  const [callerSignal, setCallerSignal] = useState();
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [name, setName] = useState(user.firstname + " " + user.lastname);
  const [callerName, setCallerName] = useState(null);
  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();
  const navigate = useNavigate();
  const room_id = "video_" + chat_id;

  const callUser = (id) => {
    console.log("callUser(): ");
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream: stream,
    });
    peer.on("signal", (data) => {
      console.log("signalData: ", data);
      socket.emit("callUser", {
        userToCall: id,
        signalData: data,
        from: me,
        name: name,
      });
    });
    peer.on("stream", (stream) => {
      console.log("stream: ", stream);
      userVideo.current.srcObject = stream;
    });
    socket.on("callAccepted", (data) => {
      setCallAccepted(true);
      peer.signal(data.signal);
      setCallerName(data.name);
    });

    connectionRef.current = peer;
  };

  const answerCall = () => {
    setCallAccepted(true);
    setReceivingCall(false);
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: stream,
    });
    peer.on("signal", (data) => {
      console.log("signalData: ", data);
      socket.emit("answerCall", { signal: data, to: room_id, name: name });
    });
    peer.on("stream", (stream) => {
      console.log("stream: ", stream);
      userVideo.current.srcObject = stream;
    });

    peer.signal(callerSignal);
    connectionRef.current = peer;
  };

  const leaveCall = () => {
    socket.emit("endCall", room_id);
    setCallAccepted(false);
    connectionRef.current = null;
    window.close();
  };

  useEffect(() => {
    if (!user || !user.id) {
      navigate("/login");
    }

    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setStream(stream);
        myVideo.current.srcObject = stream;
      });

    socket.emit("join_video_room", room_id);
    socket.emit("check_user", { room_id, id: user.id });

    socket.on("me", (id) => {
      setMe(id);
    });

    socket.on("callUser", (data) => {
      setReceivingCall(true);
      setCaller(data.from);
      setCallerName(data.name);
      setCallerSignal(data.signal);
    });

<<<<<<< HEAD
    socket.on("endCall", leaveCall);
=======
    socket.on('endCall', leaveCall);

	}, [])


	socket.on("get_user", (id) => {
		if(id !== user.id)
			callUser(room_id);
	});
>>>>>>> 3a43ab321d4ee7335308995a06515f2eff21995c

    window.addEventListener("beforeunload", function (e) {
      e.preventDefault();
      leaveCall();
    });
  }, []);

  socket.on("get_user", (id) => {
    if (id !== user.id) callUser(room_id);
  });

  return (
    <div className="flex justify-around">
      <div className="w-full lg:pl-20">
        <div className="video-container flex justify-around items-end">
          <div
            className="relative text-gray-xlight bg-gray-dark"
            style={{ margin: "20px" }}
          >
            <h3 className="absolute left-0 bottom-0 px-2 bg-gray-dark/50">
              {user.firstname + " " + user.lastname}
            </h3>
            <video
              playsInline
              muted
              ref={myVideo}
              autoPlay
              style={{
                width: "300px",
                height: "150px",
                border: "grey solid 1px",
              }}
            />
          </div>
          <div
            className="relative bg-gray-dark text-center"
            style={{
              border: "grey solid 1px",
              margin: "20px",
              width: "1100px",
              height: "500px",
            }}
          >
            {callAccepted ? (
              <>
                <h3 className="absolute left-0 bottom-0 px-2 bg-gray-dark/50 text-gray-xlight">
                  {callerName}
                </h3>
                <video
                  playsInline
                  ref={userVideo}
                  autoPlay
                  style={{ width: "1100px", height: "500px" }}
                />
              </>
            ) : (
              <p className="text-gray-xlight my-auto">
                Waiting for participant...
              </p>
            )}
          </div>
        </div>

        <div className="w-full flex justify-center">
          {callAccepted ? (
            <button
              className="bg-font-red rounded-md text-gray-xlight py-2 px-5 max-w-fit max-w-fit mt-10"
              variant="contained"
              color="secondary"
              onClick={leaveCall}
            >
              End Call
            </button>
          ) : null}
        </div>

        <div className="w-full flex justify-center">
          {receivingCall && !callAccepted ? (
            <div className="flex flex-col items-center justify-around max-w-fit">
              <h1 className="my-5 text-xl">
                {callerName} is waiting for a video call...
              </h1>
              <button
                className="bg-prpl-button rounded-md text-gray-xlight py-2 px-5 max-w-fit"
                onClick={answerCall}
              >
                Accept
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default VideoCallComponent;
