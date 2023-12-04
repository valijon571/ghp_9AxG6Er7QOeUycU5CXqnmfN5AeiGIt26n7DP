import axios from "axios";
import React from "react";
import InputMask from "react-input-mask";
import { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { BsEyeSlash } from "react-icons/bs";

const Post = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    phone: false,
    password: false,
    first_name: false,
    last_name: false,
    gender: false,
    birthday: false,
    middle_name: false,
    address: false,
  });
  const [obj, setObj] = useState({
    phone: "",
    password: "",
    first_name: "",
    last_name: "",
    gender: "",
    birthday: "",
    middle_name: "",
    address: "",
  });
  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    let t = true,
      err = {};
    if (!obj.phone) {
      t = false;
      err = { ...err, phone: true };
    }
    if (!obj.password) {
      t = false;
      err = { ...err, password: true };
    }
    if (!obj.first_name) {
      t = false;
      err = { ...err, first_name: true };
    }
    if (!obj.last_name) {
      t = false;
      err = { ...err, last_name: true };
    }
    if (!obj.gender) {
      t = false;
      err = { ...err, gender: true };
    }
    if (!obj.birthday) {
      t = false;
      err = { ...err, birthday: true };
    }
    if (!obj.middle_name) {
      t = false;
      err = { ...err, middle_name: true };
    }
    if (!obj.address) {
      t = false;
      err = { ...err, address: true };
    }
    if (t) {
      axios
        .post("https://btest.gazon-tashkent.uz/api/v1/account/register/", {
          phone: obj.phone,
          password: obj.password,
          first_name: obj.first_name,
          last_name: obj.last_name,
          gender: obj.gender,
          birthday: obj.birthday,
          middle_name: obj.middle_name,
          address: obj.address,
        })
        .then((r) => {})
        .catch((e) => {})
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
      setErrors(err);
    }
  };
  return (
    <>
      <div>
        <h1>Ro'yxatdan o'tish</h1>
        <form onSubmit={onSubmit}>
          <div>
            <label>Tel nomer</label>
            <br />
            <InputMask
              // type="text"
              mask="+998(nn) nnn-nn-nn"
              name="phone"
              // placeholder="+998"
              formatChars={{
                n: "[0-9]",
                a: "[A-Za-z]",
                "*": "[A-Za-z0-9]",
              }}
              value={obj?.phone}
              onChange={(e) => {
                setObj({ ...obj, phone: e.target.value });
                setErrors({ ...errors, phone: false });
              }}
            />
            {errors?.phone ? (
              <div style={{ color: "red" }}>Tel nomer kiriting!</div>
            ) : null}
          </div>
          <br />
          <div>
            <label>Pasport raqami</label>
            <br />
            <InputMask
              // type="text"
              mask="aa nnn nn nn"
              // name="phone"
              // placeholder="+998"
              formatChars={{
                n: "[0-9]",
                a: "[A-Z]",
                "*": "[A-Za-z0-9]",
              }}
            />
          </div>
          <br />
          <div>
            <label>mashina raqami</label>
            <br />
            <InputMask
              // type="text"
              mask="kk l kkk ll"
              // name="phone"
              // placeholder="+998"
              formatChars={{
                k: "[0-9]",
                l: "[A-Z]",
                "*": "[A-Za-z0-9]",
              }}
            />
          </div>
          <br />
          <div>
            <label>Parol</label>
            <br />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="******"
              value={obj?.password}
              onChange={(e) => {
                setObj({ ...obj, password: e.target.value });
                setErrors({ ...errors, password: false });
              }}
            />
            <div>
              {showPassword ? (
                <div onClick={() => setShowPassword(false)}>
                  <BsEyeSlash />
                </div>
              ) : (
                <div onClick={() => setShowPassword(true)}>
                  <AiOutlineEye onClick={() => setShowPassword(true)} />
                </div>
              )}
            </div>
            {errors?.password ? (
              <div style={{ color: "red" }}>Parolni kiriting!</div>
            ) : null}
          </div>
          <br />
          <div>
            <label>Ism</label>
            <br />
            <input
              type="text"
              name="first_name"
              placeholder="Ismingizni kiriting"
              value={obj?.first_name}
              onChange={(e) => {
                setObj({ ...obj, first_name: e.target.value });
                setErrors({ ...errors, first_name: false });
              }}
            />
            {errors?.first_name ? (
              <div style={{ color: "red" }}>Ismingizni kiriting!</div>
            ) : null}
          </div>
          <br />
          <div>
            <label>Familya</label>
            <br />
            <input
              type="text"
              name="last_name"
              placeholder="Familyangizni kiriting"
              value={obj?.last_name}
              onChange={(e) => {
                setObj({ ...obj, last_name: e.target.value });
                setErrors({ ...errors, last_name: false });
              }}
            />
            {errors?.last_name ? (
              <div style={{ color: "red" }}>Familyangizni kiriting!</div>
            ) : null}
          </div>
          <br />
          <div>
            <label>Jinsi</label>
            <br />
            <label for="erkak">Erkak</label>
            <input type="radio" id="erkak" name="jins" />
            <label for="ayol">Ayol</label>
            <input type="radio" id="ayol" name="jins" />
            <br />
            <input
              type="text"
              name="gender"
              placeholder="jinsingizni kiriting"
              value={obj?.gender}
              onChange={(e) => {
                setObj({ ...obj, gender: e.target.value });
                setErrors({ ...errors, gender: false });
              }}
            />
            {errors?.gender ? (
              <div style={{ color: "red" }}>Jinsingizni kiriting!</div>
            ) : null}
          </div>
          <br />
          <div>
            <label>Tug'ilgan </label>
            <br />
            <input
              type="date"
              name="birthday"
              placeholder="tug'ilgan yil sana oy"
              value={obj?.birthday}
              onChange={(e) => {
                setObj({ ...obj, birthday: e.target.value });
                setErrors({ ...errors, birthday: false });
              }}
            />
            {errors?.birthday ? (
              <div style={{ color: "red" }}>
                Tug'lganlik malumotingizni kiriting!
              </div>
            ) : null}
          </div>
          <br />
          <div>
            <label>Otasini ismi</label>
            <br />
            <input
              type="text"
              name="middle_name"
              placeholder="Otangizni ismi"
              value={obj?.middle_name}
              onChange={(e) => {
                setObj({ ...obj, middle_name: e.target.value });
                setErrors({ ...errors, middle_name: false });
              }}
            />
            {errors?.middle_name ? (
              <div style={{ color: "red" }}>Otangizni ismini kiriting!</div>
            ) : null}
          </div>
          <br />
          <div>
            <label>Turar joy</label>
            <br />
            <select
              // value={lang}
              type="text"
              name="address"
              // placeholder="Turarjoyingiz"
              value={obj?.address}
              onChange={(e) => {
                setObj({ ...obj, address: e.target.value });
                setErrors({ ...errors, address: false });
              }}
            >
              <option>Turarjoyingiz</option>
              <option>Andijon</option>
              <option>Buxoro</option>
              <option>Farg'ona</option>
              <option>Jizzax</option>
              <option>Xorazm</option>
              <option>Namangan</option>
              <option>Navoiy</option>
              <option>Qashqadaryo</option>
              <option>Samarqand</option>
              <option>Sirdaryo</option>
              <option>Surxandaryo</option>
              <option>Toshkent</option>
            </select>
            <br />
            {errors?.address ? (
              <div style={{ color: "red" }}>Turar joyingizni kititing!</div>
            ) : null}
          </div>
          <br />
          <div>
            {loading ? "Yuborilmoqda" : <button type="submit">Yuborish</button>}
          </div>
        </form>
      </div>
    </>
  );
};
export default Post;
