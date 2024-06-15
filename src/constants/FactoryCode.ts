export const ShapeCode = `public interface Shape {
  void draw();
}`;

export const ractangleCode = `public class Rectangle implements Shape {
  @Override
  public void draw() {
    System.out.println("Inside Rectangle::draw() method.");
  }
}`;

export const SquareCode = `public class Square implements Shape {
  @Override
  public void draw() {
    System.out.println("Inside Square::draw() method.");
  }
}`;

export const CircleCode = `public class Circle implements Shape {
  @Override
  public void draw() {
    System.out.println("Inside Circle::draw() method.");
  }
}`;

export const ShapeFactoryCode = `public class ShapeFactory {
  // use getShape method to get an object of type shape
  public Shape getShape(String shapeType) {
    if (shapeType == null) {
      return null;
    }
    if (shapeType.equalsIgnoreCase("CIRCLE")) {
      return new Circle();
    } else if (shapeType.equalsIgnoreCase("RECTANGLE")) {
      return new Rectangle();
    } else if (shapeType.equalsIgnoreCase("SQUARE")) {
      return new Square();
    }
    return null;
  }
}`;

export const FactoyPatternDemoCode = `public class FactoryPatternDemo {
  public static void main(String[] args) {
    ShapeFactory shapeFactory = new ShapeFactory();
    // get an object of Circle and call its draw method.
    Shape shape1 = shapeFactory.getShape("CIRCLE");
    // call draw method of Circle
    shape1.draw();
    // get an object of Rectangle and call its draw method.
    Shape shape2 = shapeFactory.getShape("RECTANGLE");
    // call draw method of Rectangle
    shape2.draw();
    // get an object of Square and call its draw method.
    Shape shape3 = shapeFactory.getShape("SQUARE");
    // call draw method of circle
    shape3.draw();
  }
}`;
