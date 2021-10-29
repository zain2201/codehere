import React, { useState, useRef, useContext } from "react";
import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import { AuthContext, useAuth } from "./../Provider";
import SavedFiles from "components/Notes/SavedFiles";

let ps = null;

export default function ProfilePage() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, logout } = useAuth()
  const valval = useContext(AuthContext);
  const [namaewa, setnamaewa] = useState(valval.currentUser ? valval.currentUser.displayName : null);



  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.body.classList.toggle("profile-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        // ps.destroy();
        document.documentElement.className += " perfect-scrollbar-off";
        document.documentElement.classList.remove("perfect-scrollbar-on");
      }
      document.body.classList.toggle("profile-page");
    };
  }, []);


  async function onFormSubmit(e) {
    e.preventDefault();
    var ev = emailRef.current.value;
    var pv = passwordRef.current.value;

    if (ev === '' || pv === '') {
      alert('Enter details to login!');
    }
    else {
      try {
        setError("")
        setLoading(true)
        await login(ev, pv)
        setnamaewa(valval.currentUser.displayName);
        alert("logged in successfully");
        // console.log(valval)
      } catch {
        setError("Failed to create an account")
      }

      setLoading(false)
    }
  }
  async function handlelogout(e) {
    e.preventDefault();

    try {
      setError("")
      setLoading(true)
      await logout()
      alert("logged out successfully");
      // console.log(valval);
      setnamaewa(null);
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }


  return (
    <>
      <IndexNavbar />
      {
        namaewa === null ?
          <div className="wrapper">
            <section className="section">
              <Container>
                <Row>
                  <Col md="6">
                    <Card className="card-plain">
                      <CardHeader>
                        <h1 className="profile-title text-left">Login</h1>
                        <h5 className="text-on-back">01</h5>
                      </CardHeader>
                      <CardBody>
                        <Form className="form" onSubmit={onFormSubmit}>
                          <Row>
                            <Col md="6">
                              <FormGroup>
                                <label>Email</label>
                                <Input innerRef={emailRef} placeholder="Email" type="email" />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col md="6">
                              <FormGroup>
                                <label>Password</label>
                                <Input innerRef={passwordRef} placeholder="Password" type="text" />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Button
                            className="btn-round float-left"
                            color="primary"
                            data-placement="right"
                            type="submit"
                          >
                            Login
                          </Button>
                        </Form>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </section>
          </div>
          :
          <div className="wrapper">
            <section className="section">
              <Container>
                <Row>
                  <Col>
                    <Card className="card-plain">
                      <CardHeader>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <h1 className="profile-title text-left">{namaewa}</h1>
                          <h5 className="text-on-back">Welcome</h5>
                          <Button
                            className="btn-round float-right"
                            color="primary"
                            data-placement="right"
                            type="button"
                            onClick={handlelogout}
                            style={{ alignSelf: "center" }}
                          >
                            Logout
                          </Button>
                        </div>
                      </CardHeader>
                    </Card>
                  </Col>
                </Row>
              </Container>
              <Container>
                <Row>
                  <Col>
                    <Card className="card-plain">
                      <CardHeader>
                        <SavedFiles/>
                      </CardHeader>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </section>
          </div>
      }
    </>
  );
}
