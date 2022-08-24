import axios from "axios";

export default function handler(req, res) {
  const { email } = req.body;

  axios
    .patch("https://expressjs-firebase-nodemailer.herokuapp.com/auth/forgot", { email})
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((error) => {
      res.status(400).json({ message: error.response.data });
    });
}
