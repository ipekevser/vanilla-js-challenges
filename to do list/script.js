let respond = prompt("what do you want to do?");
let todoList = ["jhbjn", "ygjn", "hgjj", "hgjln"];
let num;

while (respond !== "quit") {
    if (respond === "new") {
        let newQuestion = prompt("what do you want to add to the list?");
        todoList.push(newQuestion);
        let num = 0;
        for (const element of todoList) {
            num++;
            console.log(`${num}. ${element}`);
        }
        console.log("test new", todoList);
    } else if (respond === "delete") {
        let deleteQuestion = prompt("which one do you want to remove from the list?");
        todoList.splice(parseInt.deleteQuestion, 1);
        let num = 0;
        for (const element of todoList) {
            num++;
            console.log(`${num}. ${element}`);
        }
        console.log("test delete", todoList);
    } else if (respond === "list") {
        // for(let i =0, i<todoList.lenght, i++) {console.log(todoList[i]);}
        let num = 0;
        for (const element of todoList) {
            num++;
            console.log(`${num}. ${element}`);
        }
        //console.log("test list", todoList);
    } else {
        console.log("Try again later.")
    }
    respond = prompt("what do you want to do?");
} console.log(`You quit`)


