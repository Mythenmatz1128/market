import { Button, Modal } from "antd";
import React, { useEffect, useState } from "react";
import Editor from "./Editor.js";
import Review from "./Review.js";
import ReviewWriting from "./ReviewWriting.js";

const CommentUpdateModal = ({ comments, setComments, comment, remove }) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  const showModal = () => {
   
    setOpen(true);
  
    console.log("comment :", comment);
    console.log("comments :", comments);
  };

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");

    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 1000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        수정
      </Button>
      <Modal
        destroyOnClose="true"
        title="댓글수정"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <ReviewWriting
          comment={comment}
          comments={comments}
          setComments={setComments}
          remove={remove}
        ></ReviewWriting>
      </Modal>
    </>
  );
};

export default CommentUpdateModal;
