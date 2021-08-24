//actions are just objects 

//when writing actions in redux we create something called action creator function that return an object

//action creator->incrementCounter
export const incrementCounter=()=>{
    //returning an object
    return{
        type:"INCREMENT"
    }
}

