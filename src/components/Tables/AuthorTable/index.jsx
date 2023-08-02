import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { addUser, deleteUser, updateUser } from "../../../redux/action/index";
import { IoIosClose } from "react-icons/io";
import Img from "../../../assets/img/team-1.jpg";

export default () => {
  const [deleted, setDeleted] = useState(false);
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(null);
  const dispatch = useDispatch();
  const handleEdit = (demo) => {
    setOpen(!open);
    setEdit(demo);
  };
  const userData = useSelector((state) => state.userReducer.users);
  useEffect(() => {
    if (edit !== null) {
      userData.map((elem) => {
        if (edit.id == elem.id) {
          console.log(edit, "edit obj");
          formik.setValues({
            author: edit.author,
            email: edit.email,
            status: edit.status,
            type: edit.type,
            job: edit.job,
          });
        }
      });
    } else {
      console.log("Edit is not defined");
    }
  }, [edit]);

  const formik = useFormik({
    initialValues: {
      author: "",
      email: "",
      status: "",
      type: "",
      job: "",
    },
    onSubmit: (values) => {
      if (edit) {
        const payload = {
          id: edit.id,
          img: edit.img,
          employed: edit.employed,
          author: values.author,
          email: values.email,
          status: values.status,
          type: values.type,
          job: values.job,
        };
        setEdit(null);
        dispatch(updateUser(payload));
        formik.resetForm();
      } else {
        const payload = {
          id: Date.now(),
          img: Img,
          employed: "25/01/2019",
          author: values.author,
          email: values.email,
          status: values.status,
          type: values.type,
          job: values.job,
        };
        dispatch(addUser(payload));
      }
      setEdit(null);
      formik.resetForm();
    },
  });
  const handleDelete = (id) => {
    setDeleted(id);
  };
  const billingDelete = () => {
    dispatch(deleteUser(deleted));
    setDeleted(false);
  };

  return (
    <div className="px-[20px] md:px-[40px]">
      <div
        className={`${
          !deleted ? "hidden" : "block"
        } w-full h-full flex justify-center modal_edit items-center absolute md:left-0 top-0`}
      >
        <div>
          <div className="p-[30px] px-[10]  md:px-[70px] bg-[#fff] Shadow rounded-lg">
            <div className="text-[16px] text-center">Are you sure ?</div>
            <div className="flex gap-[20px] mt-[10px]">
              <button
                onClick={() => {
                  billingDelete();
                }}
                className="text-[#fff] uppercase bg-[#21AEFE] px-[40px] py-[10px] rounded-lg"
              >
                OK
              </button>
              <button
                onClick={() => setDeleted(false)}
                className="border border-[#21AEFE] text-[#21AEFE] uppercase px-[15px] py-[10px] rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`table_edit left-[2px] md:left-0  w-full h-full flex justify-center items-start   absolute  ${
          !open ? "hidden" : "block"
        }`}
      >
        <div className="p-[30px] px-[10] md:px-[70px] bg-white rounded-lg Shadow">
          <div className="flex justify-end">
            <button
              onClick={() => {
                setOpen(false);
              }}
              className="text-[25px]"
            >
              <IoIosClose />
            </button>
          </div>
          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
            <div className="flex gap-[20px] justify-between">
              <label
                className="text-[16px] text-[#8392ab] font-semibold"
                htmlFor="Author"
              >
                Author
              </label>
              <input
                className="border px-[12px] py-[6px] rounded-lg outline-none"
                id="author"
                name="author"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.author}
              />
            </div>

            <div className="flex gap-[20px] justify-between">
              <label
                className="text-[16px] text-[#8392ab] font-semibold"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="border px-[12px] py-[6px] rounded-lg outline-none"
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </div>
            <div className="flex gap-[20px] justify-between">
              <label
                className="text-[16px] text-[#8392ab] font-semibold"
                htmlFor="Job"
              >
                Job
              </label>
              <input
                className="border px-[12px] py-[6px] rounded-lg outline-none"
                id="job"
                name="job"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.job}
              />
            </div>
            <div className="flex gap-[20px] justify-between">
              <label
                className="text-[16px] text-[#8392ab] font-semibold"
                htmlFor="Type"
              >
                Type
              </label>
              <input
                className="border px-[12px] py-[6px] rounded-lg outline-none"
                id="type"
                name="type"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.type}
              />
            </div>
            <div className="flex gap-[20px] justify-between">
              <label
                className="text-[16px] text-[#8392ab] font-semibold"
                htmlFor="Status"
              >
                Status
              </label>
              <input
                className="border px-[12px] py-[6px] rounded-lg outline-none"
                id="status"
                name="status"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.status}
              />
            </div>
            <button
              type="submit"
              onClick={() => {
                setOpen(false);
              }}
              className="text-[#fff] uppercase bg-[#21AEFE] px-[10px] py-[5px] rounded-lg"
            >
              Add
            </button>
          </form>
        </div>
      </div>

      <div className="table_author p-[16px] bg-[#fff] Shadow rounded-lg w-full">
        <div className="flex justify-between items-center">
          <div className="text-[#344767] text-[18px] font-semibold">
            Authors table
          </div>
          <div>
            <button
              onClick={() => {
                setOpen(true);
              }}
              className="bg-[#344767] py-[10px] px-[15px] rounded-lg text-[12px] uppercase text-[#fff] font-semibold"
            >
              add author
            </button>
          </div>
        </div>
        <div className="">
          <table className="table   items-center md:w-full mb-0">
            <thead className="">
              <tr>
                <th className="uppercase text-[11px] text-left  font-bold text-[#8392AB]">
                  Author
                </th>
                <th className="uppercase demo  text-[11px] text-left  font-bold text-[#8392AB] ">
                  Function
                </th>
                <th className="text-center demo uppercase text-[11px]   font-bold text-[#8392AB]">
                  Status
                </th>
                <th className="text-center demo uppercase text-[11px]   font-bold text-[#8392AB]">
                  Employed
                </th>
                <th className=" "></th>
              </tr>
            </thead>
            <tbody className="">
              {userData.map((item) => (
                <tr key={item.id} className="border-t">
                  <td>
                    <div className="flex px-2 py-1 gap-[10px]">
                      <div>
                        <img src={item.img} className="w-[36px] rounded-xl" />
                      </div>
                      <div className="flex flex-col justify-center">
                        <h6 className="mb-0 font-medium text-[#344767] text-[14px]">
                          {item.author}
                        </h6>
                        <p className="text-[12px] mb-0 text-[#8392AB]">
                          {item.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className=" demo">
                    <p className="text-[12px] text-[#67748e] font-medium mb-0">
                      {item.job}
                    </p>
                    <p className="text-[12px] text-[#8392AB]">{item.type}</p>
                  </td>
                  <td className="align-middle demo  text-center text-[12px]">
                    <span
                      className={`uppercase px-[7px] py-[3px] rounded-md text-[12px] text-white font-semibold ${
                        item.status ? "bg-[#2EB836]" : "bg-[#6E809F]"
                      } `}
                    >
                      {item.status ? "online" : "offline"}
                    </span>
                  </td>
                  <td className="align-middle demo  text-center">
                    <span className=" text-[12px] font-medium text-[#8392AB]">
                      {item.employed}
                    </span>
                  </td>
                  <td className="align-middle flex gap-[15px] items-center mt-[20px] justify-between">
                    <button
                      className="text-[12px] font-semibold text-[#8392ab]"
                      onClick={() => {
                        handleEdit(item);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        handleDelete(item.id);
                      }}
                      className="text-[12px] font-semibold text-[#8392ab]"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
