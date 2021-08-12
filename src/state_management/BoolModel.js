import { types, flow } from "mobx-state-tree";

const BoolModel = types
  .model("BoolModel", {
    isViewModalVisible: (types.boolean, false),
    isTableLoading: (types.boolean, false),
  })
  .views((self) => ({}))
  .actions((self) => ({
    setViewModalVisible: flow(function* () {
      self.isViewModalVisible = !self.isViewModalVisible;
    }),
    setTableLoading: flow(function* () {
      self.isTableLoading = !self.isTableLoading;
    }),
  }));

export default BoolModel;
