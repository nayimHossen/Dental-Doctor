import { toast } from "react-toastify";

function DoctorRow({ doctor, index, refetch }) {
  const { name, email, image, specialty } = doctor;

  const deleteDoctor = (email) => {
    fetch(`http://localhost:5000/api/v1/doctor/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success === true) {
          toast.success("Delete success");
          refetch();
        } else {
          toast.error("Delete Failed");
        }
      });
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="avatar">
          <div className="w-8 rounded-full">
            <img src={image} alt="avatar" />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{specialty}</td>
      <td>
        <button onClick={() => deleteDoctor(email)} className="btn btn-xs">
          Delete
        </button>
      </td>
    </tr>
  );
}

export default DoctorRow;
