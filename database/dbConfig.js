import mongoose from "mongoose";

const uri = "mongodb+srv://mgcalilongpdm:lZzNRkkDxsgEIh4D@cluster0.penn0ax.mongodb.net/Ngekflix?retryWrites=true&w=majority&appName=Cluster0I";

export default function dbConnect(server) {

    mongoose.set("strictQuery", true);

    mongoose.connect(uri).then(() => {
        server.listen(6969, () => {
            console.log("Listtening on 6969.@!@!#!@#@#!@#");
        })
    }).catch(err => console.log("Error occured: ", err));
}