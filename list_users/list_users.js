import { getUsers } from "./https_request_get_user";
let input = document.getElementById("search")
let table = document.getElementById("table")
let allUsers =[]
function appendToTable(users){
  table.innerHTML=`
    <tr>
          <th>username</th>
          <th>password</th>
          <th>name</th>
    </tr>
  `
  users.forEach(user=>{
    let tr = document.createElement("tr")
    tr.innerHTML=`
          <th>${user.username}</th>
          <th>${user.password}</th>
          <th>${user.name}</th>
    `
    table.appendChild(tr)
  })
}
async function getUsersFromApi(){
  try {
    let {data} = await getUsers()
    if (data.code==200) {
      console.log(data.message)
      allUsers=data.userList
      appendToTable(allUsers)
    } else {
      console.log("get user error")
    }
  } catch (e) {
    console.log("send request error check network connection")
  }
}
getUsersFromApi()
function searchPhone(keyword){
  let newUsers=allUsers.filter((user) => user.username.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()))
  appendToTable(newUsers)
}
function searchName(keyword){
  let newUsers=allUsers.filter((user) => user.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()))
  appendToTable(newUsers)
}
input.addEventListener("input",(e)=>{
  let searchWord = e.target.value
  if (searchWord.startsWith("0")) {
    searchPhone(searchWord)
  }else{
    searchName(searchWord)
  }
})