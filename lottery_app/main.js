 
 let numbersArray = [];
 let input = 0;
 let view = 0;
 let numberOfKeys = 0;
 var numbersInKey = 0;
 var text = null;
 let newInputs = null;

 let inputs = document.getElementsByClassName('inputs');
 
 for(let u = 1; u <= 50; u++){
     newInputs = document.createElement('button')
     newInputs.setAttribute("Name", "button-number")
     newInputs.setAttribute("Value", u)
     text = document.createTextNode(u)
     newInputs.appendChild(text)
     inputs[0].appendChild(newInputs)
 }

 
 
 let counter = 0;
 let activebtn = 0;
 const btns = document.getElementsByName("button-number")
 test1 = document.querySelector('label[class="numberOfNumbers"]')
 console.log(btns)
 btns.forEach((btns) => {
     btns.classList.add("unchecked")
     btns.addEventListener("click", (e) => {
         console.log("tou aqui")
         ;
         
         console.log("o target está aqui" + e.currentTarget.value + " e o activebtn é " + activebtn.value)
         
         if((counter >= 0 && e.currentTarget.classList.value == "unchecked")){
             if(e.target.classList.value == "unchecked"){
                 activebtn = e.currentTarget;
                 e.target.classList.replace("unchecked", "checked")
                 numbersArray.push(e.currentTarget.value);
                 counter++;
             }
             console.log("o counter é " + counter + " e o activebtn " + activebtn.value)
             test1.textContent = "Select in least 9 numbers. You select " + counter + " numbers";
         } else if((e.currentTarget !== null)){
             activebtn = e.currentTarget
             console.log("o target está aqui2" + e.currentTarget.value + " e o activebtn é " + activebtn.value)
             if(e.target.classList.value == "checked"){
                 e.currentTarget.classList.replace("checked", "unchecked")
                 removeValue = e.currentTarget.value;
                 counter--;
                 test1.textContent = "Select in least 9 numbers. You select " + counter + " numbers";
                 removeItem(numbersArray, removeValue)
                 console.log("Aqui o current.target é " + e.currentTarget.value)
             }
             
             
             
         }
     })
 })

 function removeItem(numbersArray, value){
     let index = numbersArray.indexOf(value)
     if(index > 0){
         numbersArray.splice(index, 1);
     }
     return numbersArray
 }

 function verifyNumbers(){
     if(numbersArray.length <= 8){
         alert("You cannot continue because has risk repeating numbers! Adds in least 9 numbers or more than it. ")
     }else{
         generateRandom(numbersArray)
     }
 }
    
 console.log(numbersArray);
 function generateRandom() {
     //console.log(numbersArray);
     numberOfKeys = document.getElementById('howManyKeys');
     numberOfKeys = numberOfKeys.value;
     
     let newArrayOfArrays = [];
     let j = "";
     let k = "";
     let count = 0;        
     let stars = [];
     let radio = document.querySelector('input[name="type-game"]:checked').value
     if(radio == "totoloto"){
         stars = Math.floor(Math.random() * (13 - 1) + 1)
     }else{
         for(let o = 0; o <= 2-1; o++){
             star= Math.floor(Math.random() * (13 - 1) + 1)
             stars.push(star);
         }
     }

     //numberOfPermutations = permutations(numbersArray.length);
     for(let r = 0; r < numberOfKeys; r++){
         numbersArray = permutations(numbersArray)
         //console.log(typeof(numbersInKey))
         newArray = createArrayOfArrays(numbersArray, radio)
         console.log(newArray = newArray.concat(stars))
         //console.log(newArray)
         if(r == 0){
             newArrayOfArrays.push(newArray);
             console.log(equalsElementsArray(newArray))
         }else if(r >= 1){
             newArrayOfArrays.push(newArray);
             console.log(equalsElementsArray(newArray))
             console.log(equalsIgnoreOrderArrays(newArrayOfArrays[r-1], newArrayOfArrays[r]))
         }
         
     }         
     console.log(numbersArray)
     console.log(newArrayOfArrays)
     showKeys(newArrayOfArrays)
 }

 //ta uma confusao aqui...

 function createArrayOfArrays(numbersArray, radio){
     let newArray = [];

     //let radio = document.querySelector('input[name="type-game"]:checked').value
     if(radio == "totoloto"){
         numbersInKey = 5;
         
     }else{
         numbersInKey = 5;
     }

     //console.log(typeof(numbersInKey))
     for(let x = 0; x < numbersInKey; x++){
         newArray.push(numbersArray[x]);  
     }
     return newArray;
 }


 function permutations(numbersArray){
     for(let i = numbersArray.length -1; i > 0; i--){
         j = Math.floor(Math.random() * i);
         k = numbersArray[i];
         numbersArray[i] = numbersArray[j]
         numbersArray[j] = k
     }
     return numbersArray
 }

 // falta me fazer isto....

 const equalsElementsArray = (array) => {
     for(let i = 0; i <= array.length; i++){
         let blockNumber = array[i]
         for(let y = 0; y <= array.length; y++){
             if(i === y) {

             }else{
                 equals = array[i] === array[y]
             }
         }
     }
     return false
 }

 const equalsIgnoreOrderArrays = (a, b) => {
     if (a.length !== b.length) return false;
     //console.log(a + b)
     const uniqueValues = new Set([...a, ...b]);
     for (const v of uniqueValues) {
         const aCount = a.filter(e => e === v).length;
         const bCount = b.filter(e => e === v).length;
         if (aCount !== bCount) return false;
     }
     return true;
     }
 
 function cleanKeys(){
    const container = document.getElementById('print-keys')   

    const childContainer = document.getElementsByClassName('output-lable')   
     
    while(container.hasChildNodes()){
     container.removeChild(container.firstChild);
    }
     
    } 

 function resetGenerator(){
     window.location.reload()
 }
 
 function showKeys(newArrayOfArrays){
     let rightArea = document.getElementsByClassName('right')
     let outputArea = document.getElementsByClassName('print-keys');
     let outputLabel = document.getElementsByClassName('output-label')
     let newList = document.createElement('ul')
     let newItem = null;
     let newDiv = null;
     let newIcon = null;
     let newImg = null;
     let newText = null;
     let starText = null;
     let counter = 0;
     for(let y = 0; y <= newArrayOfArrays.length-1; y++){
         let actualArray = newArrayOfArrays[y]
         newItem = document.createElement('li')
         newDiv = document.createElement('div')
         newDiv.setAttribute("class", "container")
         for(let i = 0; i <= actualArray.length-1; i++){

             if(actualArray.length == 6){
                 if(i < actualArray.length-1){
                 text = document.createElement('label')
                 text.setAttribute("class", "text-ball")
                 text.setAttribute("value", actualArray[i])
                 text.innerHTML = actualArray[i]
                 newDiv.appendChild(text)    
                 console.log("tou a passar aqui" + i)
             }

             if(i == 5){
                     starText = document.createElement('label')
                     starText.setAttribute("class", "text-star")
                     starText.setAttribute("value", actualArray[i])
                     console.log("so uma vez")
                     starText.innerHTML = actualArray[i]
                     newDiv.appendChild(text)    
                     newDiv.appendChild(starText)  
             }
             }else if(actualArray.length == 7){
                 if(i < actualArray.length-2){
                 text = document.createElement('label')
                 text.setAttribute("class", "text-ball")
                 text.setAttribute("value", actualArray[i])
                 text.innerHTML = actualArray[i]
                 newDiv.appendChild(text)    
                 console.log("tou a passar aqui" + i)
             }
             if(i >= 5){
                     starText = document.createElement('label')
                     starText.setAttribute("class", "text-star")
                     starText.setAttribute("value", actualArray[i])
                     console.log("so uma vez" + i)
                     starText.innerHTML = actualArray[i]
                     
                     //newDiv.appendChild(text)  
                     newDiv.appendChild(starText)    
                     
             }
             }       
            
                  
                 
             newItem.appendChild(newDiv)
             newList.appendChild(newItem)
         }

         
         
         outputArea[0].appendChild(newList)
         console.log(typeof(outputArea))
         
     }

     console.log("so para ver " + newArrayOfArrays)
 }