import axios from "axios";

export default function handler(req, res) {
    const body  = req.body;
    console.log(body);
    
    axios
      .post("http://localhost:7000/post",{body})
      .then((response) => {
        res.status(200).json(response.data);
      })
      .catch((error) => {
        res.status(400).json({ message: error.code });
      });
  }
  