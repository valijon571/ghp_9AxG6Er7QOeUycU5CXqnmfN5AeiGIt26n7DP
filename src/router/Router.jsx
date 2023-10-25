import { Route, Routes } from "react-router-dom";
import Api from "../appe/Api";
import Api_on from "../appe/Api_on";
import Filter from "../appe/Filter";
import Login from "../appe/Login";
import Post from "../appe/Post";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Api />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post" element={<Post />} />
        <Route path="/appi" element={<Api_on />} />
        <Route path="/appi/filt" element={<Filter />} />
        <Route path="/appi/filt/courses/:page" element={<Filter />} />
      </Routes>
    </>
  );
};
export default Router;
