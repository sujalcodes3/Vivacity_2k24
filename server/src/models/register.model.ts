import { Schema, model, Types } from 'mongoose';

interface normalUser {
    name : string,
    mobile : number,
    email : string,
    university : string,
    referralCode : string,
    participant : boolean,
    eventInfo : Types.DocumentArray<eventdetails>
}
interface eventdetails {
    category : string,
    eventName : string,
    // teamSize : number,
    captain : boolean,
    captainName : string,
    // teamMembers : string[]

}

const userSchema = new Schema<normalUser>({
    name : {type : String, required : true},
    mobile : {type : Number, required : true},
    email : {type : String, required : true},
    university : {type : String, required : true},
    referralCode : {type : String, required : false},
    participant : {type : Boolean, required : true},
    eventInfo : [{
        category : String,
        eventName : String,
        teamSize : Number,
        captain : Boolean,
        captainName : String,
        teamMembers : Array<String>,
    },]

})

const normalUser = model<normalUser>('NormalUser',userSchema);

export default normalUser 