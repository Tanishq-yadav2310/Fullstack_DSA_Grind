class Rectangle {
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    area() {
        const area = this.width * this.height;
        return area;
    }

    paint() {
        console.log(`painting the shape with ${this.color}`);
    }
}

const rect = new Rectangle(2,3,"blue");
const area = rect.area();
const paint = rect.paint();
console.log(area)
console.log(paint);
