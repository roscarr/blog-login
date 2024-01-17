import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { useState } from "react";
import { Navigate } from "react-router-dom";
const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};
const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];
function CreatePost() {
  const [title, settitle] = useState("");
  const [sumary, setSumary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false)
  const createNewPost = async(e) => {
    const data = new FormData();
    data.set("title", title);
    data.set("sumary", sumary);
    data.set("content", content);
    data.set("file", files[0]);
 

    e.preventDefault();
    const response= await fetch("http://localhost:4000/post", {
      method: "POST",
      body:data,
      credentials:'include'
    });
    if (response.ok) {
      setRedirect(true)
    }
  };
  if (redirect) {
    return <Navigate to={'/'}/>
  }
  return (
    <form onSubmit={createNewPost}>
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
      <ReactQuill
        theme="snow"
        className=" text-white  bg-[#a5a2a2]"
        value={content}
        modules={modules}
        formats={formats}
        onChange={(newValue) => setContent(newValue)}
      />
      <button className="w-full bg-blue-400 rounded-md block py-2 mt-5 ">
        Create Post
      </button>
    </form>
  );
}

export default CreatePost;
