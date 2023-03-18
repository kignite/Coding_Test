import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'zh',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          login: "login",
          logout: "logout",
          accountPlaceholder: "input your account...",
          pwdPlaceholder: "input your password...",
          account: "account:",
          pwd: "password:",
          loginSuccessMsg: "welcome to website background",
          loginFailMsg: "login failed",
          staffInfo: "staff info",
          id: "id",
          name: "name",
          age: "age",
          tel: "tel",
        }
      },
      zh: {
        translation: {
          login: "登入",
          logout: "登出",
          accountPlaceholder: "請輸入帳號...",
          pwdPlaceholder: "請輸入密碼...",
          account: "帳號:",
          pwd: "密碼:",
          loginSuccessMsg: "歡迎來到後台管理",
          loginFailMsg: "登入失敗",
          staffInfo: "員工資訊",
          id: "編號",
          name: "姓名",
          age: "年齡",
          tel: "電話",
        }
      }
    }
  });

export default i18n;
