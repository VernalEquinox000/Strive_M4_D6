import "./NavBar.css";
import React, { Component } from "react";
import ListMovies from "./ListMovies";
import { FormControl, InputGroup, Dropdown } from "react-bootstrap";
import Carousel from "./Carousel";
export default class NavBar extends Component {
  state = {
    query: "",
  };
  handleSearch = (queryInp) => {
    this.setState({ query: queryInp });
  };

  render() {
    return (
      <div>
        <div bg="dark" variant="dark">
          <div className="container-fluid">
            <div
              className="d-flex justify-content-between"
              id="main"
              style={{ alignItems: "center" }}
            >
              <div className="d-flex">
                <div href="#home">
                  <a className="navbar-brand" href="#home">
                    <img
                      alt="Logo"
                      id="logo"
                      className="netflix-logo mb-2 mr-2"
                      src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                      style={{ width: "6rem" }}
                    />
                  </a>
                </div>
                <div className="d-flex nav-items">
                  <a href="#home">Home</a>
                  <a href="#features">TV Showes</a>
                  <a href="#pricing">Movies</a>
                  <a href="#pricing">Recently Added</a>
                  <a href="#pricing">My List</a>
                </div>
              </div>
              <div className="d-flex right-side">
                <svg
                  width="2em"
                  height="2em"
                  viewBox="0 0 16 16"
                  className="bi bi-search"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                  />
                </svg>
                <InputGroup>
                  <FormControl
                    placeholder="Search"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    className="inpu"
                    onChange={(e) => this.handleSearch(e.target.value)}
                  />
                </InputGroup>
                <svg
                  width="2em"
                  height="2em"
                  viewBox="0 0 16 16"
                  className="bi bi-bell-fill"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                </svg>

                <Dropdown id="drop">
                  <Dropdown.Toggle variant="dark" id="dropdown-basic">
                    <svg
                      width="1rem"
                      height="1rem"
                      viewBox="0 0 16 16"
                      className="bi bi-file-person-fill"
                      fill="white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-1 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm-3 4c2.623 0 4.146.826 5 1.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1.245C3.854 11.825 5.377 11 8 11z"
                      />
                    </svg>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
        <Carousel />
        <ListMovies query={this.state.query} />
      </div>
    );
  }
}
