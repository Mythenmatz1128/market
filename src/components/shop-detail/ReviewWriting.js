import { Avatar, Button, Comment, Form, Input, List, Rate } from "antd";

import moment from "moment";
import React, { useState, useEffect } from "react";
import CommentList from "./CommentList.js";
import Editor from "./Editor.js";
import { RestOutlined, FormOutlined } from "@ant-design/icons";
import uuid from "react-uuid";
import { useRecoilState_TRANSITION_SUPPORT_UNSTABLE } from "recoil";
import { resolveOnChange } from "antd/lib/input/Input.js";
const { TextArea } = Input;
const ReviewWriting = ({ comments, setComments, comment, remove }) => {
  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState(comment != null ? comment.value : "");
  const [count, setCount] = useState();
  function update() {
    setUid(comments.uid);
    setSubmitting(true);
    setTimeout(
      () => {
        setSubmitting(false);
        setValue("");
        setComments([
          ...comments,
          {
            value: value,
            count: count,
            uid: uid,
            author: "Han Solo",
            avatar: "https://joeschmoe.io/api/v1/random",
            content: <span style={style}>{value}</span>,

            rate: <Rate allowHalf disabled value={count}></Rate>,

            datetime: date.toLocaleString(),
          },
        ]);
      },

      0
    );
  }

  const style = {
    textAlign: "left",
  };
  const date = new Date();
  let [uid, setUid] = useState(uuid);

  const handleSubmit = async() => {
    if (!value) return;

    if (comment) {
     await (remove(comment.uid));
      console.log("시벌2222",comments)
    }
    setUid(uuid());
    setSubmitting(true);
 
    
        setSubmitting(false);
        setValue("");
        console.log("시벌1111",comments)
        setComments([
          ...comments,
          {
            value: value,
            count: count,
            uid: uid,
            author: "Han Solo",
            avatar: "https://joeschmoe.io/api/v1/random",
            content: <span style={style}>{value}</span>,

            rate: <Rate allowHalf disabled value={count}></Rate>,

            datetime: date.toLocaleString(),
          },
        ]);
    

      

  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <Comment
        avatar={
          <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
        }
        content={
          <Editor
            onChange={handleChange}
            onSubmit={handleSubmit}
            submitting={submitting}
            value={value}
            count={count}
            setCount={setCount}
          />
        }
      />
    </>
  );
};

export default ReviewWriting;
