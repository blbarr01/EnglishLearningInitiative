//Demo log in linked to .html  file.


var Students =[
    {
        username: "andrew",
        password: "EllieDemo"
    },
    {
        username: "matt",
        password: "EllieDemo"
    },
    {
        username: "michael",
        password: "EllieDemo"
    }

]
function getInfo(){
    var username= document.getElementById("username").value
    var password= document.getElementById("Password").value
    for(s=0;s< Students;s++){
        if(username == Students[s].username && password == Students[s].password)
        {
            console.log(username+ "Ellie Students Logged In!")
            return
        }
        }
        console.log("Incorrect username or passowrd! please try again !")
    }
       

