import OrderModel from "./order.schema.js";

export const createNewOrderRepo = async (data) => {
  return await OrderModel.create(data);
};
