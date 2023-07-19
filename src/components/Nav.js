import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navigation = styled.header`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 100px 0px;
  height: 60px;
  background: #ffffff;

  .app-header {
  border-bottom: 1px solid rgb(106, 106, 106);
  display: flex;
  height: 50px;
  justify-content: center;
  align-items: center;
  }

  .app-header-logo {
    display: block;
    height: 44px;
  }
  .nav {
    display: flex;

    ul {
      display: flex;

      li {
        padding: 0px 15px;
        color: #333;
        font-family: 'Poppins', sans-serif;
      }

      a {
        text-decoration: none;
      }
    }
  }

  a.active {
    border-bottom: 3px solid #e6e6e6;
    padding-bottom: 0.3em;
  }
  .fa-bars {
    display: none;
  }

  @media only screen and (max-width: 580px) {
    height: auto;
    min-height: 100px;
    justify-content: center;
    flex-direction: column;
    padding-top: 1em;

    .nav {
      text-align: center;
    }

    .fa-bars {
      display: inline-block;
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
    }

    ul.collapsed {
      margin-top: 1em;
      display: none;
      width: 100vw;

      li {
        border-top: 1px solid #ccc;
        padding: 1em;
        transition: 0.3s;

        &:hover {
          background: #e6e6e6;
        }
      }

      &.is-expanded {
        display: block;
      }
    }
  }
`;

export default function Nav() {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <Navigation>
      <nav className="nav">
        <i
          className="fa fa-bars"
          aria-hidden="true"
          onClick={() => setIsExpanded(!isExpanded)}
        ></i>
        <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
          <NavLink exact activeClassName="active" to="/">
            <li>Home</li>
          </NavLink>
          <NavLink activeClassName="active" to="/Nature">
            <li>Nature</li>
          </NavLink>
          <NavLink activeClassName="active" to="/Restaurant">
            <li>Restaurant</li>
          </NavLink>
          <NavLink activeClassName="active" to="/Temple">
            <li>Temple</li>
          </NavLink>
        </ul>
      </nav>
    </Navigation>
  );
}
