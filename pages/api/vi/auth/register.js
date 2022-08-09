import axios from "axios";

export default function handler(req, res) {
  const { name, email, phoneNumber, password, confPassword } = req.body;
  axios
    .post("http://localhost:7000/auth", {name, email, phoneNumber, password, confPassword})
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((error) => {
        res.status(400).json({ message: error.response.data });
    });
}
