import Topbar from "../Topbar";
import "./Todo.css";
import { Grid } from "@mui/material";
import { Divider } from "@mui/material";

export default function Todo() {
  return (
    <div className="Todo">
      <div className="chat-top">
        <p className="chat-top-p">Todo</p>
        <Topbar />
      </div>
      <div className="todo-container">
        <Grid container>
          <Grid item xs={3}>
            <div className="todo-column">
              <h3>Todo (3)</h3>
              <Divider />
              <div className="todo-item">
                <img
                  src="https://cdn.pixabay.com/photo/2013/07/12/19/03/id-154285_1280.png"
                  alt="todo"
                />

                <p className="due">
                  Verify identification
                  <span>
                    <i className="fa-solid fa-clock"></i> Tue 25 May 2023
                  </span>
                </p>
                <i className="fa-solid fa-arrow-right c-yellow"></i>
              </div>
              <Divider />
              <div className="todo-item">
                <img
                  src="https://cdn.pixabay.com/photo/2013/07/12/19/03/id-154285_1280.png"
                  alt="todo"
                />

                <p className="due">
                  Verify identification
                  <span>
                    <i className="fa-solid fa-clock"></i> Tue 25 May 2023
                  </span>
                </p>
                <i className="fa-solid fa-arrow-right c-yellow"></i>
              </div>
              <Divider />
              <div className="todo-item">
                <img
                  src="https://cdn.pixabay.com/photo/2013/07/12/19/03/id-154285_1280.png"
                  alt="todo"
                />

                <p className="due">
                  Verify identification
                  <span>
                    <i className="fa-solid fa-clock"></i> Tue 25 May 2023
                  </span>
                </p>
                <i className="fa-solid fa-arrow-right c-yellow"></i>
              </div>
              <Divider />
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="todo-column">
              <h3>Doing(0)</h3>
              <Divider />
              <p className="nothing">Nothing at this stage yet.</p>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="todo-column">
              <h3>In review(2)</h3>
              <Divider />
              <div className="todo-item">
                <img
                  src="https://cdn.pixabay.com/photo/2013/07/12/19/03/id-154285_1280.png"
                  alt="todo"
                />

                <p className="due">
                  Verify identification
                  <span>
                    <i className="fa-solid fa-clock"></i> Tue 25 May 2023
                  </span>
                </p>
                <i className="fa-solid fa-eye c-yellow"></i>
              </div>
              <Divider />
              <div className="todo-item">
                <img
                  src="https://cdn.pixabay.com/photo/2013/07/12/19/03/id-154285_1280.png"
                  alt="todo"
                />

                <p className="due">
                  Verify identification
                  <span>
                    <i className="fa-solid fa-clock"></i> Tue 25 May 2023
                  </span>
                </p>
                <i className="fa-solid fa-eye c-yellow"></i>
              </div>
              <Divider />
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="todo-column">
              <h3>Completed (1)</h3>
              <Divider />
              <div className="todo-item">
                <img
                  src="https://cdn.pixabay.com/photo/2013/07/12/19/03/id-154285_1280.png"
                  alt="todo"
                />

                <p className="due">
                  Verify identification
                  <span>
                    <i className="fa-solid fa-clock"></i> Tue 25 May 2023
                  </span>
                </p>
                <i className="fa-solid fa-circle-check c-green"></i>
              </div>
              <Divider />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
