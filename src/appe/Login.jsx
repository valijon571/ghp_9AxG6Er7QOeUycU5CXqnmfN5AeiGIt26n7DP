import axios from "axios";
import React from "react";
import { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { BsEyeSlash } from "react-icons/bs";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    username: false,
    password: false,
  });
  const [obj, setObj] = useState({
    username: "",
    password: "",
  });
  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    let t = true,
      err = {};
    if (!obj.username) {
      t = false;
      err = { ...err, username: true };
    } 
    if (!obj.password) {
      t = false;
      err = { ...err, password: true };
    }
    if (t) {
      axios
        .post("https://api1.kpi-tktiyf.uz/api/v1/account/login/", {
          username: obj.username,
          password: obj.password,
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
    <div>
      <h1> Login</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label>Login</label>
          <input
            type="text"
            name="username"
            value={obj?.username}
            onChange={(e) => {
              setObj({ ...obj, username: e.target.value });
              setErrors({ ...errors, username: false });
            }}
          />
          {errors?.username ? (
            <div style={{ color: "red" }}>Loginni kiriting</div>
          ) : null}
        </div>
        <div>
          <label>Parol</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
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
            <div style={{ color: "red" }}>Parol kiriting</div>
          ) : null}
        </div>
        <div>
          {loading ? "Yuborilmoqda" : <button type="submit">Kirish</button>}
        </div>
      </form>
    </div>
  );
};

export default Login;
