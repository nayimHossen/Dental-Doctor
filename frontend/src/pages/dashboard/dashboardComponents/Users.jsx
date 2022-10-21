import React from "react";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../shared/Loading";
import { toast } from "react-toastify";
import UserRow from "./UserRow";

const Users = () => {
  const {
    data: users,
    isLoading,
    error,
    refetch,
  } = useQuery(["users"], () =>
    fetch(`https://dental-doctor.onrender.com/api/v1/users`, {
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
      <h1 className="font-bold">Appointments: {users?.user?.length}</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Email</th>
              <th>Make Admin</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {users?.user?.map((data, index) => (
              <UserRow
                key={index}
                user={data}
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

export default Users;
