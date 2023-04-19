import mongoose from "mongoose";

export default {
  dbInit: async () => {
    await mongoose.connect(process.env.MONGODB_URL);
  }, 

  getDbCollection: async (model) => {
    const getColl = await model.find();
    return getColl;
  },

  postDbModel: async (model, obj) => {
    const postModel = await new model(obj);
    await postModel.save();
  },
};
