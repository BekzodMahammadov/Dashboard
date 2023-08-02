import { IoIosClose } from "react-icons/io";
import { BiPencil } from "react-icons/bi";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { addCard, updateCard } from "../../../../../redux/action";

export default () => {
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
            cardName: edit.cardName,
            number: edit.number,
          });
        }
      });
    } else {
      console.log("Edit is not defined");
    }
  }, [edit]);

  const formik = useFormik({
    initialValues: {
      cardName: "",
      number: "",
    },
    onSubmit: (values) => {
      if (edit) {
        const payload = {
          id: edit.id,
          cardName: values.cardName,
          number: values.number,
        };
        dispatch(updateCard(payload));
        setEdit(null);
      } else {
        const payload = {
          id: Date.now(),
          cardName: values.cardName,
          number: values.number,
        };
        dispatch(addCard(payload));
      }
      setEdit(null);
      formik.resetForm();
    },
  });

  return (
    <div>
      <div
        className={`card_edit  z-30 left-[2px] md:left-0  w-full h-full flex justify-center items-start   absolute  ${
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
                htmlFor="CardName"
              >
                Card Name
              </label>
              <input
                className="border px-[12px] py-[6px] rounded-lg outline-none"
                id="cardName"
                name="cardName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.cardName}
              />
            </div>

            <div className="flex gap-[20px] justify-between">
              <label
                className="text-[16px] text-[#8392ab] font-semibold"
                htmlFor="Number"
              >
                Number
              </label>
              <input
                className="border px-[12px] py-[6px] rounded-lg outline-none"
                id="number"
                name="number"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.number}
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

      <div className="p-[16px] w-full bg-[#fff] rounded-lg Shadow">
        <div className="flex items-center justify-between">
          <div className="text-[16px] font-semibold text-[#344767]">
            Payment Method
          </div>
          <button
            className="text-[12px] rounded-lg text-[#fff] uppercase font-semibold py-[10px] transition-all hover:scale-105 px-[18px] "
            onClick={() => {
              setOpen(true);
            }}
            style={{
              backgroundImage:
                "linear-gradient(310deg, #141727 0%, #3A416F 100%)",
            }}
          >
            Add new card
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] mt-[20px]">
          {cards.map((item) => (
            <div
              key={item.id}
              className="flex w-full py-[20px] items-center justify-center gap-[13px] mx-auto rounded-2xl border"
            >
              <div className="text-[16px]  text-[#526BAF] font-bold">
                {item.cardName}
              </div>
              <div className="text-[16px] font-semibold text-[#344767]">
                {item.number}
              </div>
              <div>
                <button
                  onClick={() => {
                    handleEdit(item);
                  }}
                  className="text-[22px] font-semibold text-[#344767]"
                >
                  <BiPencil />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
