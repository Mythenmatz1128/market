import { Avatar, Button, Comment, Form, Input, List, Rate } from "antd";

import moment from "moment";
import React, { useState, useEffect } from "react";
import CommentList from "./CommentList.js";
import Editor from "./Editor.js";
import { RestOutlined, FormOutlined } from "@ant-design/icons";
import ReviewWriting from "./ReviewWriting.js";
import CommentUpdateModal from "./CommentUpdateModal.js";
import { useRecoilState } from "recoil";
import { commentState } from "../../recoil/commentState.js";
const { TextArea } = Input;
const style = {
  textAlign: "left",
};
const Review = () => {
  const [comments, setComments] = useRecoilState(commentState);

  function remove(id) {
    const res = comments.filter((i) => i.uid !== id);
    console.log("res ",res)
    console.log("delete uid: ",id)
    setComments(res);
    return comments
  }
 

  return (
    <>
      {<CommentList comments={comments} remove={remove} setComments={setComments}/>}
      <ReviewWriting comments={comments} setComments={setComments} />
    </>
  );
};

export default Review;
