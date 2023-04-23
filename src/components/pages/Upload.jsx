import Topbar from "../Topbar";
import "./Upload.css";

export default function Upload() {
  return (
    <div className="Upload">
      <div className="chat-top">
        <p className="chat-top-p">File upload</p>
        <Topbar />
      </div>
      <div className="upload-container">
        <h3>
          Upload your documents <span>in JPEG, ZIP or PDF.</span>
        </h3>
        <div className="drag">
          <i class="fa-solid fa-cloud-arrow-up"></i>
          <p>
            Drag files here <span>or click to browse(4 MB max)</span>
          </p>
        </div>
      </div>
    </div>
  );
}
