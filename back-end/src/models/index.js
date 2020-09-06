import mongoose from 'mongoose';
import Product from './product';

const connectDb = () => {
    return mongoose.connect(process.env.DATABASE_URL, { useUnifiedTopology: true, useNewUrlParser: true });
};

const models = { Product };

export { connectDb };

export default models;