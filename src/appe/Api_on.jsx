import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { FilterStyle } from "./FilterStyle";

const Api_on = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    setLoading(true);
    axios
      .get("https://api.onlinedu.uz/api/v1/teachers?page=1&per_page=5")
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
        <h1>API_ON</h1>
        <Link to="/">
          <button>orqaga</button>
        </Link>
        {loading ? (
          <div>Yuklanmoqda.....</div>
        ) : (
          <div>
            {data?.data?.map((item, index) => (
              <>
                <div key={index}>
                  <br />
                  <br />
                  <div>
                    <div>
                      <img
                        src={`https://api.onlinedu.uz/storage/${item?.image}`}
                        style={{ width: "10%" }}
                      />
                    </div>
                    <div>{item?.name}</div>
                    <div>{item?.position}</div>
                    <div>{item?.created_at}</div>
                    <div>{item?.updated_at}</div>
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
export default Api_on;
