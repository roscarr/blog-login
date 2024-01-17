import { useState } from "react";

import { Navigate, useParams } from "react-router-dom";
import Editor from "../components/Editor";
import { useEffect } from "react";

function EditPost() {
  const { id } = useParams();
  const [title, settitle] = useState("");
  const [sumary, setSumary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [cover, setCover] = useState("");
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`).then((response) =>
      response.json().then(postInfo=>{
        settitle(postInfo.title)
        setSumary(postInfo.sumary)
        setContent(postInfo.content)
      })
    );
  }, []);
  const updatePost =async (e) => {
    e.preventDefault();
    const data=new FormData()
    data.set("title", title);
    data.set("sumary", sumary);
    data.set("content", content);
    data.set('id',id)
    if (files?.[0]) {
      data.set("file", files?.[0]);
    }
    const response=await fetch('http://localhost:4000/post',{
      method:'PUT',
      body:data,
      credentials:'include'
    })
    if (response.ok) {
      
    setRedirect(true)
    }
  };
  if (redirect) {
    return <Navigate to={`/post/${id}`} />;
  }
  return (
    <form onSubmit={updatePost}>
      <input
        type="title"
        placeholder="title"
        className="input"
        value={title}
        onChange={(e) => settitle(e.target.value)}
      />
      <input
        type="summary"
        placeholder="summary"
        className="input"
        value={sumary}
        onChange={(e) => setSumary(e.target.value)}
      />
      <input
        type="file"
        className="input"
        onChange={(e) => setFiles(e.target.files)}
      />
      <Editor value={content} onChange={setContent} />
      <button className="w-full bg-blue-400 rounded-md block py-2 mt-5 ">
        Update Post
      </button>
    </form>
  );
}

export default EditPost;
