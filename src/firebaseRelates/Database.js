
let Url = " http://127.0.0.1:5000/";



export function TestConnection(){
    let data = new FormData();
    fetch(Url,{
        "method" : "Get"
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
    id = "100001"
    id = id + "/"
    dict = {"name" : "changeName"}
    let method = "user/update/" + id +JSON.stringify(dict)
    fetch(Url + method,{
        "method" : "PATCH",
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


