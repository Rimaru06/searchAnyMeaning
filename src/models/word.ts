import mongoose ,{Document} from "mongoose";
import wordSearch from "../types/wordType.js";

interface wordOrSearch extends wordSearch , Document {}

const WordSchema = new mongoose.Schema<wordOrSearch>({
    WordOrSentence : {type : String , required : true , unique : true},
    Meaning : {type  : String , required : true},
    CreatedAt : {type  : Date , default : Date.now}
})

const WordModel = mongoose.model<wordOrSearch>("WordSentence",WordSchema);

export default WordModel;

