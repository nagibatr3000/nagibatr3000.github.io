var str = "";
var token = "";
function get_vars(){
    str = document.getElementById("name").value;
    token = document.getElementById("token").value;
}
function send(){
    get_vars();
    const msg = {
        "content": str,
        "username": false
    };
    console.log(msg)
    if(str == ""){
        console.log("error bruh")
        return false;
    }
   
    fetch(token + "?wait=true", {"method":"POST", "headers": {"content-type": "application/json"}, "body": JSON.stringify(msg)});

} 
