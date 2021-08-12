import { types } from "mobx-state-tree";

const BoolModel = types
  .model("BoolModel", {
    isViewModalVisible: (types.boolean, false),
    isTableLoading: (types.boolean, false),
  })
  .views((self) => ({}))
  .actions((self) => ({
    setViewModalVisible() {
      self.isViewModalVisible = !self.isViewModalVisible;
    },
    setTableLoading() {
      self.isTableLoading = !self.isTableLoading;
    },
  }));

export default BoolModel;
