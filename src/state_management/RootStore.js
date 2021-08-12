import { flow, types } from "mobx-state-tree";
import UserModel from "./UserModel";
import BoolModel from "./BoolModel";
import axios from "axios";

const RootStore = types
  .model("RootStore", {
    users: types.optional(types.array(UserModel), []),
    user: types.optional(UserModel, {}),
    bool: types.optional(BoolModel, {}),
    url: types.optional(types.string, "/api/users"),
  })
  .views((self) => ({}))
  .actions((self) => ({
    setUsers(newUsers) {
      self.users = newUsers;
    },
    getUsers: flow(function* () {
      self.bool.setTableLoading();
      const data = yield fetchUsers(self.url);
      const newUsers = data.map((user) => ({
        id: `${user.id}`,
        key: `${user.id}`,
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone,
        company: user.company,
        website: user.website,
      }));
      self.setUsers(newUsers);
      self.bool.setTableLoading();
    }),
  }));

const fetchUsers = async (url) => {
  const res = await axios.get(`${url}`);
  return res.data;
};

export default RootStore;
