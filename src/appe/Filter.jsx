import { FilterStyle } from "./FilterStyle";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Filter = () => {
  const [Categories, setCategories] = useState([]);
  const [Cources, setCources] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("");
  const [lang, setLang] = useState("");
  const [son1, setSon1] = useState("");
  const [son2, setSon2] = useState("");
  const params = useParams("");

  useEffect(() => {
    getCategories();
    getCources();
  }, [params?.page]);
  const getCategories = () => {
    setLoading(true);
    axios
      .get("https://api.onlinedu.uz/api/v1/paid/categories")
      .then((r) => {
        setCategories(r.data);
      })
      .catch((e) => {})
      .finally(() => {
        setLoading(false);
      });
  };
  const getCources = (c_id, l_id, h_min, h_max) => {
    setLoading(true);
    console.log(params?.page);
    axios
      .get(
        "https://api.onlinedu.uz/api/v1/courses-home?per_page=6&category_type=paid&page=" +
          (params?.page ?? 1) +
          (c_id ? "&category_id=" + c_id : "") +
          (l_id ? "&language_id=" + l_id : "") +
          (h_min ? "&hours_min=" + h_min : "") +
          (h_max ? "&hours_max=" + h_max : "")
      )
      .then((r) => {
        setCources(r.data);
      })
      .catch((e) => {})
      .finally(() => {
        setLoading(false);
      });
  };
  const showPagination = () => {
    let l = [];
    const p_c =
      parseInt(Cources?.total / Cources?.per_page) +
      (Cources?.total % Cources?.per_page === 0 ? 0 : 1);
    for (let i = 1; i <= p_c; i++) {
      l.push(
        <li>
          <Link to={"/appi/filt/courses/" + i}>{i}</Link>
        </li>
      );
    }
    return l;
  };
  return (
    <>
      <FilterStyle>
        <h1>Filter</h1>
        <Link to="/appi">Api_on</Link>
        <br />
        {/* <Link to="appi/filt">FIlter</Link> */}
        {loading ? (
          <div>Sabr.....</div>
        ) : (
          <div>
            {Categories?.data?.map((item, index) => (
              <></>
            ))}
            <div>
              <label>Kategoriyalar</label>
              <br />
              <select onChange={(e) => setFilter(e.target.value)}>
                <option>Barcha kategoriyalar</option>
                {Categories?.data?.map((item, index) => (
                  <option value={item?.id} key={index}>
                    {item?.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <div>
                <label for="">Мин. длительность </label>
                <br />
                <input
                  type="number"
                  placeholder="Мин. длительность"
                  value={son1}
                  onChange={(e) => {
                    setSon1(e.target.value);
                  }}
                />
              </div>
            </div>
            <div>
              <div>
                <label for="">Макс. длительность</label>
                <br />
                <input
                  type="number"
                  placeholder="Макс. длительность"
                  value={son2}
                  onChange={(e) => {
                    setSon2(e.target.value);
                  }}
                />
              </div>
            </div>
            <div>
              <label for="">Язык</label>
              <br />
              <select
                value={lang}
                onChange={(e) => {
                  setLang(e.target.value);
                }}
              >
                <option value=" ">Все языки</option>
                <option value="1">O'zbekcha</option>
                <option value="2">Русский</option>
              </select>
            </div>
            <div style={{ width: "60%", margin: 10 }}>
              <button onClick={() => getCources(filter, lang, son1, son2)}>
                Начать поиск
              </button>
            </div>

            <div>
              {Cources?.data?.map((item, index) => (
                <>
                  <div key={index}>
                    <img
                      src={`https://api.onlinedu.uz/storage/${item?.image}`}
                      style={{ width: "30%", margin: 10 }}
                    />
                    <div>{item?.name}</div>
                    <div>{item?.category_id}</div>
                    <div>{item?.created_at}</div>
                    <div>{item?.description}</div>
                    <div>{item?.reviews_avg_rating}</div>
                  </div>
                </>
              ))}
              <div className="pagination">
                <ul>
                  <li>
                    <Link to="/appi/filt/courses/1">
                      <i class="material-icons">&#xe314;</i>
                    </Link>
                  </li>
                  {showPagination()}
                  <li>
                    <Link to="/appi/filt/courses/4">
                      <i class="material-icons">&#xe315;</i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </FilterStyle>
    </>
  );
};
export default Filter;
