import { types } from "mobx-state-tree";

const UserModel = types
  .model("UserModel", {
    key: types.optional(types.string, ""),
    id: types.optional(types.string, ""),
    name: types.optional(types.string, ""),
    username: types.optional(types.string, ""),
    email: types.optional(types.string, ""),
    phone: types.optional(types.string, ""),
    company: types.optional(types.string, ""),
    website: types.optional(types.string, ""),
  })
  .views((self) => ({}))
  .actions((self) => ({
    setUser(record) {
      self.key = record.key;
      self.id = record.id;
      self.name = record.name;
      self.username = record.username;
      self.email = record.email;
      self.phone = record.phone;
      self.company = record.company;
      self.website = record.website;
    },
  }));

export default UserModel;
