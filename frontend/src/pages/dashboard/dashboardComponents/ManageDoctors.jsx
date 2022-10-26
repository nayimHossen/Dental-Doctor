import React from "react";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../shared/Loading";
import { toast } from "react-toastify";
import DoctorRow from "./DoctorRow";

const ManageDoctors = () => {
  const {
    data: doctors,
    isLoading,
    error,
    refetch,
  } = useQuery(["doctors"], () =>
    fetch(`http://localhost:5000/api/v1/doctors`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    toast.error(error);
  }
  return (
    <div>
      <h1 className="font-bold">Manage Doctors: {doctors?.doctors?.length}</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors?.doctors?.map((data, index) => (
              <DoctorRow
                key={index}
                doctor={data}
                index={index}
                refetch={refetch}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDoctors;
