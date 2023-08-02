import { BiPencil } from "react-icons/bi";
import { BsFillTrashFill } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addBillingUser,
  deleteBillingUser,
  updateBillingUser,
} from "../../../../redux/action";
import { useFormik } from "formik";
import { IoIosClose } from "react-icons/io";

export default () => {
  const billingUser = useSelector((state) => state.billingUserRuducer.users);
  const [deleted, setDeleted] = useState(false);
  const cards = useSelector((state) => state.cardReducer.cards);
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(null);
  const dispatch = useDispatch();
  const handleEdit = (demo) => {
    setOpen(!open);
    setEdit(demo);
  };
  useEffect(() => {
    if (edit !== null) {
      cards.map((elem) => {
        if (edit.id == elem.id) {
          formik.setValues({
            user: edit.user,
            companyName: edit.companyName,
            email: edit.email,
            vatNumber: edit.vatNumber,
          });
        }
      });
    } else {
      console.log("Edit is not defined");
    }
  }, [edit]);

  const formik = useFormik({
    initialValues: {
      user: "",
      vatNumber: "",
      companyName: "",
      email: "",
    },
    onSubmit: (values) => {
      if (edit) {
        const payload = {
          id: edit.id,
          user: values.user,
          companyName: values.companyName,
          email: values.email,
          vatNumber: values.vatNumber,
        };
        dispatch(updateBillingUser(payload));
        setEdit(null);
      } else {
        const payload = {
          id: Date.now(),
          user: values.user,
          companyName: values.companyName,
          email: values.email,
          vatNumber: values.vatNumber,
        };
        dispatch(addBillingUser(payload));
      }
      setEdit(null);
      formik.resetForm();
    },
  });

  const handleDelete = (id) => {
    setDeleted(id);
  };
  const billingDelete = () => {
    dispatch(deleteBillingUser(deleted));
    setDeleted(false);
  };
  return (
    <div>
      <div
        className={`${
          !deleted ? "hidden" : "block"
        } w-full h-full flex modal_edit justify-center items-center absolute md:left-0 top-[50%]`}
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
        className={`billing_user_edit  z-30 left-[2px] md:left-0  w-full h-full flex justify-center items-start   absolute  ${
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
                htmlFor="User"
              >
                User
              </label>
              <input
                className="border px-[12px] py-[6px] rounded-lg outline-none"
                id="user"
                name="user"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.user}
              />
            </div>
            <div className="flex gap-[20px] justify-between">
              <label
                className="text-[16px] text-[#8392ab] font-semibold"
                htmlFor="CompanyName"
              >
                Company Name
              </label>
              <input
                className="border px-[12px] py-[6px] rounded-lg outline-none"
                id="companyName"
                name="companyName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.companyName}
              />
            </div>
            <div className="flex gap-[20px] justify-between">
              <label
                className="text-[16px] text-[#8392ab] font-semibold"
                htmlFor="Email"
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
                htmlFor="VAT Number"
              >
                VAT Number
              </label>
              <input
                className="border px-[12px] py-[6px] rounded-lg outline-none"
                id="vatNumber"
                name="vatNumber"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.vatNumber}
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

      <div className="p-[16px] bg-white rounded-lg Shadow w-full">
        <div className="flex justify-between">
          <div className="text-[#344767] text-[16px] font-semibold">
            Billing Information
          </div>
          <div>
            <button
              onClick={() => {
                setOpen(true);
              }}
              className="bg-[#344767] py-[10px] px-[15px] rounded-lg text-[12px] uppercase text-[#fff] font-semibold"
            >
              add user
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-[15px] mt-[10px]">
          {billingUser.map((item) => (
            <div className="rounded-lg p-[16px] bg-[#F8F9FA] flex flex-col gap-[15px]">
              <div className="flex justify-between">
                <div className="text-[14px] text-[#344767] font-semibold">
                  {item.user}
                </div>
                <div className="flex gap-[15px] uppercase text-[12px]">
                  <button
                    onClick={() => {
                      handleDelete(item.id);
                    }}
                    className="text-[#ea0606] flex gap-[5px] uppercase font-semibold"
                  >
                    <p className="text-[18px]">
                      <BsFillTrashFill />
                    </p>
                    delete
                  </button>
                  <button
                    onClick={() => {
                      handleEdit(item);
                    }}
                    className="text-[#344767] flex gap-[5px] uppercase font-semibold"
                  >
                    <p className="text-[18px]">
                      <BiPencil />
                    </p>
                    edit
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-[9px]">
                <div className="flex gap-[5px]">
                  <p className="text-[12px] text-[#67748e]">Company Name: </p>
                  <p className="text-[12px] text-[#344767]">
                    {item.companyName}
                  </p>
                </div>
                <div className="flex gap-[5px]">
                  <p className="text-[12px] text-[#67748e]">Email Adress: </p>
                  <p className="text-[12px] text-[#344767]">{item.email}</p>
                </div>
                <div className="flex gap-[5px]">
                  <p className="text-[12px] text-[#67748e]">VAT Number: </p>
                  <p className="text-[12px] text-[#344767]">{item.vatNumber}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
