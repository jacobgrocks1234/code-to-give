import "./AlumniSearch.css";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

export default function AlumniSearch() {
  return (
    <div className="AlumniSearch">
      <div className="search-container">
        <div className="search-bar">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="search" name="search" id="search" placeholder="Search" />
        </div>
      </div>
      <div className="location-container">
        <div className="search-bar">
          <i class="fa-solid fa-location-dot"></i>
          <input
            type="search"
            name="location"
            id="location"
            placeholder="Location"
          />
        </div>
      </div>
      <Tooltip title="People you've bookmarked" arrow>
        <Button sx={{ textAlign: "center" }}>
          <i className="fa-solid fa-bookmark ml-2"></i>
        </Button>
      </Tooltip>
      <Tooltip title="People you've contacted" arrow>
        <Button>
          <i class="fa-solid fa-comments ml-2"></i>
        </Button>
      </Tooltip>
      <button className="search-btn">Filter</button>
    </div>
  );
}
