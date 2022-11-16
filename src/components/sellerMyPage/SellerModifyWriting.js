import SellerMyPage from "./SellerMyPage";
import ModifyWriting from "../writing/ModifyWriting";
const SellerModifyWriting = () => {
  const style0 = {
    marginLeft: "20%",
    marginRight: "20%",
  };
  return (
    <div>
      <SellerMyPage />
      <div style={style0}>
        <ModifyWriting/>
      </div>
    </div>
  );
};

export default SellerModifyWriting;
