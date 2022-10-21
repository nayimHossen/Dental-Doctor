function AppointmentRow({ booking, index }) {
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{booking.treatmentName}</td>
      <td>{booking.treatmentName}</td>
      <td>{booking.timeSlot}</td>
      <td>{booking.treatmentName}</td>
    </tr>
  );
}

export default AppointmentRow;
