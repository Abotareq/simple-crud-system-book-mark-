var nameLink=document.getElementById("SiteName");
var marklink= document.getElementById("MarkUrl");

var linkList=localStorage.getItem("links")?JSON.parse(localStorage.getItem("links")):[];
localStorage.getItem("links")?displayData():null;

function saveInfo()
{
var temp=
{
name:nameLink.value,
link:marklink.value
}
if (valdition(nameLink)&&valdition(marklink)) {
  linkList.push(temp);
localStorage.setItem("links",JSON.stringify(linkList));
console.log(linkList);
displayData();
}


}
function displayData()
{
var tempList=JSON.parse(localStorage.getItem("links"));   
console.log(tempList); 
var temp=" ";
for (let i = 0; i < linkList.length; i++) {
    temp+=`<tr>
                <th>${i}</th>
                <th>${tempList[i].name}</th>
                <th><button type="button" onclick="visitMark(${i})" class="btn btn-success"><i class="fa-regular fa-eye"></i> Visit</button>
                </th>
                <th><button type="button" onclick="deleteMark(${i})" class="btn btn-danger"><i class="fa-regular fa-trash-can"></i> Delete</button>
                </th>
              </tr>
            </tbody>`
    
}

document.getElementById("innerBody").innerHTML=temp;
}
function visitMark(index)
{

  window.open(linkList[index].link);

  }
function deleteMark(index)
{
linkList.splice(index,1);
localStorage.setItem("links",JSON.stringify(linkList));
displayData();
}

function valdition(element)
{
  var temptext=element.value;
var tempVal={
  SiteName:/^(\w|\W){3,}$/,
MarkUrl:/^(https:(\/\/)|(www\.))(www\.)*(\w|\W)+\.com$/gmi,

}
if(tempVal[element.id].test(temptext))
{
element.classList.add("is-valid");
element.classList.remove("is-invalid");
return true;
}
if(tempVal[element.id].test(temptext)!=true)
  {
  element.classList.remove("is-valid");
  element.classList.add("is-invalid");
  return false;
  }
}
