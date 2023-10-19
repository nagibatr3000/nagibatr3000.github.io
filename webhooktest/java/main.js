var str = "";
var token = "";
function get_vars(){
    str = "g";
    token = "https://discord.com/api/webhooks/1164626833992585226/MumJ54YWcs06mGA-5JraYjgJiAB_W1IzmRx4mtr_5CXw2quIPauI0CuTys887U6ls4q1";
}
function send(){
    get_vars();
    const msg = {
        "content": str
    };
    console.log(msg)
    if(str == ""){
        console.log("error bruh")
        return false;
    }
   
    fetch(token + "?wait=true", {"method":"POST", "headers": {"content-type": "application/json"}, "body": JSON.stringify(msg)});

} 
