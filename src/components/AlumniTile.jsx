import "./AlumniTile.css";
import { Avatar } from "@mui/material";

export default function AlumniTile({ img_url }) {
  return (
    <div className="AlumniTile">
      <div className="profile-avatar">
        <Avatar alt="Alumni" src={img_url} sx={{ width: 60, height: 60 }} />
      </div>
      <div className="alumni-info">
        <p className="alumni-name">John Doe</p>
        <p className="alumni-loc">New York</p>
        <p className="alumni-email">johndoe@gmail.com</p>
        <button className="chat">Chat</button>
      </div>
      <div className="alumni-icons">
        <i className="fa-solid fa-heart"></i>
        <i className="fa-solid fa-bookmark ml-2"></i>
      </div>
    </div>
  );
}
