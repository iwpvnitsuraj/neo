

function validateData(){console.log("innn");var e=document.getElementById("college").value,t=document.getElementById("team_name").value,a=document.getElementById("team_email").value,m=document.getElementById("members").value,n=document.getElementById("password").value,l="";if(""==e)l="College/Organisation Can't be empty";else if(""==t)l="Enter your team name";else if(""==a)l="Enter team's email";else if(""!=a){0==a.match(/^(\".*\"|[A-Za-z]\w*)@(\[\d{1,3}(\.\d{1,3}){3}]|[A-Za-z]\w*(\.[A-Za-z]\w*)+)$/)&&(l+="Your email address seems incorrect. Please try again.")}else""==m?l="Minimum 2 members required":n.length<8&&(l="Minimum 8 digit password");return""==l||($("#message").html(l),!1)}