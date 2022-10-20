import React from "react";

type Props = {};

const RegisterForm = (props: Props) => {
  return (
    <form aria-label="register">
      <label htmlFor="username">아이디</label>
      <input type="text" id="username" name="username" aria-label="username" />
      <label htmlFor="password">비밀번호</label>
      <input type="text" id="password" name="password" aria-label="password" />
      <input type="submit" value="Join" />
    </form>
  );
};

export default RegisterForm;
