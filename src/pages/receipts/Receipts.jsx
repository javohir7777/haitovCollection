import { useState } from "react";
// import { requies } from "../../server";
import "./Receipts.css";

const Receipts = () => {
  // const [file, setFile] = useState({ material_rasmi: null });

  // const handleFileChange = (e) => {
  //   setFile(e.target.files[0]);
  // };

  // const handleUpload = async () => {
  //   const formData = new FormData();
  //   formData.append("image", file);

  //   try {
  //     const response = await requies.post("upload", formData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     });
  //     console.log("Upload successful:", response.data);
  //   } catch (error) {
  //     console.error("Upload failed:", error);
  //   }
  // };
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };
  console.log(fileName);

  return (
    <div className="upload-container">
      <label htmlFor="file-upload" className="custom-file-upload">
        <svg
          className="file-svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 12V3.85L4.4 6.45L3 5L8 0L13 5L11.6 6.45L9 3.85V12H7ZM2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V11H2V14H14V11H16V14C16 14.55 15.8042 15.0208 15.4125 15.4125C15.0208 15.8042 14.55 16 14 16H2Z"
            fill="#49454F"
          />
        </svg>
      </label>
      <input id="file-upload" type="file" onChange={handleFileChange} />
      {fileName && <p>Uploaded file: {fileName}</p>}
    </div>
  );
};

export default Receipts;
