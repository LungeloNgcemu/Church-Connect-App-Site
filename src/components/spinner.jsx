import Spinner from 'react-bootstrap/Spinner';
import React from "react";
//  import 'bootstrap/dist/css/bootstrap.min.css';

export default function LoadingSpinner() {
  return (
    <div className="spinner-container">
      <Spinner animation="border" variant='primary' />
    </div>
  );
}


