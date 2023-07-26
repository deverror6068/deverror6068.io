

let subject1 = document.querySelector(".java")
let subject2 = document.querySelector('.golang')
let subject3 = document.querySelector('.python')
let subject4 = document.querySelector('.front')
let subject5 = document.querySelector('.back')

let moto = document.getElementById('first-quote')
moto.addEventListener("mouseover",Experience)

let name1 = document.querySelector('[name="2"]')
let name2 = document.querySelector('[name="3"]')
let name3 = document.querySelector('[name="4"]')
let name4 = document.querySelector('[name="5"]')
let name5 = document.querySelector('[name="6"]')


subject1.addEventListener("mouseover",displaysubject1)
subject2.addEventListener("mouseover",displaysubject2)
subject3.addEventListener("mouseover",displaysubject3)
subject4.addEventListener("mouseover",displaysubject4)
subject5.addEventListener("mouseover",displaysubject5)
subject6.addEventListener("mouseover",displaysubject6)

function displaysubject1(){
    console.log('ca marche')
    console.log(name1)
   // subject1.style.transform = "rotateY(360deg)"
   subject1.style.transform = " translate(0.01rem, -150%)"
    subject1.style.transition ="1s" 
    name1.style.visibility = "visible"
    name1.style.transform = " translate(-20rem, 10%)"
    name1.style.transition ="1s" 
   setTimeout(() =>{    subject1.style.transform = " translate(0.01rem, 0%)"
   name1.style.transition ="2s"},1000)
 
}

function displaysubject2(){
    console.log('java')
    subject2.style.transform = " translate(0.01rem, -150%)"
    subject2.style.transition ="1s" 
    name2.style.visibility = "visible"
    name2.style.transform = " translate(-20rem, 10%)"
    name2.style.transition ="1s" 
   setTimeout(() =>{    subject2.style.transform = " translate(0.01rem, 0%)"
   name2.style.transition ="2s"},1000)
 
}

function displaysubject3(){
    console.log('golang')
    console.log('java')
    subject3.style.transform = " translate(0.01rem, -150%)"
    subject3.style.transition ="1s" 
    name3.style.visibility = "visible"
    name3.style.transform = " translate(-20rem, 10%)"
    name3.style.transition ="1s" 
   setTimeout(() =>{    subject3.style.transform = " translate(0.01rem, 0%)"
   name3.style.transition ="2s"},1000)
 
}

function displaysubject4(){
    console.log('python')
    subject4.style.transform = " translate(0.01rem, -150%)"
    subject4.style.transition ="1s" 
    name4.style.visibility = "visible"
    name4.style.transform = " translate(-20rem, 10%)"
    name4.style.transition ="1s" 
   setTimeout(() =>{    subject4.style.transform = " translate(0.01rem, 0%)"
   name4.style.transition ="2s"},1000)
}

function displaysubject5(){
    console.log('front')
    subject5.style.transform = " translate(0.01rem, -150%)"
    subject5.style.transition ="1s" 
    name5.style.visibility = "visible"
    name5.style.transform = " translate(-20rem, 10%)"
    name5.style.transition ="1s" 
   setTimeout(() =>{    subject5.style.transform = " translate(0.01rem, 0%)"
   name5.style.transition ="2s"},1000)
}




function Experience(){
    subject1.style.transform = " translate(0.01rem, -150%)"
    subject1.style.transition ="1s" 
    name1.style.visibility = "visible"
    name1.style.transform = " translate(-20rem, 10%)"
    name1.style.transition ="1s" 
   setTimeout(() =>{    subject1.style.transform = " translate(0.01rem, 0%)"
   name1.style.transition ="2s"},1000)
    console.log('java')
    subject2.style.transform = " translate(0.01rem, -150%)"
    subject2.style.transition ="1s" 
    name2.style.visibility = "visible"
    name2.style.transform = " translate(-20rem, 10%)"
    name2.style.transition ="1s" 
   setTimeout(() =>{    subject2.style.transform = " translate(0.01rem, 0%)"
   name2.style.transition ="2s"},1000)
    console.log('golang')
    console.log('java')
    subject3.style.transform = " translate(0.01rem, -150%)"
    subject3.style.transition ="1s" 
    name3.style.visibility = "visible"
    name3.style.transform = " translate(-20rem, 10%)"
    name3.style.transition ="1s" 
   setTimeout(() =>{    subject3.style.transform = " translate(0.01rem, 0%)"
   name3.style.transition ="2s"},1000)
    subject4.style.transform = " translate(0.01rem, -150%)"
    subject4.style.transition ="1s" 
    name4.style.visibility = "visible"
    name4.style.transform = " translate(-20rem, 10%)"
    name4.style.transition ="1s" 
   setTimeout(() =>{    subject4.style.transform = " translate(0.01rem, 0%)"
   name4.style.transition ="2s"},1000)
    subject5.style.transform = " translate(0.01rem, -150%)"
    subject5.style.transition ="1s" 
    name5.style.visibility = "visible"
    name5.style.transform = " translate(-20rem, 10%)"
    name5.style.transition ="1s" 
   setTimeout(() =>{    subject5.style.transform = " translate(0.01rem, 0%)"
   name5.style.transition ="2s"},1000)

}
function displaysubject6(){
    console.log('backend')
}



