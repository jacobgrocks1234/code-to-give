import "./Navigation.css";

export default function Navigation() {
  return (
    <div className="Navigation">
      <nav className="side-nav">
        <ul>
          <li>
            <a href="/app" className="nav-active nav-links">
              <i className="fa-solid fa-house"></i> <span>Home</span>
            </a>
          </li>
          <li>
            <a href="/app/todo" className="nav-links">
              <i className="fa-solid fa-list"></i> <span>Todo</span>
            </a>
          </li>
          <li>
            <a href="/app/chat" className="nav-links">
              <i className="fa-solid fa-message"></i> <span>Chat</span>
            </a>
          </li>
          <li>
            <a href="/app/alumni" className="nav-links">
              <i className="fa-solid fa-users"></i> <span>Alumni</span>
            </a>
          </li>
          <li>
            <a href="/app/file-upload" className="nav-links">
              <i className="fa-solid fa-file-arrow-up"></i>{" "}
              <span>File upload</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

// import React, { useState } from "react";
// import "./Navigation.css";

// export default function Navigation() {
//   const [activeLink, setActiveLink] = useState("/app"); // Set the initial active link

//   const handleLinkClick = (link) => {
//     setActiveLink(link);
//   };

//   return (
//     <div className="Navigation">
//       <nav className="side-nav">
//         <ul>
//           <li>
//             <a
//               href="/app"
//               className={`${
//                 activeLink === "/app" ? "nav-active" : ""
//               } nav-links`}
//               onClick={() => handleLinkClick("/app")}
//             >
//               <i class="fa-solid fa-house"></i> <span>Home</span>
//             </a>
//           </li>
//           <li>
//             <a
//               href="/app/todo"
//               className={`${
//                 activeLink === "/app/todo" ? "nav-active" : ""
//               } nav-links`}
//               onClick={() => handleLinkClick("/app/todo")}
//             >
//               <i class="fa-solid fa-list"></i> <span>Todo</span>
//             </a>
//           </li>
//           <li>
//             <a
//               href="/app/chat"
//               className={`${
//                 activeLink === "/app/chat" ? "nav-active" : ""
//               } nav-links`}
//               onClick={() => handleLinkClick("/app/chat")}
//             >
//               <i class="fa-solid fa-message"></i> <span>Chat</span>
//             </a>
//           </li>
//           <li>
//             <a
//               href="/app/alumni"
//               className={`${
//                 activeLink === "/app/alumni" ? "nav-active" : ""
//               } nav-links`}
//               onClick={() => handleLinkClick("/app/alumni")}
//             >
//               <i class="fa-solid fa-users"></i> <span>Alumni</span>
//             </a>
//           </li>
//           <li>
//             <a
//               href="/app/contacts"
//               className={`${
//                 activeLink === "/app/contacts" ? "nav-active" : ""
//               } nav-links`}
//               onClick={() => handleLinkClick("/app/contacts")}
//             >
//               <i class="fa-solid fa-address-book"></i> <span>Contact</span>
//             </a>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// }
