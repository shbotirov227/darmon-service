import React from "react";
import Image from "next/image";
import InputMask from "react-input-mask";
import { Button, Input, Textarea } from "@nextui-org/react";

const ContactForm = ({ handleSubmit, formState, handleChange, NewsCardImg }) => {
    return (
        <div className="flex items-center justify-between bg-bgBase rounded-[30px] border border-dotColor shadow-xl mb-10 overflow-hidden">
            <div className="w-[55%]">
                <Image
                    src={NewsCardImg}
                    alt="consult-img"
                    layout="responsive"
                    className="object-cover rounded-lg min-h-full w-full"
                />
            </div>

            <form className="w-[40%] p-8 flex flex-col gap-4 " onSubmit={handleSubmit}>
                <label htmlFor="name" className="text-sm font-medium text-gray-700">Ism-familiya</label>
                <Input
                    id="name"
                    name="name"
                    placeholder="Ism"
                    value={formState.name}
                    onChange={handleChange}
                    className="border bg-white rounded-2xl p-2"
                />

                <label htmlFor="phone" className="text-sm font-medium text-gray-700">Telefon raqam</label>
                <InputMask
                    mask="+\9\9\8 (99) 999 99 99"
                    placeholder="+998 (__) ___ __ __"
                    value={formState.phone}
                    onChange={handleChange}
                >
                    {(inputProps) => <Input {...inputProps} id="phone" name="phone" className="border bg-white rounded-2xl p-2" />}
                </InputMask>

                <label htmlFor="message" className="text-sm font-medium text-gray-700">Xabar</label>
                <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Yozing..."
                    rows={5}
                    className="border rounded-2xl py-3 px-4 h-[100px] bg-white"
                />

                <Button className="bg-blue text-base font-semibold text-white rounded-2xl py-7 hover:bg-blue-900 transition duration-200" type="submit">
                    Yuborish
                </Button>
            </form>
        </div>
    );
};

export default ContactForm;
