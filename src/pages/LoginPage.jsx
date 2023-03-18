import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import AuthInput from "../components/AuthInput";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../store/adminSlice";
import ADMINPASSWORD from "../const/adminConst";
import "../i18n.js";
import { useTranslation } from "react-i18next";

const LoginPageStyled = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 200px;

  .input-container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    * {
      margin: 5px;
    }
  }
`;

export default function LoginPage() {
  const { t } = useTranslation();
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => state.admin.profile);
  const navigate = useNavigate();

  const check = ({ account, password }) => {
    if (account === ADMINPASSWORD.account && password === ADMINPASSWORD.pwd)
      return true;
    return false;
  };
  const handleLogin = ({ account, password }) => {
    if (password === "" || account === "") return;
    const isCheck = check({ account, password });
    if (isCheck) {
      dispatch(setLogin({ account, password }));
      Swal.fire({
        icon: "success",
        title: t("loginSuccessMsg"),
      });
    } else {
      setAccount("");
      setPassword("");
      Swal.fire({
        icon: "error",
        title: t("loginFailMsg"),
      });
    }
  };

  useEffect(() => {
    if (state.isLogin) {
      navigate("main");
    }
  }, [state.isLogin]);

  return (
    <LoginPageStyled>
      <div className="input-container">
        <AuthInput
          title={t("account")}
          type="text"
          value={account || ""}
          placeholder={t("accountPlaceholder")}
          onChange={(account) => {
            setAccount(account);
          }}
        />

        <AuthInput
          title={t("pwd")}
          type="password"
          value={password || ""}
          placeholder={t("pwdPlaceholder")}
          onChange={(pwd) => {
            setPassword(pwd);
          }}
        />
      </div>
      <div className="btn-container">
        <button
          className="login"
          onClick={() => handleLogin({ account, password })}
        >
          {t("login")}
        </button>
      </div>
    </LoginPageStyled>
  );
}
