import axios from "axios";

export default function handler(req, res) {
  const { email } = req.body;

  axios
    .patch("http://localhost:7000/auth/forgot", { email})
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((error) => {
      res.status(400).json({ message: error.response.data });
    });
}
