const pi = 3.14;

const calculateArea = (choice,side,length,breadth,radius) =>{   
    let area = 0.0; 
    // write logic here
    // note that you check the values passed are not null before performing any operation on them
    switch (choice) {
        case 'square':
            if(side != null || side > 0){
                return side*side;
            }else{
                return -1;
            }
            break;
        case 'circle':
            if (radius > 0 || radius != null) {
                return 3.14 * radius * radius
            } else {
                return -1;
            }

        break;
        case 'rectangle':
            if(length != null || length<= 0 || breadth != null || breadth <= 0){
                return length * breadth;
            }else {
                return -1;
            }
        break;
    
        default:
            return -1;
    }
    return area
}
module.exports = {calculateArea}
