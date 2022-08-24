import { useRouter } from "next/router";
import React from "react";
import Axios from "axios";
import io from "socket.io-client";
import { useSelector } from "react-redux";
import { decode } from "jsonwebtoken";
import { IoArrowBack } from "react-icons/io5";
import { FiSend } from "react-icons/fi";
import Style from "../../styles/pages/Home.module.css";
import ScrollToBottom from "react-scroll-to-bottom";

export default function DetailsRoom() {
  const router = useRouter();
  const socket = io.connect("http://localhost:7000");
  const { auth } = useSelector((state) => state);
  const {
    query: { id },
  } = useRouter();
  const [currentMessage, setCurrentMessage] = React.useState("");
  const [messageList, setMessageList] = React.useState([]);
  const [room, setRoom] = React.useState("");
  const [username, setUser] = React.useState("");

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
    }
  };

  const getRooms = async (req, res) => {
    const data = await Axios.get(`https://expressjs-firebase-nodemailer.herokuapp.com/room/${id}`);
    setRoom(data.data.name);
  };

  const sendMessage = async (e) => {
    if (currentMessage !== "") {
      const Room = room;
      const times = new Date().toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });
      const messageData = {
        room: Room,
        author: username,
        message: currentMessage,
        time: times,
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };
  socket.on("receive_message", (data) => {
    setMessageList((list) => [...list, data]);
  });

  React.useEffect(() => {
    const decodeUser = decode(auth?.token);
    setUser(decodeUser?.name);
    joinRoom();
    getRooms();
  }, [socket]);

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/chat");
  };

  return (
    <>
      <div className={Style.containerFluid}>
        <div className={Style.container}>
          <div className="container-chat">
            <div className="border">
              <h4>
                {" "}
                <IoArrowBack onClick={handleClick} /> {room}
              </h4>
              <hr />
              <div className="d-flex flex-column justify-content-center">
                <div className="room-chat">
                  <ScrollToBottom>
                    {messageList.map((messageContent, key) => {
                      return (
                        <div key={key}
                          id={
                            username === messageContent.author ? "me" : "other"
                          }
                        >
                          <div className="message-buble">
                            <p className="message-title">
                              {messageContent.message}
                            </p>
                          </div>
                          <div className="message-meta">
                            <small id="time">{messageContent.time}</small>
                            <small id="author">
                              {username === messageContent.author
                                ? "you"
                                : messageContent.author}
                            </small>
                          </div>
                        </div>
                      );
                    })}
                  </ScrollToBottom>
                </div>
              </div>
            </div>
          </div>
          <div className="sticky-top  bg-light position-fixed top-100 start-50 translate-middle  navbar-buttom  shadow-sm">
            <form className="form-send-message  navbar-buttom ">
              <input
                type="text"
                value={currentMessage}
                placeholder=" Write here . . ."
                onChange={(event) => {
                  setCurrentMessage(event.target.value);
                }}
                className="input-message rounded"
              />
              <div>
                <button
                  type="button"
                  onClick={sendMessage}
                  className="btn-message rounded"
                >
                  <FiSend />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
