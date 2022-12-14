import { toast } from "react-toastify";

function UserRow({ user, index, refetch }) {
  const { email, role } = user;

  const makeAdmin = () => {
    fetch(`https://dental-doctor.onrender.com/api/v1/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error(`Failed made an admin`);
        }
        return res.json();
      })
      .then((data) => {
        if (data.result.modifiedCount > 0) {
          toast.success(`Successfully made an admin`);
          refetch();
        }
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} className="btn btn-xs">
            Make Admin
          </button>
        )}
      </td>
      <td>
        {role === "user" && <button className="btn btn-xs">Remove User</button>}
      </td>
    </tr>
  );
}

export default UserRow;
