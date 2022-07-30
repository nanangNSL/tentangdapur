import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai"
export default function Footer() {
  return (
    <div class="card text-center card-footer">
      <div class="card-body">
        <h5 class="card-title">Eat, Cook, Repeat</h5>
        <p class="card-text">
        Share your best recipe by uploading here !
        </p>
      </div>
      <div><AiFillGithub/> nanangsl | <AiOutlineTwitter/> @YoungCraft_id</div>
      <div class="card-footer text-muted">Jelajah & Temukan</div>
    </div>
  );
}
