import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "@tanstack/react-query";
import auth from "../../../firebase.init";
import Loading from "../../shared/Loading";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

function MyAppointments() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const {
    data: appointment,
    isLoading,
    error,
  } = useQuery(["appointment", user], () =>
    fetch(`http://localhost:5000/api/v1/bookings?patient=${user?.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      if (res.status === 401 || res.status === 403) {
        signOut(auth);
        localStorage.removeItem("accessToken");
        navigate("/");
      }
      return res.json();
    })
  );

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    toast.error(error);
  }
  return (
    <div>
      <h1 className="font-bold">
        Appointments: {appointment?.bookings?.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Treatment</th>
            </tr>
          </thead>
          <tbody>
            {appointment?.bookings?.map((a, i) => (
              <tr>
                <th>{i + 1}</th>
                <td>{a.treatmentName}</td>
                <td>{a.appointmentDate}</td>
                <td>{a.timeSlot}</td>
                <td>{a.treatmentName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyAppointments;
