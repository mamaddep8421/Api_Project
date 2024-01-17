import {register,login,addContact,getContacts} from "./httpRequests"
document.getElementById("form_register").addEventListener("submit",async (e)=>{
  e.preventDefault()
  let name = document.getElementById("name_register").value
  let username = document.getElementById("username_register").value
  let pass = document.getElementById("pass_register").value
  if (name&&pass&&username) {
    try {
      let {data} = await register(username,pass,name)
    if (data.code==200) {
      console.log("تبریک کاربر ایجاد شد")
      console.log(data.user)
    }
    } catch (e) {
      if (e.message.includes("400")) {
        console.log(e.response.data.message)
      }else if(e.message.includes("409")){
        console.log(e.response.data.message)
      }else{
        console.log("خطای غیر منتظره رخ داد")
      }
    }
  } else {
    alert("لطفا ورودی ها را به درستی پر کنید")
  }
})
document.getElementById("form_login").addEventListener("submit",async (e)=>{
  e.preventDefault()
  let username = document.getElementById("username_login").value
  let pass = document.getElementById("pass_login").value
  if (pass&&username) {
    try {
      let {data} = await login(username,pass)
      if (data.code==200) {
        alert(data.message)
        localStorage.setItem("auth",data.token)
      }
    } catch (e) {
      if (e.message.includes("400")) {
        console.log(e.response.data.message)
      }else{
        console.log("خطای غیر منتظره رخ داد")
      }
    }
  } else {
    alert("لطفا ورودی ها را به درستی پر کنید")
  }
})
document.getElementById("add_contact").addEventListener("submit",async (e)=>{
  e.preventDefault()
  let name = document.getElementById("name_add_contact").value
  let username = document.getElementById("username_add_contact").value
  if (localStorage.getItem("auth")) {
    if (name&&username) {
    try {
      let {data} = await addContact(localStorage.getItem("auth"),username,name)
      if (data.code==200) {
        console.log(data.message)
        console.log(data.contact)
      }
    } catch (e) {
      if (e.message.includes("404")||e.message.includes("409")||e.message.includes("400")) {
        console.log(e.response.data.message)
      } else {
        console.log("خطای غیر منتظره رخ داد")
      }
    }
  } else {
    alert("لطفا ورودی ها را به درستی پر کنید")
  }
  } else {
    alert("این بخش نیاز به ورود به حساب کاربری دارد پس وارد حساب خود شوید")
  }
})
document.getElementById("getContact").addEventListener("click",async (e)=>{
  e.preventDefault()
  if (localStorage.getItem("auth")) {
    try {
      let {data} = await getContacts(localStorage.getItem("auth"))
      if (data.code==200) {
        console.log(data.message)
        console.log(data.contactList)
        
      }
    } catch (e) {
      if (e.message.includes("404") || e.message.includes("400")) {
        console.log(e.response.data.message)
      }else{
        console.log("خطای غیر منتظره رخ داد")
      }
    }
  } else {
    alert("این بخش نیاز به ورود به حساب کاربری دارد پس وارد حساب خود شوید")
  }
})