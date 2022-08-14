import { IoArrowBack } from "react-icons/io5";
import { useRouter } from "next/router";
import React from "react";
import Axios from "axios";
import Link from "next/link";
import Swal from "sweetalert2";

export default function Chat() {
  const router = useRouter();
  const [room, setRoom] = React.useState("");
  const [listRoom, setListRoom] = React.useState("");
  const [isLoading, setLoading] = React.useState(false);

  React.useEffect(() => {
    getRooms();
  },[]);

  const getRooms = async (req, res) => {
    const response = await Axios.get("http://localhost:7000/room");
    setListRoom(response.data);
  };

  const createRoom = (e) => {
    setLoading(true);
    e.preventDefault();
    if (room !== "") {
      Axios.post("http://localhost:7000/room", { name: room })
      .finally(() =>{
        setLoading(false);
        Swal.fire({
          title: 'Refresh your browser',
          text: "Check your room",
          width: 389,
          icon: "success",
        });
      })
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <>
      <div className="container-chat">
        <div>
          <h4>
            {" "}
            <IoArrowBack onClick={handleClick} /> Chat
          </h4>
          <hr />
          <div className="card text-center">
            <div className="card-header">Welcome to the recipe room</div>
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <p>You can join a cooking community or you have an idea to create your own community</p>
              </blockquote>
            </div>
          </div>
          <div className="d-flex flex-rows mt-3">
            <input
              className="form-control-sm"
              type="text"
              placeholder="Room ID..."
              onChange={(event) => {
                setRoom(event.target.value);
              }}
            />
            <button
              type="button"
              className="btn btn-primary"
              onClick={createRoom}
              value={isLoading}
            >
              {isLoading? "Loading...": "Create Room"}
            </button>
          </div>
          <div className="mt-3 rounded p-2 bg-light">
            <div className="col-rooms d-flex flex-wrap bg-light">
              {[...listRoom].map((item, key) => (
                  <div key={key} className="m-1">
                    <Link href={`room/${item.id}`} className="text-decoration-none">
                      <a>
                        <button className="btn btn-rooms">{item.name}</button>
                      </a>
                    </Link>
                  </div>
                ))}
            </div>
                
          </div>
        </div>
      </div>
    </>
  );
}
