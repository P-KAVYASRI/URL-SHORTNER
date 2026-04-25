import mongoose from "mongoose";

const connectDb = async () => {
    try {
    const connect = await mongoose.connect("mongodb+srv://2200030534_db_user:Kavya%40123@cluster0.loufn3d.mongodb.net/?appName=Cluster0");
        console.log("Database connected: ",
            connect.connection.host,
            connect.connection.name
        );
    }catch (error) {
        console.log(error);
        process.exit(1);
    }
}; 
export default connectDb;
