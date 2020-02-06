function Search(){

    document.getElementById("result-box").style.display="flex";

    let name=document.getElementById("SearchID").value;
    fetch(`https://api.github.com/search/users?q=${name}+in`)
        .then(res => res.json())
        .then(data =>{
            fetch(`https://api.github.com/users/${data.items[3].login}`)
                    .then(response=>response.json())
                    .then(dataa=>{
//console.log(dataa.avatar_url);
                            document.getElementById("UserImg").src=dataa.avatar_url;
                            document.getElementById("UserName").innerHTML=dataa.name;
                            document.getElementById("UserInfo").innerHTML=dataa.bio;
                            document.getElementById("UserVisit").href=dataa.html_url;
                            document.getElementById("UserExp").href=dataa.repos_url;
                            document.getElementById("UserVisit").innerHTML="Visit";
                            document.getElementById("UserExp").innerHTML="Explore";

                }) 
    })

}