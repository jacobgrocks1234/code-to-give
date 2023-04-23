import Topbar from "../Topbar";
import "./Alumni.css";
import AlumniTile from "../AlumniTile";
import AlumniSearch from "../AlumniSearch";
import { Divider } from "@mui/material";
import { Grid } from "@mui/material";

export default function Alumni() {
  return (
    <div className="Alumni">
      <div className="chat-top">
        <p className="chat-top-p">Alumni</p>
        <Topbar />
      </div>
      <AlumniSearch />
      <Divider />
      <div className="alumni-profile-container">
        <Grid container>
          <Grid item xs={3}>
            <AlumniTile img_url="https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561__480.png" />
          </Grid>
          <Grid item xs={3}>
            <AlumniTile img_url="https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561__480.png" />
          </Grid>
          <Grid item xs={3}>
            <AlumniTile img_url="https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561__480.png" />
          </Grid>
          <Grid item xs={3}>
            <AlumniTile img_url="https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561__480.png" />
          </Grid>
          <Grid item xs={3}>
            <AlumniTile img_url="https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561__480.png" />
          </Grid>
          <Grid item xs={3}>
            <AlumniTile img_url="https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561__480.png" />
          </Grid>
          <Grid item xs={3}>
            <AlumniTile img_url="https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561__480.png" />
          </Grid>
          <Grid item xs={3}>
            <AlumniTile img_url="https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561__480.png" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
