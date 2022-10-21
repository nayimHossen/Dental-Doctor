import { Outlet, Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import useAdmin from "../../hooks/useAdmin";
import auth from "../../firebase.init";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <section className="bg-[#F7FAFD] border-t-2">
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content p-2">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary ">
              Dental Dashboard{" "}
            </h2>
            <label htmlFor="dashboard-drawer" className="lg:hidden">
              <svg
                className="swap-off"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>
            </label>
          </div>
          <Outlet />
        </div>

        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-[70%] sm:w-48 bg-base-200 text-accent h-full">
            <li>
              <Link to="/dashboard">Appointments</Link>
            </li>
            <li>
              <Link to="/dashboard/review">Review</Link>
            </li>
            {admin && (
              <li>
                <Link to="/dashboard/users">All User</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
