// Ajax
// Lesson 3


var userList = document.getElementById("userList");


let loadUsers = () => {
    // Create XMLHttpRequest
    let xhr = new XMLHttpRequest;

    // Get Data
    xhr.open("GET","https://api.github.com/users")

    // What work when loaded?
    xhr.onload = () => {
        
        // When connecting is ok!
        if(xhr.status == 200){
            
            // Create JS code form JSON data reveived in database
            var users = JSON.parse(xhr.responseText);
            
            // Create Loop
            for (let user in users) {
                var li = document.createElement("li");
                li.className = "users";
                
                var img = document.createElement("img");
                img.setAttribute("src",users[user].avatar_url);
                li.append(img);

                var h3 = document.createElement("h3");
                h3.innerHTML = users[user].login;
                li.append(h3);

                userList.append(li);
            };
            console.log("EveryThing Well.");

        } else{
            console.log("Connecting Lost...!");
        };
    };

    xhr.send();
};


loadUsers();