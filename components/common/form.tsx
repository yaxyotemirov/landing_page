"use client";

import { useState } from "react";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import { useForm, Controller } from "react-hook-form";
import "react-phone-input-2/lib/style.css";

const Form = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  }: {
    control: any;
    register: any;
    handleSubmit: any;
    formState: any;
  } = useForm();

  const onSubmit = async (data: any) => {
    const msg = encodeURIComponent(
      "<b>Имя Фамилия\n</b>" +
        `${data.name}\n\n` +
        "<b>Номер телефона\n</b>" +
        `${data.phone}\n\n`
    );

    const res = await axios.get("/api/lp", {
      params: { message: msg },
    });

    if (res.status === 200) {
      setIsSuccess(true);
    }
  };

  return (
    <>
      {isSuccess ? (
        <div className="mt-2 text-white max-w-[400px] text-[14px] text-center mx-auto">
          Sizning so'rovnomangiz yuborildi. Murojaatingiz uchun rahmat. Tez
          orada siz bilan bog'lanamiz
        </div>
      ) : (
        <form
          className="w-full max-w-[500px] mx-auto p-4 md:p-10 rounded-lg text-black"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col mb-4">
            <label htmlFor="name" className="mb-1 font-bold italic">
              F.I.O
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              className="p-4 rounded-md shadow bg-[white(255,255,255,.2)]"
            />
            {errors.name && (
              <span className="text-[12px] mt-2 italic">Majburiy maydon</span>
            )}
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-1 font-bold italic">Telefon raqam</label>
            <Controller
              control={control}
              {...register("phone", { required: true })}
              name="phone"
              render={({ field: { onChange, value } }) => (
                <PhoneInput
                  inputClass="p-4 rounded-md shadow bg-[white(255,255,255,.2)]"
                  country={"uz"}
                  value={value}
                  onChange={onChange}
                />
              )}
            />
            {errors.phone && (
              <span className="text-[12px] mt-2 italic">Majburiy maydon</span>
            )}
          </div>
          <div className="mt-8">
            <input
              type="submit"
              value="Отправить"
              className="bg-orange-600 uppercase font-bold text-black px-4 h-[50px] rounded-md cursor-pointer text-sm"
            />
          </div>
        </form>
      )}
    </>
  );
};

export default Form;
