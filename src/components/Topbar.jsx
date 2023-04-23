import logo from "/src/assets/images/logo.svg";
import Badge from "@mui/material/Badge";
import "./Topbar.css";

export default function Topbar() {
  return (
    <div className="Topbar">
      <img src={logo} alt="make a wish logo" className="make-logo" />
      <div className="topbar-icons">
        <div className="square--icons">
          <Badge badgeContent={4} color="error">
            <i class="fa-solid fa-bell"></i>
          </Badge>
        </div>
        <div className="square--icons">
          <i class="fa-solid fa-gear"></i>
        </div>
        <div className="square--icons">
          <i class="fa-solid fa-user"></i>
        </div>
      </div>
    </div>
  );
}
