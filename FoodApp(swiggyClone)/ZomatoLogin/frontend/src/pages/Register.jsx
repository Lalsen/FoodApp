import React from 'react';

const Register = () => {
  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="p-4 rounded shadow-lg bg-warning-subtle">  {/* Light Orange Background */}
        <form>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">User name</label>
            <input type="text" className="form-control" id="username" />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>

          <div className="mb-3">
            <label htmlFor="newPassword" className="form-label">New Password</label>
            <input type="password" className="form-control" id="newPassword" />
          </div>

          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" id="confirmPassword" />
          </div>

          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
