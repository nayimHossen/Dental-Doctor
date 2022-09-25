import React from "react";

const Service = ({ service }) => {
  const { name, slots } = service;
  return (
    <div className="card bg-base-100 shadow-lg border-2">
      <div className="card-body items-center text-center">
        <h2 className="text-2xl font-bold text-accent">{name}</h2>
        <p>
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <sapn className="text-warning text-sm font-bold">
              Try Anather Day
            </sapn>
          )}
        </p>
        <p className="font-bold text-accent">
          {slots.length} {slots.length > 1 ? "Spaces" : "Space"} Available
        </p>
        <div className="card-actions justify-end">
          <button
            disabled={slots.length === 0}
            className="btn text-base-100 uppercase font-bold bg-gradient-to-r from-accent to-primary"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
