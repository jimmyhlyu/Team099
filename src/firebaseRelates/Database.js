
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
    )
}



export function AddUser(dict){
    let data = new FormData();
    fetch(Url,{
        "method" : "POST",
        "headers" : {"Content-Type" : "application/json"},
        "body" : JSON.stringify(data),
    } ).then(
        response => {
            if(response.ok == true){
                console.log("User adding, Result: success");
            }
            else {
                console.log("User adding, Result: fail")
            }
        }
    )
}