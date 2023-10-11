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