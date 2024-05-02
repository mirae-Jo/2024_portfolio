"use client";
import React, { ChangeEvent, useState } from "react";

const ContactMeModal = () => {
  const [isAgree, setAgree] = useState(false);
  const handleAgree = (e: ChangeEvent<HTMLInputElement>) => {
    setAgree(e.target.checked);
  };
  return (
    <form
      className='bg-white w-[75rem] h-[75rem] mt-[2.5rem] mx-auto'
      onSubmit={(e) => {
        e.preventDefault();
      }}>
      <div className='w-[42rem] text-center my-o mx-auto pt-[10rem] flex flex-col gap-[5rem]'>
        <h1 className='text-[2.2rem]'>
          저에 대해 더 알고싶거나 저와 소통하고 싶다면 <br />
          연락처를 남겨주세요
        </h1>
        <div className='flex flex-col gap-[2rem]'>
          <div className='flex flex-row gap-[2rem]'>
            <input
              placeholder='name'
              className='w-[18rem] h-[4.5rem] contact-input '
            />
            <input
              placeholder='phone number'
              className='w-[22rem] h-[4.5rem] contact-input'
            />
          </div>
          <textarea
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
          disabled={!isAgree}
          className={
            isAgree
              ? `bg-main-blue w-[8rem] h-[5.2rem] mx-auto my-0 rounded-[1rem] text-[2rem] text-white`
              : `bg-[#bbb] w-[8rem] h-[5.2rem] mx-auto my-0 rounded-[1rem] text-[2rem] text-white`
          }>
          전송
        </button>
      </div>
    </form>
  );
};

export default ContactMeModal;
