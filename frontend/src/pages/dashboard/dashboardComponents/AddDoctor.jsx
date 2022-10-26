import React from "react";
import { useForm } from "react-hook-form";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const imageStorageky = "17cff9a2ec79367bea2e84bf7b3aa508";

  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageky}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const image = result.data.display_url;
          const doctor = {
            name: data.name,
            email: data.email,
            phome: data.phone,
            address: data.address,
            specialty: data.specialty,
            image: image,
          };
          console.log(doctor);
        }
      });
  };
  return (
    <section className="w-full container mx-auto">
      <div className="flex justify-center items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full p-5 md:p-10 shadow-lg"
        >
          <div className="flex mb-6 gap-1">
            {/* ..... name input..... */}
            <div className="w-full md:w-1/2 mb-2 md:mb-0">
              <label className="block mb-2">Full Name*</label>
              <input
                type="text"
                placeholder="full name"
                {...register("name", {
                  required: {
                    value: true,
                    message: "name is required",
                  },
                })}
                className="input input-bordered w-full rounded-none"
              />

              <label className="label p-[2px]">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
                {errors.name?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>

            {/* .....email input..... */}
            <div className="w-full md:w-1/2 mb-2 md:mb-0">
              <label className="block mb-2">Email*</label>
              <input
                type="email"
                placeholder="Enter email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "email is required",
                  },
                })}
                className="input input-bordered w-full rounded-none"
              />
              <label className="label p-[2px]">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
          </div>

          {/* ......phone and address input.. */}
          <div className="flex mb-6 gap-1">
            {/* .......phone input..... */}
            <div className="w-full md:w-1/2 mb-2 md:mb-0">
              <label className="block mb-2">Phone*</label>

              <input
                className="input input-bordered w-full rounded-none"
                type="number"
                placeholder="enter phone number"
                {...register("phone", {
                  required: {
                    value: true,
                    message: "phone is required",
                  },
                })}
              />
              <label className="label p-[2px]">
                {errors.phone?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.phone.message}
                  </span>
                )}
                {errors.phone?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.phone.message}
                  </span>
                )}
              </label>
            </div>

            {/* .....addrss input..... */}
            <div className="w-full md:w-1/2 mb-2 md:mb-0">
              <label className="block mb-2">Address*</label>
              <input
                type="text"
                placeholder="address"
                {...register("address", {
                  required: {
                    value: true,
                    message: "address is required",
                  },
                })}
                className="input input-bordered w-full rounded-none"
              />

              <label className="label p-[2px]">
                {errors.address?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.address.message}
                  </span>
                )}
                {errors.address?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.address.message}
                  </span>
                )}
              </label>
            </div>
          </div>

          {/* .......Category and profile image.. */}
          <div className="flex mb-6 gap-1">
            {/* .....category lavel input..... */}
            <div className="w-full md:w-1/2 mb-2 md:mb-0">
              <label className="block mb-2">Specialty*</label>

              <select
                {...register("specialty", {
                  required: {
                    value: true,
                    message: "category is required",
                  },
                })}
                className="select select-bordered w-full rounded-none"
              >
                <option>Cavity Protection</option>
                <option>Teeth Cleaning</option>
                <option>Teeth Orthodontics</option>
                <option>Pediatric Dental</option>
                <option>Cosmetic Dentistry</option>
                <option>Oral Surgery</option>
              </select>

              <label className="label p-[2px]">
                {errors.specialty?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.specialty.message}
                  </span>
                )}
                {errors.specialty?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.specialty.message}
                  </span>
                )}
              </label>
            </div>

            {/* .....profile image file input..... */}
            <div className="w-full md:w-1/2 mb-2 md:mb-0">
              <label className="block mb-2">profile image*:</label>
              <input
                className="w-full"
                type="file"
                {...register("image", {
                  required: {
                    value: true,
                    message: "profile is required",
                  },
                })}
              />
              <label className="label p-[2px]">
                {errors.pImage?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.pImage.message}
                  </span>
                )}
                {errors.pImage?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.pImage.message}
                  </span>
                )}
              </label>
            </div>
          </div>

          <input
            className="btn btn-primary hover:bg-accent w-full text-white rounded-none hover:shadow-lg"
            type="submit"
            value="Update"
          />
        </form>
      </div>
    </section>
  );
};

export default AddDoctor;
