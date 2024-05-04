"use client";
import { Close, useModal } from "@/app/_components/ui/ModalContainer";
import { supabase } from "@/app/api/db";
import { useMutation } from "@tanstack/react-query";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { validName, validPhone } from "@/validator/validator";
import { useAutoPhone } from "@/hooks/useAutoPhone";

const queryClient = new QueryClient();

const ContactMeModal = () => {
  const [name, setName] = useState("");
  const [phone, handleAuthPhone] = useAutoPhone();
  const [message, setMessage] = useState("");
  const [isAgree, setAgree] = useState(false);

  const handleAgree = (e: ChangeEvent<HTMLInputElement>) => {
    setAgree(e.target.checked);
  };

  const { handleToggleModal } = useModal();

  const isCanSubmit = validName(name) && validPhone(phone) && isAgree;

  const {
    mutate: postContactInfo,
    isPending,
    isError,
  } = useMutation({
    mutationFn: async () => {
      const { data, error } = await supabase
        .from("contact information")
        .insert({
          name,
          "phone number": phone,
          message,
        });

      if (error) {
        throw new Error(error.message);
      }
      return data;
    },
    onSuccess: () => {
      alert("정보가 성공적으로 전송되었습니다.");
      handleToggleModal();
    },
  });

  const handleForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postContactInfo();
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className='bg-white w-[75rem] h-auto absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]'>
        <form onSubmit={handleForm}>
          <div className='w-[42rem] text-center my-[10rem] mx-auto flex flex-col gap-[5rem]'>
            <h1 className='text-[2.2rem]'>
              저에 대해 더 알고싶거나 저와 소통하고 싶다면 <br />
              연락처를 남겨주세요
            </h1>
            <div className='flex flex-col gap-[2rem]'>
              <div className='flex flex-row gap-[2rem]'>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder='name'
                  className='w-[18rem] h-[4.5rem] contact-input '
                  required
                />
                <input
                  value={phone}
                  onChange={handleAuthPhone}
                  placeholder='phone number'
                  className='w-[22rem] h-[4.5rem] contact-input'
                  required
                />
              </div>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder='message'
                className='contact-input p-[1rem] !indent-0 placeholder:indent-0 resize-none'
              />
            </div>
            <div className='flex flex-row gap-[1rem] text-[1.5rem]'>
              <p>{"(필수)"} 개인정보 수집 및 이용에 동의합니다.</p>
              <input type='checkbox' checked={isAgree} onChange={handleAgree} />
              <label> 동의</label>
            </div>
            <button
              type='submit'
              disabled={!isCanSubmit}
              className={
                isCanSubmit
                  ? `bg-main-blue w-[8rem] h-[5.2rem] mx-auto my-0 rounded-[1rem] text-[2rem] text-white`
                  : `bg-[#bbb] w-[8rem] h-[5.2rem] mx-auto my-0 rounded-[1rem] text-[2rem] text-white`
              }>
              전송
            </button>
          </div>
        </form>
        <Close />
      </div>
    </QueryClientProvider>
  );
};

export default ContactMeModal;
