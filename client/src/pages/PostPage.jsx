import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { formatISO9075 } from "date-fns";
import { Context } from "../userContext";

function PostPage() {
  const [postInfo, setPostInfo] = useState(null);
  const { id } = useParams();
  const { userInfo } = Context();
  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo);
      });
    });
    console.log(id);
  }, []);
  if (!postInfo) return "";

  return (
    <div className=" flex flex-col gap-5 items-center">
      <h1 className=" text-3xl font-bold  ">{postInfo.title}</h1>
      <div>
        {userInfo.id === postInfo.author._id && (
          <div className=" text-center mb-4 flex  justify-center">
            <Link to={`/edit/${postInfo._id}`} className=" bg-slate-500  rounded-md flex gap-2 px-8 py-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
              Edit this post
            </Link>
          </div>
        )}
        <time className=" text-xs text-gray-300">
          <span className="text-white">{postInfo.author.username} </span>
          {formatISO9075(new Date(postInfo.createdAt))}
        </time>
        <div className=" max-h-80 overflow-hidden flex ">
          <img
            src={`http://localhost:4000/${postInfo.cover}`}
            alt=""
            className=" object-center object-cover"
          />
        </div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: postInfo.content }} />
    </div>
  );
}

export default PostPage;
