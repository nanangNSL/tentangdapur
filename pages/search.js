/* eslint-disable react-hooks/rules-of-hooks */
import Style from "../styles/pages/Home.module.css";
import React ,{useState} from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import Axios from "axios";
import ReactPaginate from "react-paginate";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { useSelector } from "react-redux";
import Head from "next/head";
import Image from "next/image";

export default function HomeLogin() {
  const { search } = useSelector((state) => state);
  let value;
  if (search === null) {
    return (value = "");
  } else {
    value = search.keywords;
  }

  const [query, setQuery] = useState(value ? value.keywords : "");
  const [keyword, setKeyword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
 const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(4);
  const [pages, setPages] = useState(0);
  const [rows, setRows] = useState(0);
  const [result, setResult] = useState([]);
  const [msg, setMsg] = useState();

  React.useEffect(() => {
    getData();
  },[page, keyword]);

 
  const changePage = ({ selected }) => {
    setPage(selected);
    if (selected === 9) {
      setMsg(
        "Jika tidak menemukan data yang Anda cari, silahkan cari data dengan kata kunci spesifik!"
      );
    } else {
      setMsg("");
    }
  };
  console.log('ini page', page)

  const getData = () => {
    setIsLoading(true);
    setTimeout(() => {
      Axios.get(
        `https://expressjs-firebase-nodemailer.herokuapp.com/search?q=${query}&page=${page}&limit=${limit}`
      )
        .then((response) => {
          console.log(response)
          setResult(response.data.result);
          setPage(response.data.page);
          setPages(response.data.totalPage);
          setRows(response.data.totalRows);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 3000);
  };


  const handleFind = (e) => {
    e.preventDefault();
    setPage(0);
    setMsg("");
    setKeyword(query);
  };

  return (
    <>
      <Head>
        <title>Find</title>
      </Head>
      <div className={Style.containerFluid}>
        <div className={Style.container}>
          <nav className="sticky-top position-fixed top-0 start-50 translate-middle navbar-mobile shadow-sm">
            <div className="d-flex">
              <Link className="navbar-brand" href="/">
                <IoChevronBackOutline className="d-inline-block btn-back" />
              </Link>
              <div className="input-group">
                <form onSubmit={handleFind} className=" form-search">
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
                    onSubmit={handleFind}
                  />
                </form>
              </div>
            </div>
          </nav>
          <div>
            <p>{msg}</p>
            <div className="container-search">
              <p className="text-result">
                Recipe search results {rows} Page: {rows ? page + 1 : 0} of{" "}
                {pages}
              </p>

              {isLoading ? (
                <div className="d-flex justify-content-center">
                  <div className="spinner-border text-secondary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : (
                <span>
                  {Array.from(result).map((data) => (
                    <div
                      key={data.id}
                      className="d-flex flex-end  container-mobile shadow-sm  bg-body mt-2 rounded "
                    >
                      <Link className=" class-img " href={`detail/${data.id}`}>
                        <a className="text-decoration-none ">
                          <div className="row row-cols-3 row-pop">
                            <div className="col-sm">
                              <Image
                                src={data.image}
                                width={100}
                                height={80}
                                alt="Images"
                                className=" image-class"
                              />
                            </div>
                            <div className="col-sm-4 ">
                              <div className="title-mobile">
                                <small>{data.title}</small>
                              </div>
                              <div className="footer-title">
                                <small>food, healty</small>
                              </div>
                              <div className="rating-mobile">
                                <AiFillStar />
                                <small>4.7</small>
                              </div>
                            </div>
                            <div className="col-sm  col-end">
                              <AiOutlineLike className="icon" />
                              <BsBookmark className="icon" />
                            </div>
                          </div>
                        </a>
                      </Link>
                    </div>
                  ))}
                </span>
              )}
            </div>
            <ReactPaginate
              previousLabel={"<"}
              nextLabel={">"}
              pageCount={Math.min(10, pages)}
              onPageChange={changePage}
              containerClassName={"pagination "}
              pageLinkClassName={"page-item page-link col-page"}
              previousLinkClassName={"page-item page-link   col-page"}
              nextLinkClassName={"page-item page-link col-page"}
              activeLinkClassName={"page-item active col-pagi"}
              disabledLinkClassName={"page-item disabled"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
