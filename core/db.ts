import mongoose from 'mongoose';

mongoose.Promise = Promise;

mongoose.connect(process.env.DB_URL || 'mongodb://127.0.0.1:27017/twitter');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

export { db, mongoose };
