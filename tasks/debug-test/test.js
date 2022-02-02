const printWord = function (){
    let number = 4;
    let str = "";
    console.log("test");
    console.log("Hello world!")
    for(i = 0; i < 5; i++) {
        console.log(i);
        number = number + 2;
        str = str + i;
    }
    return "word";
};


printWord();