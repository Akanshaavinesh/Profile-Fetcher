var pageno =1;
let result=``;
let check=0;
let totalpage=0;

function Mainsearch(){

    document.getElementById("main").style.display="flex";

    let name=document.getElementById("SearchID").value;

    fetch(`https://api.github.com/search/users?q=${name}+in&per_page=20&page=${pageno}`)
    .then(res=>res.json())
        .then(data=>{
            const {total_count} =data;
            check = total_count;
            if(pageno!=1)
            {
                result=``;
            }
            totalPage=Math.ceil(check/20);

            if(pageno<totalPage && pageno>=1)
            {
           
            data.items.forEach((user) => { 

                const {login}=user;
                fetch(`https://api.github.com/users/${login}`)
                    .then(response=>response.json())
                    .then(dataa=>{
                            result+=`
                            <div id="result-box">
                                <img src="${dataa.avatar_url}" atl="" name="UserImg" id="UserImg">
                                <h2 id="UserName">${dataa.name}</h2>
                                <h4 id="UserInfo">${dataa.created_at}</h4>
                                <a href="${dataa.html_url}" id="UserVisit" target="_blank">Visit</a>
                                <a href="https://github.com/${dataa.login}?tab=repositories" id="UserExp" target="_blank">Explore</a>
                            </div>`;

                document.getElementById("main").innerHTML=result;
                document.getElementById("main").style.display="flex";

                })
                


            })
        }
        else{
            document.getElementById("main").innerHTML=`<h2>no more result found</h2>`

        }

        })
        

        }
        function NextPage(){
            pageno+=1;
            result=``;
            Mainsearch();
        }

        function prevPage()
        {
            if(pages>1)
            {
                pageno-=1;
                result=``;
                Mainsearch();
            }
                else{
                    pageno =pageno;
                }
            }

        
    

           