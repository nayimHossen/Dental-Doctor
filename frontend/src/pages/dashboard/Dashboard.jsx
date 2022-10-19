import { Outlet, Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <section className="bg-[#F7FAFD]">
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className="flex">
            <h2 className="text-3xl font-bold text-primary">
              Dental Dashboard{" "}
            </h2>
            <label
              htmlFor="my-drawer-2"
              className="btn drawer-button lg:hidden"
            >
              Menu
            </label>
          </div>
          <Outlet />
        </div>

        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-[70%] sm:w-48 bg-base-200 text-accent h-full">
            <li>
              <Link to="/dashboard">Appointments</Link>
            </li>
            <li>
              <Link to="/dashboard/review">Review</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
