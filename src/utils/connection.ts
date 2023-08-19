import {connect} from 'mongoose';

export const connectToDataBase = async ()=>{
    try {
        await connect(`mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster-free.0clb2wc.mongodb.net/?retryWrites=true&w=majority`)
    } catch (error) {
        return error;   
    }
}