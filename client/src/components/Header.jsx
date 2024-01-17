import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../userContext";

function Header() {
  const { setuserInfo,userInfo } = Context();

  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setuserInfo(userInfo);
      });
    });
  }, []);
  function logout(params) {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });

    setuserInfo(null);
  }
  const username=userInfo?.username
  return (
    <header className=" flex flex-col items-center md:flex-row 
    md:justify-between  mb-12 md:items-center">
      <Link to="/" className=" font-bold text-3xl mb-6 md:mb-0">
        myblog
      </Link>
      <nav className=" space-x-4">
        {username ? (
          <>
          <span>{username}</span>
            <Link to={"/create"}> Create a new post</Link>
            <a onClick={logout}>Logout</a>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">register</Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
