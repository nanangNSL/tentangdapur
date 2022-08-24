import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image"

function Chat({ socket, username, room }) {
	const [currentMessage, setCurrentMessage] = useState("");
	const [messageList, setMessageList] = useState([]);
	const empety = false;

	const sendMessage = async () => {
		if (currentMessage !== "") {
			const Room = room;
			const times = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
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

	useEffect(() => {
		socket.on("receive_message", (data) => {
			setMessageList((list) => [...list, data]);
		});
	}, [socket]);

	return (
		<section className={styles.chat}>
			<Container fluid>
				<Row className={styles.containerchat}>
					<Col lg="4" className="md-4 d-none d-md-block">
						<div className={styles.chat_left}>
							<div className={styles.chat_title}>
								<h5>Chat</h5>
							</div>
							<hr />
							{empety ? (
								<div
									className="d-flex flex-column justify-content-center align-items-center h-75"
									style={{ gap: "20px" }}
								>
									<Image src={send} alt="No Chat" />
									<h5 className="fw-bold">Belum ada chat</h5>
								</div>
							) : (
								<div className="overflow-auto">
									<Row className="w-100 d-flex align-items-center">
										<Col lg="3" className="md-4">
											<div className="d-flex justify-content-center ms-1">
												<Image src={user} className="Image-cover rounded-circle" alt="Test" />
											</div>
										</Col>
										<Col lg="9" className="md-8 flex flex-column justify-content-center" style={{ textAlign: "left" }}>
											<p className={`${styles.sender} mb-0`}>Jonas adam</p>
											<small className="text-secondary"> Permisi kak, mau tanya...</small>
										</Col>
									</Row>
								</div>
							)}
						</div>
					</Col>

					<Col lg="8" className="md-8">
						<div className={styles.chat_right}>
							<div className={styles.chat_header}>
								{empety ? (
									<div>not message</div>
								) : (
									<div>
										<Row>
											<Col lg="4">
												<Image src={user} width={40} height={40} alt="Test" />
											</Col>
											<Col lg="8">
												<h5>Jonas adam</h5>
											</Col>
										</Row>
									</div>
								)}
							</div>

							<hr />
							{empety ? (
								<div className="d-flex justify-content-center align-items-center h-75">
									<h5 className={styles.chat_nochat}>Please select a chat to start messaging</h5>
								</div>
							) : (
								<ScrollToBottom className="message-container">
									{messageList.map((messageContent) => {
										return (
											<div key={messageContent.id}>
												<div className="message" id={username === messageContent.author ? "you" : "other"}>
												<div className="message-content">
													<div>
														<p>{messageContent.message}</p>
													</div>
													<div className="message-meta">
														<small id="time">{messageContent.time}</small>
														<small id="author">{messageContent.author}</small>
													</div>
												</div>
											</div>
											</div>
											
										);
									})}
								</ScrollToBottom>
							)}
							<form action="" className={styles.formaction}>
								<div>
									<input
										type="text"
										value={currentMessage}
										placeholder=" Write here . . ."
										onChange={(event) => {
											setCurrentMessage(event.target.value);
										}}
										onKeyPress={(event) => event.key === "Enter" && sendMessage()}
									/>
									<button type="button" onClick={sendMessage}>
										<Image src={send} alt="Send Message" />
									</button>
								</div>
							</form>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
}

export default Chat;