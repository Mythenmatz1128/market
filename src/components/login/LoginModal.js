import { Button, Modal } from "antd";
import React, { useState } from "react";
import Login from "./Login";
const LoginModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        
      >
        <Login></Login>
      </Modal>
    </>
  );
};

export default LoginModal;
