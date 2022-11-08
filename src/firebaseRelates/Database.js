
import {db} from "./Firestore";
import {collection, query, where, getDocs, setDoc} from "firebase/firestore";
import Friend from "./../Friend";
import {forEach} from "react-bootstrap/ElementChildren";
import {debug} from "prettier/doc";



const Url = new URL("https://jimmylyu.pythonanywhere.com/");
console.log(Url.protocol)

export function TestConnection(){
    let data = new FormData();
    fetch(Url,{
        "method" : "Get",
        "referrerPolicy": "no-referrer"
    } ).then(
        data => {
            data.text().then(
                text => {
                    console.log(text);
            }
            )
        }
    ).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Connecting Flask,Result: fails, Error message: " + errorMessage);
    });
}

export function AddUser(dict){
    let method = "user/add/" + JSON.stringify(dict)

    fetch(Url + method,{
        "method" : "POST",
        "referrerPolicy": "no-referrer",
        "headers" : {"Content-Type" : "application/json"},
    } ).then(
        response => {
            if(response.ok == true){
                console.log("User adding, Result: success");

            }
            else {
                console.log("User adding, Result: fail")
            }
        }
    ).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Adding friend,Result: fails, Error message: " + errorMessage);
    });
}

export function UpdateUser(id,dict){

    dict = {"name" : "changeName"}
    let method = "user/update/" + id +JSON.stringify(dict)
    fetch(Url + method,{
        "method" : "PATCH",
        "referrerPolicy": "no-referrer",
        "headers" : {"Content-Type" : "application/json"},
    } ).then(
        response => {
            if(response.ok == true){
                console.log("User updating, Result: success");
            }
            else {
                console.log("User updating, Result: fail")
            }
        }
    ).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("UpdatingUser Flask,Result: fails, Error message: " + errorMessage);
    });
}

export function GetUser(id){
    let data = new FormData();
    let method = "/user/get/" + id
    fetch(Url + method,{
        "method" : "Get"
    } ).then(data => {
            data.text().then(
                text => {
                    console.log("Get user result: " + text);
                }
            )
        }
    ).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Get user profile,Result: fails, Error message: " + errorMessage);
    });
}


export async function GetUserConnections(id) {
    let data = new FormData();
    let method = "connection/get/from_user/" + "IgVKqxXvJTZSa7wx0IjWKCx40uu1";
    const ref = collection(db, 'connectionHistory');
    const q = query(ref, where("connection.user_id", "==", id));
    const querySnapshot = await getDocs(q);
    let Friends = [];
    const allData = querySnapshot.docs.map((doc) => doc.data());

    let i = 0;
    while(i < allData.length){
        let data = allData[i];
        const promise = await GetConnectionScore(id, data.connection.id);


        const dictList = promise;
        Friends.push(Friend(data.connection.name, dictList["value"]["0"],dictList["intensity"]["0"],dictList["efficiency"]["0"],data.connection.id))
        i++;
    }

    return Friends;
}




export function AddConnection(id,dict){
    let method = "connection/add/" + id + "/" + JSON.stringify(dict);
    console.log("Add Connection: " + method);

    fetch(Url + method,{
        "method" : "POST",

        "headers" : {"Content-Type" : "application/json"},
    } ).then(
        response => {
            if(response.ok == true){
                console.log("Connection adding, Result: success");
            }
            else {
                console.log("Connection adding, Result: fail")
            }
            return "success";
        }
    ).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Connection adding,Result: fails, Error message: " + errorMessage);
        return error;
    });
    return null;
}

export  function GetConnectionScore(id, connectionId){
    let data = new FormData();
    let method = "connection/insights/timeline/" + id + "/" + connectionId;
    let newDict = {};
    return fetch(Url + method,{
        "method" : "Get",
        "referrerPolicy": "no-referrer",
    } ).then((data) => {
        return data.json();

        }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("GetConnectionScore,Result: fails, Error message: " + errorMessage);
    });


}

export function UpdateSurveyResult(connectionId, answer){
    answer["additional_hours"] = 0;
    let method = "connection/update/on_survey_submit/" + connectionId + "/" + JSON.stringify(answer);
    console.log(method)
    fetch(Url + method,{
        "method" : "PATCH",
        "headers" : {"Content-Type" : "application/json"},
    } ).then(data => {
            data.text().then(
                text => {
                    console.log(text);
                }
            )
        }
    ).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("UpdateSurveyResult,Result: fails, Error message: " + errorMessage);
    });
}