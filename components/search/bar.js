import React from "react";
import { useDispatch, } from "react-redux";
import { useRouter } from "next/router";
import * as Type from "../../redux/search/type";
import Image from "next/image";

export default function BarBrand() {
  const [query, setQuery] = React.useState("");

  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({
      type: Type.SET_QUERY,
      payload: {
        keywords: query,
      },
    });
    router.push("/search");
  };

  return (
    <nav className="sticky-top position-fixed top-0 start-50 translate-middle navbar-mobile shadow-sm">
      <div className="border navbar-brand">
        <div className="row row-cols-1">
          <div className="col d-flex">
              <Image
                src="/logos.png"
                alt="logobrand"
                width={120}
                height={80}
                className="ms-1 image-bar"
              />
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
        </div>
        {/*
         */}
      </div>
    </nav>
  );
}
