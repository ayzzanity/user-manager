import { useEffect } from "react";
import { Table, Popconfirm, Button } from "antd";
import { EyeOutlined, DeleteOutlined } from "@ant-design/icons";
import { inject, observer } from "mobx-react";
import axios from "axios";

const TableView = ({ store }) => {
  const { isTableLoading, setTableLoading, setViewModalVisible } = store.bool;
  const { setUser } = store.user;
  const { users, getUsers } = store;
  useEffect(() => {
    getUsers();
  }, [store.users]);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      fixed: "right",
      width: 300,
      render: (_, record) =>
        users.length >= 1 ? (
          <>
            <Button type="primary" onClick={() => showUserModal(record)}>
              <EyeOutlined />
              View
            </Button>
            <Popconfirm
              title="Are you sure to delete?"
              onConfirm={() => handleDelete(record.key)}
            >
              <Button danger type="link">
                <DeleteOutlined />
                Delete
              </Button>
            </Popconfirm>
          </>
        ) : null,
    },
  ];
  const showUserModal = (user) => {
    setViewModalVisible();
    setUser(user);
  };
  const handleDelete = (key) => {
    setTableLoading();
    setTimeout(async () => {
      await axios.delete(`${store.url}/users/delete/${key}`);
      store.getUsers();
      setTableLoading();
    }, 1000);
  };
  return (
    <div>
      <Table
        dataSource={users.toJSON()}
        columns={columns}
        loading={isTableLoading}
        pagination={{ pageSize: 5, hideOnSinglePage: true }}
      />
    </div>
  );
};

export default inject("store")(observer(TableView));
