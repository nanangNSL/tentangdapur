import { FiUser } from "react-icons/fi";

export default function Recipe() {
  return (
    <>
      <div className="container-login">
        <div>
          <h5>Add Your Recipe</h5>
        </div>
        <div className="row-login">
          <form className="form-login">
            <div>

              <input
                type="text"
                className="form-control"
                name="text"
                placeholder="Title"
                required
              />
              <textarea rows="4" cols="50" name="comment" form="usrform">Enter text</textarea>
              <div className="password">
                <input
                  type="file"
                  className="form-control"
                  name="file"
                  placeholder="Input file"
                  required
                />
              </div> <div>
                <button type="submit" className="button-login">
                  Post
                </button>
              </div>{" "}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
