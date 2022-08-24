import axios from "axios";

export default function handler(req, res) {
    const body  = req.body;    
    axios
      .post("https://expressjs-firebase-nodemailer.herokuapp.com/post",{body})
      .then((response) => {
        res.status(200).json(response.data);
      })
      .catch((error) => {
        res.status(400).json({ message: error.code });
      });
  }
  