import { useState } from "react";
import { Button, Modal, Form, Popconfirm } from "antd";
import { EditOutlined, SaveOutlined } from "@ant-design/icons";
import AppForm from "./Form";
import { inject, observer } from "mobx-react";
import axios from "axios";

const UserInfo = ({ store }) => {
  const [form] = Form.useForm();
  const { getUsers } = store;
  const { isViewModalVisible, setViewModalVisible, setTableLoading } =
    store.bool;
  const { id, name, username, email, phone, company, website, setUser } =
    store.user;
  const [isEditing, setIsEditing] = useState(false);
  const [isSaveLoading, setIsSaveLoading] = useState(false);

  //saving data
  const handleSaveEdit = () => {
    if (name.value === "" || username.value === "" || email.value === "") {
      alert("Please enter the required information!");
    } else {
      setIsSaveLoading(true);
      setTimeout(async () => {
        await axios.put(`${store.url}/edit/${id}`, store.user);
        getUsers();
        setIsEditing(false);
        setIsSaveLoading(false);
        setViewModalVisible(false);
        setTableLoading(true);
        form.resetFields();
        setUser({});
        setTimeout(() => {
          setTableLoading(false);
        }, 1000);
      }, 1000);
    }
  };
  return (
    <>
      {isEditing ? (
        <Modal
          title="Edit User"
          visible={isViewModalVisible}
          closable={false}
          footer={[
            <Popconfirm
              title="Discard changes made?"
              onConfirm={() => setIsEditing(!isEditing)}
            >
              <Button key="cancel" ghost type="primary">
                Cancel
              </Button>
            </Popconfirm>,
            <Popconfirm
              title="Save your changes?"
              onConfirm={() => handleSaveEdit()}
            >
              <Button key="submit" type="primary" loading={isSaveLoading}>
                {!isSaveLoading && <SaveOutlined />}
                Save
              </Button>
            </Popconfirm>,
          ]}
        >
          <AppForm form={form} />
        </Modal>
      ) : (
        <Modal
          title="User Information"
          closable={false}
          visible={isViewModalVisible}
          footer={[
            <Button
              key="edit"
              ghost
              type="primary"
              onClick={() => {
                setIsEditing(!isEditing);
              }}
            >
              <EditOutlined />
              Edit
            </Button>,
            <Button
              key="submit"
              type="primary"
              onClick={() => {
                setViewModalVisible();
                setUser({});
              }}
            >
              Ok
            </Button>,
          ]}
        >
          <p>UserID: {id}</p>
          <p>Name: {name}</p>
          <p>Username: {username}</p>
          <p>Email: {email}</p>
          <p>Phone: {phone ? phone : `None`}</p>
          <p>Company: {company ? company : `None`}</p>
          <p>Website: {website ? website : `None`}</p>
        </Modal>
      )}
    </>
  );
};

export default inject("store")(observer(UserInfo));
