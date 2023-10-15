// functions

function add(num1: number = 10, num2: number = 10): number {

    let result: number = num1 + num2;
    return result;

}

const values: number = add();
console.log(values);


function song(Song: string, singer?: string) {
    console.log(Song);

    if (singer) {
        console.log("heheherhehhhhhhhe");

    }


}
song("leo","Farhan")





function add1(num1: number = 10, num2: number = 10): number {

    let result: number = num1 + num2;
    return result;

}

const values1: number = add();
console.log(values1);


function song1(Song: string, singer?: string) {
    console.log(Song);

    if (singer) {
        console.log("heheherhehhhhhhhe");

    }


}
song1("leo","Farhan")


function Add(num:number, num1:number) {
    return num + num1;
}

Add(10,20)