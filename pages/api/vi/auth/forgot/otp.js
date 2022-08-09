import axios from "axios";

export default function handler(req, res) {
  const { forgotPassword } = req.body;

  axios
    .post("http://localhost:7000/auth/code", { forgotPassword })
    .then((response) => {
      res.status(200).json({ message: response.statusText });
    })
    .catch((error) => {
      res.status(400).json({ message: error.response.data });
    });
}
