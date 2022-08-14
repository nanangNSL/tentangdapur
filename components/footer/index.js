import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai"
export default function Footer() {
  return (
    <div className="card text-center card-footer mt-3">
      <div className="card-body">
        <h5 className="card-title">Eat, Cook, Repeat</h5>
        <p className="card-text">
        Share your best recipe by uploading here !
        </p>
      </div>
      <div><AiFillGithub/> nanangsl | <AiOutlineTwitter/> @YoungCraft_id</div>
      <div className="card-footer text-muted">Jelajah & Temukan</div>
    </div>
  );
}
