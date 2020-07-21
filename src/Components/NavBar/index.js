import React from 'react';
import { Button, Navbar} from 'react-bootstrap';

export default function NavBar () {

    return (
        <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
        React Bootstrap
      </Navbar.Brand>
        </Navbar>
      </>
    );


}

