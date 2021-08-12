import { flow, types } from "mobx-state-tree";
import UserModel from "./UserModel";
import BoolModel from "./BoolModel";

const RootStore = types
  .model("RootStore", {
    users: types.optional(types.array(UserModel), []),
    user: types.optional(UserModel, {}),
    bool: types.optional(BoolModel, {}),
  })
  .views((self) => ({}))
  .actions((self) => ({
    setUsers: flow(function* (newUsers) {
      self.users = newUsers;
    }),
    async getUsers() {
      const data = await fetchUsers();
      const newUsers = data.map((user) => ({
        id: `${user.id}`,
        key: `${user.id}`,
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone,
        company: user.company.name,
        website: user.website,
      }));
      self.setUsers(newUsers);
    },
  }));

const USERS_URL = "https://jsonplaceholder.typicode.com/users";
const fetchUsers = async () => {
  const res = await fetch(USERS_URL);
  const data = await res.json();
  return data;
};

export default RootStore;
