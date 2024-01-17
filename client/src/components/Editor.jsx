import "react-quill/dist/quill.snow.css";

import ReactQuill from "react-quill";
function Editor({value,onChange}) {
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
  return (
    <ReactQuill
    theme="snow"
    className=" text-white  bg-[#a5a2a2]"
    value={value}
    modules={modules}
    onChange={onChange}
  />
  )
}

export default Editor