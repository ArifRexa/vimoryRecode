const services = ["arif","reza", "lalu"]
const servicesId = document.getElementById("services")
const manue = (myArray) => {
    for (let i = 0; i < myArray.length; i++) {
        const element = myArray[i];
        servicesId.innerHTML = `<h1>${element}</h1>`
        console.log(element);
        if (i <= (myArray.length-2) ) {
            console.log("|");
        }
        
    }
    
}
// return 0;

console.log(manue(services));

