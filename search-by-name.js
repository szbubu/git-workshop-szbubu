// Task: Show the cat names that contains the given keyword. (It can be case sensitive).

// Execute: node search-by-name.js Cir

// Example: node searcg-by-name.js irm
//  it will outputs:
//    Cirmi
//    Cirmos



const catNames = ['Cirmi', 'Cirmos', 'Vakarcs', 'Butyok', 'Bubu']
//Mistake made didn't checkout to main
function main(keyword) {
    for(let catName of catNames){
        if (catName.includes(keyword)) {
        console.log(catName);
        }
    }
}

main(process.argv[2])

