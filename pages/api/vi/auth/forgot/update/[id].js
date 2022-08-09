import axios from "axios";

export default function handler(req, res) {
  const { id } = req.query;
  const {password, confPassword} = req.body;
  if(password !== confPassword) return  res.status(400).json({ message: "Password mismatch" });
  axios
    .patch(`http://localhost:7000/auth/update/${id}`, {
        password: password,
        confPassword: confPassword,
    })
    .then((response) => {
        res.status(200).json({message: response.statusText});
    })
    .catch((error) => {
      res.status(400).json({ message: error.code });
    });
}
