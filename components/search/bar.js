import React from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import * as Type from "../../redux/search/type";


export default function BarBrand() {
  const [query ,  setQuery] = React.useState('');
  

  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = async  (e) =>{
    e.preventDefault();
    dispatch({
      type: Type.SET_QUERY,
      payload: {
        keywords: query,
      },
    })
    router.push("/search")
  };


  return (
    <nav className="sticky-top position-fixed top-0 start-50 translate-middle navbar-mobile shadow-sm">
      <div className="d-flex">
        <a className="navbar-brand" href="#">
          <img
            src="/logos.png"
            alt=""
            width="30"
            height="24"
            className="d-inline-block image-bar"
          />
        </a>
        <form className=" form-search" onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control "
            placeholder="Search Pasta, Bread, etc"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={query}
            onChange={(e) => setQuery(e.target.value)}

          />
          <input
            className="input-group-text "
            id="basic-addon2"
            hidden
            type="submit"
          />
        </form>
      </div>
    </nav>
  );
}
