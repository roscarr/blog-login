import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";
function Post({_id, title, sumary, content, cover, createdAt, author }) {
  return (
    <div className=" mb-8 flex flex-col items-center md:flex-row md:space-x-8 md:items-start   ">
      <div>
        <Link to={`/post/${_id}`}>
          <img
            className="image"
            src={"http://localhost:4000/" + cover}
            alt="image"
          />
        </Link>
      </div>
      <div className="  w-5/6 text-center md:text-start">
        <Link to={`/post/${_id}`}>
          <h2 className="title">{title}</h2>
        </Link>
        <p className="info">
          <span>{author.username} </span>
          <span>{formatISO9075(new Date(createdAt))}</span>
        </p>
        <p className="test">{sumary}</p>
      </div>
    </div>
  );
}

export default Post;
