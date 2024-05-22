import React, { useState, useEffect } from 'react';
import Navbutton from "./Navbutton"; 
import { Modal, Button, Form } from 'react-bootstrap';
import './Navbar.css';

const Navbar = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showCreateAccountModal, setShowCreateAccountModal] = useState(false);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [shouldLogin, setShouldLogin] = useState(false);
  const [shouldCreateAccount, setShouldCreateAccount] = useState(false);

  const [loginUserName, setLoginUserName] = useState('Login');
  const [createAccount, setCreateAccount] = useState('Create Account');

  useEffect(() => {
    if (shouldLogin) {
      const loginData = {
        username: username,
        password: password,
      };

      fetch('http://localhost:80?api=first', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          alert(data.message);
          if (data.message === 'Login successful') {
            setLoginUserName(username); // Update login user name
            setCreateAccount(''); // Hide create account button
          }
          setShouldLogin(false);
          setShowLoginModal(false);
        })
        .catch((error) => {
          alert(error);
          setShouldLogin(false);
        });
    }
  }, [shouldLogin, username, password]);

  useEffect(() => {
    if (shouldCreateAccount) {
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        setShouldCreateAccount(false);
        return;
      }

      const createData = {
        username: username,
        password: password,
      };

      fetch('http://localhost:80?api=first', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(createData),
})
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          alert(data.message);
          if (data.message === 'Account created successfully') {
            setLoginUserName(username); // Update login user name
            setCreateAccount(''); // Hide create account button
          }
          setShouldCreateAccount(false);
          setShowCreateAccountModal(false);
        })
        .catch((error) => {
          alert(error);
          setShouldCreateAccount(false);
        });
    }
  }, [shouldCreateAccount, username, password, confirmPassword]);

  // Handler for login button click
  const handleLoginClick = () => {
    setShouldLogin(true);
  };

  // Handler for create account button click
  const handleCreateAccountClick = () => {
    setShouldCreateAccount(true);
  };

  // Handler for button clicks
  const handleClick = (name) => {
    if (name === 'Login') {
      setShowLoginModal(true);
    } else if (name === "Create Account") {
      setShowCreateAccountModal(true);
    }
  };

  return (
    <div className="navbar-container">
      {/* Button to trigger login modal */}
      <Navbutton name={loginUserName} onClick={() => handleClick('Login')} />
      <Navbutton name={createAccount} onClick={() => handleClick('Create Account')} />

      {/* Login Modal */}
      <Modal show={showLoginModal} onHide={() => setShowLoginModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowLoginModal(false)}>Cancel</Button>
          <Button variant="primary" onClick={handleLoginClick}>Login</Button>
        </Modal.Footer>
      </Modal>

      {/* Create Account Modal */}
      <Modal show={showCreateAccountModal} onHide={() => setShowCreateAccountModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Create Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowCreateAccountModal(false)}>Cancel</Button>
          <Button variant="primary" onClick={handleCreateAccountClick}>Create Account</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Navbar;
