import "./Chat.css";
import Topbar from "../Topbar";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function Chat() {
  return (
    <div className="Chat">
      <div className="chat-top">
        <p className="chat-top-p">Chat</p>
        <Topbar />
      </div>
      <Grid container>
        <Grid item xs={3}>
          <div className="chat-left">
            <div className="wish-coordinator">
              <p>Wish Coordinator</p>
              <Divider />
              <div className="user-item">
                <Avatar
                  alt="Wish coordinator"
                  src="https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561__480.png"
                />
                <div className="onliner-user-text">
                  <p className="online-name">Name Surname</p>
                  <p className="online-title">
                    <i className="fa-solid fa-check-double color-green"></i>{" "}
                    Have a safe flight..
                  </p>
                </div>
              </div>
            </div>
            <Divider />
            <div className="volunters-tab">
              <p>Volunteers appear here</p>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                }}
              >
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      alt="volunteer"
                      src="https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561__480.png"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="How to become an alumni?"
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="var(--pink)"
                        >
                          <i className="fa-solid fa-caret-right"></i> Ali
                          Connors
                        </Typography>
                        {" — You will need to go to the alumni tab and … "}{" "}
                        <Badge badgeContent={1} color="success"></Badge>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      alt="Travis Howard"
                      src="https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561__480.png"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="How to connect with alumni?"
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="var(--pink)"
                        >
                          <i class="fa-solid fa-caret-right"></i> Scott, Alex,
                          Jennifer
                        </Typography>
                        {" — Wish I could come, but I'm out of town this…"}
                        <Badge badgeContent={3} color="success"></Badge>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
              </List>
            </div>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="chat-center">
            <div className="chat-center-top">
              <div className="user-item centered-user">
                <Avatar
                  alt="Wish coordinator"
                  src="https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561__480.png"
                />
                <div className="onliner-user-text">
                  <p className="online-name">Name Surname</p>
                  <p className="center-online">Online</p>
                </div>
                <p className="typing">typing...</p>
                <div className="media-icons">
                  <i class="fa-solid fa-phone"></i>
                  <i className="fa-solid fa-video"></i>
                </div>
              </div>
            </div>
            {/* chat message goes here */}
            <div className="chat-container">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`message ${
                    message.sender === "user" ? "sent" : "received"
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>
            <div className="form-bottom">
              <div className="chat-msg">
                <input type="text" placeholder="Type message..." />
                <i className="fa-solid fa-microphone"></i>
                <i className="fa-solid fa-paper-plane"></i>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="chat-right">
            <h4 className="online-users">Online Users</h4>
            <p className="online-users-p">
              Feel free to ask any of the online volunteers questions if the
              wish coordinator is offline
            </p>
            <div className="online-user-item">
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
                className="white-border"
              >
                <Avatar
                  alt="Volunteer"
                  src="https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561__480.png"
                />
              </StyledBadge>
              <div className="onliner-user-text">
                <p className="online-name">Name Surname</p>
                <p className="online-title">Volunteer</p>
              </div>
            </div>

            <div className="online-user-item">
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
                className="white-border"
              >
                <Avatar
                  alt="Volunteer"
                  src="https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561__480.png"
                />
              </StyledBadge>
              <div className="onliner-user-text">
                <p className="online-name">Name Surname</p>
                <p className="online-title">Volunteer</p>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const messages = [
  { id: 1, text: "Hello", sender: "user" },
  { id: 2, text: "Hi there!", sender: "receiver" },
  {
    id: 3,
    text: "I'm good, had a quick question about how one can join the alumni list.",
    sender: "user",
  },
];
