import mongoose from "mongoose";

const ConnectDb = (handler) => async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      return await handler(req, res);
    }

    await mongoose.connect(
      "mongodb+srv://akshay2004vbi:Akshay@cluster0.roeeaxk.mongodb.net/",
      // {
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
      // }
    );

    return await handler(req, res);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    // return res.status(500).json({ error: "Failed to connect to database" });
  }
};

export default ConnectDb;
