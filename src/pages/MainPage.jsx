import React, { useEffect } from "react";
import STAFFDATAS from "../const/staffDatasConst";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setLogout } from "../store/adminSlice";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LNGS from "../const/languagesConst";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    .logout-btn {
      position: absolute;
      right: 10%;
      top: 5%;
    }
    .change-lngs {
      position: absolute;
      right: 20%;
      top: 5%;
    }
  }
`;

const StaffListStyled = styled.div`
  padding: 0 auto;
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 10px;
  .staff-info {
    border: 1px solid tomato;
    text-align: center;
  }
`;

export default function MainPage() {
  const state = useSelector((state) => state.admin.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const handleLogout = () => {
    dispatch(setLogout());
  };

  useEffect(() => {
    if (!state.isLogin) {
      navigate("../");
    }
  }, [state.isLogin]);
  return (
    <Layout>
      <header>
        <h1>{t("staffInfo")}</h1>
        <select
          className="change-lngs"
          onChange={(e) => {
            i18n.changeLanguage(e.target.value);
          }}
        >
          {Object.keys(LNGS).map((lng) => (
            <option
              key={lng}
              value={lng}
              label={LNGS[lng].nativeName}
              style={{
                fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
              }}
            />
          ))}
        </select>
        <button className="logout-btn" onClick={handleLogout}>
          {t("logout")}
        </button>
      </header>
      <StaffListStyled>
        {STAFFDATAS.map((staff) => {
          return (
            <div className="staff-info" key={staff.id}>
              <div className="id">
                {t("id")} : {staff.id}
              </div>
              <div className="name">
                {t("name")} : {staff.name}
              </div>
              <div className="age">
                {t("age")} : {staff.age}
              </div>
              <div className="tel">
                {t("tel")} : {staff.tel}
              </div>
            </div>
          );
        })}
      </StaffListStyled>
    </Layout>
  );
}
