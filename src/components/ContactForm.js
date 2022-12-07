import React from "react";
import { useForm } from "react-hook-form";

function ContactForm({formSub}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSub = (data) => {
    data.id = Date.now()
    data.fav = false;
    formSub(data);
    // console.log(data);
    reset();
  };

  return (
    <div className="col-md-4 shadow p-3 mb-5 bg-body rounded mt-3">
      <form onSubmit={handleSubmit(onSub)}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputname"
            aria-describedby="nameHelp"
            {...register("name", {
              // pattern: {
              //   value: /[A-Za-z]{3}/,
              //   message: 'error message' // JS only: <p>error message</p> TS only support string
              // },
              required: "Name is required", // JS only: <p>error message</p> TS only support string
            })}
          />
          {errors.name && (<small className="text-danger">{errors.name.message}</small>)}
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            {...register("email", {
              required: "email is required", // JS only: <p>error message</p> TS only support string
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <small className="text-danger">{errors.email.message}</small>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input
            type="phone"
            className="form-control"
            id="exampleInputPhone"
            aria-describedby="PhoneHelp"
            {...register("phone", {
              required: "phone is required", // JS only: <p>error message</p> TS only support string
              pattern: {
                value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                message: "Invalid phone no",
              },
            })}
          />
          {errors.phone && (
            <small className="text-danger">{errors.phone.message}</small>
          )}
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Add
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
