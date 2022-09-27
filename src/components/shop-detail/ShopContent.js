
// import {useParams} from 'react-router-dom'

// function ShopContent(props) {
  
//   const { id } = useParams();
//   const product = props
//   .filter((shoe) => shoe.id === Number(id));
//   if (shoe.length === 0) {
//     return (
//       <div>
//         <h3>해당 상품은 존재하지 않습니다.</h3>
//       </div>
//     );
//   } else {
//     return (
//       <div className="row">
//         <div className="col-md-6">
//           <img src={shoe[0].src} width="100%" />
//         </div>
//         <div className="col-md-6">
//           <h4 className="pt-5">{shoe[0].title}</h4>
//           <p>{shoe[0].content}</p>
//           <p>{shoe[0].price}</p>
//           <button className="btn btn-danger">주문하기</button>
//         </div>
//       </div>
//     );
//   }
// }

// export default ShopContent;