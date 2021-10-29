import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

export default function IndexNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [color, setColor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  },[]);
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
    }
  };
  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };
  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };
  const onCollapseExited = () => {
    setCollapseOut("");
  };
  const scrollToDownload = () => {
    document
      .getElementById("download-section")
      .scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand to="/" tag={Link} id="navbar-brand">
            <span>Codehere • </span>
            Code | Sleep | Repeat
          </NavbarBrand>
          <UncontrolledTooltip placement="bottom" target="navbar-brand">
            Designed and Coded by Vedant Gupta
          </UncontrolledTooltip>
          {/* <button
            aria-expanded={collapseOpen}
            className="navbar-toggler navbar-toggler"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button> */}
        </div>
        <Collapse
          className={"justify-content-end " + collapseOut}
          navbar
          isOpen={collapseOpen}
          onExiting={onCollapseExiting}
          onExited={onCollapseExited}
        >
          {/* <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="6">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Vedant
                </a>
              </Col>
              <Col className="collapse-close text-right" xs="6">
                <button
                  aria-expanded={collapseOpen}
                  className="navbar-toggler"
                  onClick={toggleCollapse}
                >
                  <i className="tim-icons icon-simple-remove" />
                </button>
              </Col>
            </Row>
          </div> */}
          <Nav navbar>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://github.com/DevilAeron"
                rel="noopener noreferrer"
                target="_blank"
                title="Follow me on GitHub"
              >
                <i className="fab fa-github" />
                <p className="d-lg-none d-xl-none">GitHub</p>
              </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://www.linkedin.com/in/vedant-gupta-436abb1a1/"
                rel="noopener noreferrer"
                target="_blank"
                title="Connect on LinkedIn"
              >
                <i className="fab fa-linkedin" />
                <p className="d-lg-none d-xl-none">LinkedIn</p>
              </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://www.instagram.com/vedant._.gupta/"
                rel="noopener noreferrer"
                target="_blank"
                title="Follow me on Instagram"
              >
                <i className="fab fa-instagram" />
                <p className="d-lg-none d-xl-none">Instagram</p>
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav>
              <DropdownToggle
                caret
                color="default"
                data-toggle="dropdown"
                href="#pablo"
                nav
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-cogs d-lg-none d-xl-none" />
                Explore
              </DropdownToggle>
              <DropdownMenu className="dropdown-with-icons">
              <DropdownItem tag={Link} to="/compiler-page" style={{color:'black', fontWeight: 600}}>
                  <i className="tim-icons icon-tv-2" />
                  Code Here!
                </DropdownItem>
                <DropdownItem tag={Link} target="_blank" to="/landing-page" style={{color:'black', fontWeight: 600}}>
                  <i className="tim-icons icon-pencil" />
                  Doodle Here!
                </DropdownItem>
                <DropdownItem tag={Link} to="/upcoming-page" style={{color:'black', fontWeight: 600}}>
                  <i className="tim-icons icon-paper" />
                  Upcoming Contests
                </DropdownItem>
                <DropdownItem tag={Link} to="/register-page" style={{color:'black', fontWeight: 600}}>
                  <i className="tim-icons icon-image-02" />
                  Register
                </DropdownItem>
                <DropdownItem tag={Link} to="/profile-page" style={{color:'black', fontWeight: 600}}>
                  <i className="tim-icons icon-single-02" />
                  Profile
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}
