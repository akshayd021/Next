const {username , password} = process.env

export const connection = "mongodb+srv://"+ username+":"+password+"@cluster0.crkqw55.mongodb.net/sample_mflix?retryWrites=true&w=majority&appName=Cluster0"