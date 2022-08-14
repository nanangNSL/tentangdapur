import axios from "axios";

export default function handler(req, res) {

  axios
    .post("http://localhost:7000/auth/token")
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((error) => {
      res.status(400).json({ message: error?.response?.data });
    });
}
