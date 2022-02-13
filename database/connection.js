import mongoose from 'mongoose';

const dbConnection = async () => {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('Mongodb Connected'))
    .catch((error) => console.log('Not Connected', error));
};

export default dbConnection;
