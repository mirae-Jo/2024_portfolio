import { ChangeEvent, useState } from "react";

type ReturnType = () => [string, (e: ChangeEvent<HTMLInputElement>) => void];

export const useAutoPhone: ReturnType = () => {
  const [phone, setPhone] = useState("");

  const handleAutoPhone = (e: ChangeEvent<HTMLInputElement>) => {
    // 010-5870
    // 0105870
    const rawPhone = e.target.value.replace(/-/g, "");
    let formattedPhone = "";

    if (rawPhone.length < 4) {
      formattedPhone = rawPhone;
    } else if (rawPhone.length < 8) {
      formattedPhone = `${rawPhone.slice(0, 3)}-${rawPhone.slice(3)}`;
    } else if (rawPhone.length < 11) {
      formattedPhone = `${rawPhone.slice(0, 3)}-${rawPhone.slice(
        3,
        7
      )}-${rawPhone.slice(7)}`;
    } else {
      formattedPhone = `${rawPhone.slice(0, 3)}-${rawPhone.slice(
        3,
        7
      )}-${rawPhone.slice(7, 11)}`;
    }

    setPhone(formattedPhone);
  };
  return [phone, handleAutoPhone];
};
