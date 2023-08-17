import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import {
  FaHome,
  FaUsers,
  FaUserFriends,
  FaChevronRight,
  FaChevronDown,
} from "react-icons/fa";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const SidebarLink = ({ to, icon, label, onClick, isOpen }) => {
  return (
    <div className="sidebar-link" onClick={onClick}>
      {icon}
      {label}
      {isOpen ? (
        <FaChevronDown className="arrow-icon" />
      ) : (
        <FaChevronRight className="arrow-icon" />
      )}
    </div>
  );
};

const Dropdown = () => {
  return (
    <div className="dropdown">
      <ul>
        <li>
          <Link to="/dashboard/link1">Link 1</Link>
        </li>
        <li>
          <Link to="/dashboard/link2">Link 2</Link>
        </li>
      </ul>
    </div>
  );
};

const Sidebar = () => {
  const [showDashboardDropdown, setShowDashboardDropdown] = useState(false);

  const toggleDashboardDropdown = () => {
    setShowDashboardDropdown(!showDashboardDropdown);
  };

  return (
    <div className="sidebar">
      <SidebarLink
        icon={<FaHome />}
        label="Notícias"
        onClick={toggleDashboardDropdown}
        isOpen={showDashboardDropdown}
      />
      {showDashboardDropdown && <Dropdown />}
      <SidebarLink to="/management" icon={<FaUsers />} label="Management" />
      <SidebarLink to="/teams" icon={<FaUserFriends />} label="Teams" />
    </div>
  );
};

const Noticias = () => {
  return <h2>Noticias Content</h2>;
};

const DashboardLink1 = () => {
  return <h2>Noticias Link 1 Content</h2>;
};

const DashboardLink2 = () => {
  return <h2>Noticias Link 2 Content</h2>;
};

const Management = () => {
  return <h2>Management Content</h2>;
};

const Teams = () => {
  return <h2>Teams Content</h2>;
};

function App() {
  return (
    <Router>
      <Container fluid className="app-container">
        <Row>
          <Col xs={2} className="p-0">
            <Sidebar />
          </Col>
          <Col xs={10}>
            <Routes>
              <Route path="/" element={<Noticias />} />
              <Route path="/dashboard/link1" element={<DashboardLink1 />} />
              <Route path="/dashboard/link2" element={<DashboardLink2 />} />
              <Route path="/management" element={<Management />} />
              <Route path="/teams" element={<Teams />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
