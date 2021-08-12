import { Button, Modal, Form, Popconfirm } from "antd";
import { UserAddOutlined, SaveOutlined } from "@ant-design/icons";
import { useState } from "react";
import AppForm from "./Form";
import { inject, observer } from "mobx-react";
import axios from "axios";

const AddUser = ({ store }) => {
  const [form] = Form.useForm();
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [addLoading, setAddLoading] = useState(false);
  const { getUsers } = store;
  const { setTableLoading } = store.bool;
  const { name, username, email } = store.user;

  const handleAddUser = () => {
    if (name === "" || username === "" || email === "") {
      alert("Please enter the required information!");
    } else {
      setAddLoading(true);
      setTimeout(async () => {
        await axios.post(`${store.url}/new`, store.user);
        getUsers();
        setIsAddModalVisible(false);
        setAddLoading(false);
        setTableLoading(true);
        form.resetFields();
        setTimeout(() => {
          setTableLoading(false);
        }, 1000);
      }, 1000);
    }
  };
  return (
    <>
      <Button
        key="add"
        type="primary"
        onClick={() => {
          setIsAddModalVisible(!isAddModalVisible);
        }}
      >
        <UserAddOutlined />
        Add New User
      </Button>
      <Modal
        title="Add New User"
        closable={false}
        visible={isAddModalVisible}
        footer={[
          <Popconfirm
            title="Discard changes made?"
            onConfirm={() => {
              setIsAddModalVisible(!isAddModalVisible);
            }}
          >
            <Button key="cancel" ghost type="primary">
              Cancel
            </Button>
          </Popconfirm>,
          <Popconfirm
            title="Confirm Adding New User?"
            onConfirm={() => handleAddUser()}
          >
            <Button
              key="save"
              type="primary"
              htmlType="submit"
              loading={addLoading}
            >
              {!addLoading && <SaveOutlined />}
              Save
            </Button>
          </Popconfirm>,
        ]}
      >
        <AppForm form={form} />
      </Modal>
    </>
  );
};

export default inject("store")(observer(AddUser));
