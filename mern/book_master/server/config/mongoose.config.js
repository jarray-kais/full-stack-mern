import { connect } from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const MONGO_URI = process.env.MONGO_URI
// Connect to MongoDB
async function dbconnect() {
    try {
        await connect(MONGO_URI , {
            dbName: 'newdb',
        })
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (error) {
        console.log(error);
        throw error;
    }
}
export default dbconnect ;