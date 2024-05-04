export const validName = (name: string) => {
  return !!name;
};

export const validPhone = (phone: string) => {
  return /[0-9]{3}-[0-9]{4}-[0-9]{4}/.test(phone);
};
