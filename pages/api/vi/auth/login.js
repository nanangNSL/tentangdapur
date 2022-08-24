import axios from "axios";

export default function handler(req, res) {
  const { email, password } = req.body;

  axios
    .post("https://expressjs-firebase-nodemailer.herokuapp.com/auth/login", { email, password })
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((error) => {
      res.status(400).json({ message: error.code });
    });
}
