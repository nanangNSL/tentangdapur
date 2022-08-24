import axios from "axios";

export default function handler(req, res) {

  axios
    .post("https://expressjs-firebase-nodemailer.herokuapp.com/auth/token")
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((error) => {
      res.status(400).json({ message: error?.response?.data });
    });
}
