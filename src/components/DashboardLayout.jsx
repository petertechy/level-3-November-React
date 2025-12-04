import React from "react";
import { Outlet, Link } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <>
      <div className="col-7">
        <ul className="d-flex gap-5 text-success fw-bold">
          <li>
            <Link className="text-success" to="/dashboard">
             Dashboard
            </Link>
          </li>
          <li>
            <Link className="text-success" to="/dashboard/courses">
              Courses
            </Link>
          </li>
          <li>
            <Link className="text-success" to="/dashboard/settings">
              Settings
            </Link>
          </li>
        </ul>
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default DashboardLayout;
