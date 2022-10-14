import { Input } from "antd";
import axios from "axios";
const { Search } = Input;
function ShopSearch({ casId, selId, searchText, serverData ,setServerData }) {
  const onSearch = (value) => {
    searchText.current = value;
    console.log(searchText);
    axios
      .get(
        `/api/products?productName=${searchText.current}&orderBy=${selId.current}&itemCategoryCode=${casId.current[0]}&itemCode=${casId.current[1]}&kindId=${casId.current[2]}&kindGradeId=${casId.current[3]}`,
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((response) => {
        const data = response.data.result;

        setServerData(data);
        console.log("serverdata: ", serverData);
      })
      .catch((error) => alert(error.response));
  };
  return (
    <Search
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
    />
  );
}
export default ShopSearch;
