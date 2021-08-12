import { Form, Input } from "antd";
import { inject, observer } from "mobx-react";
const AppForm = ({ store, form }) => {
  const { id, name, username, email, phone, company, website, setUser } =
    store.user;
  form.setFieldsValue({ name, username, email, phone, company, website });

  return (
    <Form
      form={form}
      layout="horizontal"
      size="small"
      name="form_in_modal"
      onFieldsChange={(_, allFields) => {
        const [name, username, email, phone, company, website] = allFields;
        let updatedUser = {
          id: id,
          key: id,
          name: name.value,
          username: username.value,
          email: email.value,
          phone: phone.value,
          company: company.value,
          website: website.value,
        };
        setUser(updatedUser);
      }}
    >
      <Form.Item
        name="name"
        label="Name"
        rules={[
          {
            required: true,
            message: "Please input your Name!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="username"
        label="Username"
        rules={[
          {
            required: true,
            message: "Please input your Username!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="Email"
        rules={[
          { type: "email", message: "Please enter a valid email!" },
          {
            required: true,
            message: "Please input your email!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="phone" label="Phone">
        <Input />
      </Form.Item>
      <Form.Item name="company" label="Company">
        <Input />
      </Form.Item>
      <Form.Item name="website" label="Website">
        <Input />
      </Form.Item>
    </Form>
  );
};

export default inject("store")(observer(AppForm));
