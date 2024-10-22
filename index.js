
const system = 
[
    {maxValue : 50 , point : "F"},
    {maxValue : 65 , point : "D"},
    {maxValue : 75 , point : "C"},
    {maxValue : 85 , point : "B"},
    {maxValue : 100 , point : "A"},
]

function getPoint(userPoint){

    let grade;

    switch(true)
    {
        case 0 <= userPoint && userPoint <= system[0].maxValue:
            grade = system[0].point;
            break;
    
        case system[0].maxValue <= userPoint && userPoint <= system[1].maxValue:
            grade = system[1].point;
            break;
    
        case system[1].maxValue <= userPoint && userPoint <= system[2].maxValue:
            grade = system[2].point;
            break;    
            
        case system[2].maxValue <= userPoint && userPoint <= system[3].maxValue:
            grade = system[3].point;
            break;    
    
        case system[3].maxValue <= userPoint && userPoint <= system[4].maxValue:
            grade = system[4].point;
            break;              
    }

    console.log(`Student grade is ${grade}`)
}

getPoint(99);

