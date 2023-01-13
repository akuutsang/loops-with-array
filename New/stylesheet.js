const contacts = ["Abi: 2181088",
 "Cate: 2106453",
 "Jenny : 2109764",
 "Joseph: 2183082",
 "Victoria: 2167457", "Younan: 2164537"];

 const para = document.querySelector("P");
 const input = document.querySelector(".input");
 const btn = document.querySelector(".button");

 btn.addEventListener("click", () => {
    const searchName = input.value.toLowerCase();
    input.value = " ";
    input.focus();
    para.textContent = " ";
    for (const contact of contacts){
        const splitContact = contact.split(":");
        if (splitContact[0].toLowerCase() === searchName){
            para.textContent =
            `${splitContact[0]}'s number is ${splitContact[1]}.`
                   break;
                }          
        }
        if(para.textContent === " "){
            para.textContent = "cContact not found.";
        }
 });

