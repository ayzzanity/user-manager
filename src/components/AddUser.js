import { Button, Modal, Form, Popconfirm } from "antd";
import { UserAddOutlined, SaveOutlined } from "@ant-design/icons";
import { useState } from "react";
import AppForm from "./Form";
import { inject, observer } from "mobx-react";

const AddUser = ({ store }) => {
  const [form] = Form.useForm();
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [addLoading, setAddLoading] = useState(false);
  const { users, setUsers } = store;
  const { setTableLoading } = store.bool;
  const { name, username, email, phone, company, website } = store.user;

  const handleAddUser = () => {
    if (name === "" || username === "" || email === "") {
      alert("Please enter the required information!");
    } else {
      setAddLoading(true);
      let newUser = {
        key: `${users.length + 1}`,
        id: `${users.length + 1}`,
        name: name,
        username: username,
        email: email,
        phone: phone,
        company: company,
        website: website,
      };
      setTimeout(() => {
        setUsers([...users, newUser]);
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
