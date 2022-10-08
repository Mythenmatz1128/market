// import { Upload } from "antd";
// import ImgCrop from "antd-img-crop";

// import React, { useState } from "react";
// const ImageUpload = () => {
//   const [fileList, setFileList] = useState([
    
//   ]);

//    const onChange = ({ fileList: newFileList }) => {
//     setFileList(newFileList);
//     console.log(fileList)
//   };

//   const onPreview = async (file) => {
//     let src = file.url;

//     if (!src) {
//       src = await new Promise((resolve) => {
//         const reader = new FileReader();
//         reader.readAsDataURL(file.originFileObj);

//         reader.onload = () => resolve(reader.result);
//       });
//     }

//     const image = new Image();
//     image.src = src;
//     const imgWindow = window.open(src);
//     imgWindow?.document.write(image.outerHTML);
//   };

//   return (
//     <ImgCrop rotate>
//       <Upload
//         action="bk"
//         listType="picture-card"
//         fileList={fileList}
//         onChange={onChange}
//         onPreview={onPreview}
//       >
//         {fileList.length < 5 && '+ Upload'}
//       </Upload>
//     </ImgCrop>
//   );
// };

// export default ImageUpload;