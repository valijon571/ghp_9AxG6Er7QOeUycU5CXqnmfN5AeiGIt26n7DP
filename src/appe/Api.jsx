import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { FilterStyle } from "./FilterStyle";

const Api = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    setLoading(true);
    axios
      .get("https://api.onlinedu.uz/api/v1/reviews")
      .then((r) => {
        setData(r.data);
      })
      .catch((e) => {})
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <>
      <FilterStyle>
        <h1>API</h1>

        <Link to="/"></Link>
        <Link to="/appi">Api_on</Link>
        <br />
        <Link to="appi/filt">FIlter</Link>
        <div>total:{data?.total}</div>
        {loading ? (
          <div>Yuklanmoqda...</div>
        ) : (
          <div>
            {data?.map((item, index) => (
              <>
                <div
                  key={index}
                  style={{ display: "inline-block", padding: 10 }}
                >
                  <br />
                  <br />
                  <div>
                    <div>
                      <img
                        src={`https://api.onlinedu.uz/storage/${item?.image}`}
                        style={{ width: "10%" }}
                      />
                    </div>
                    <div>name: {item?.name} </div>
                    <div>position: {item?.position} </div>
                    <div>comment: {item?.comment} </div>
                    <div>created_at: {item?.created_at} </div>
                    <div>id: {item?.id} </div>
                    <div>review: {item?.review} </div>
                    <div>status: {item?.status} </div>
                    <div>updated_at: {item?.updated_at} </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        )}
      </FilterStyle>
    </>
  );
};
export default Api;
