// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// TODO: The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle{
  // TODO: Declare properties of the Motorbike class
  // TODO: The properties should include vin, color, make, model, year, weight, top speed, and wheels
  // TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[])
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  // Motorbikes either have one or two shock absorbers
  singleShockAbsorber: boolean;
  // Motorbikes either have two-stroke or four-stroke engines
  twoStrokeEngine: boolean;
  // Purposes may include: street, touring, off-road, racing, or trail
  purpose: string;
  // There are 26 types, including Electric, Scambler, and Sidecar
  type: string;
  
  // TODO: Create a constructor that accepts the properties of the Motorbike class
  // TODO: The constructor should call the constructor of the parent class, Vehicle
  // TODO: The constructor should initialize the properties of the Motorbike class
  // TODO: The constructor should check if the wheels array has 2 elements and create 2 new default Wheel objects if it does not
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    singleShockAbsorber: boolean,
    twoStrokeEngine: boolean,
    purpose: string,
    type: string,
  ) {
    super();
    // Initialize properties
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    if(wheels.length !== 2){
      this.wheels = [new Wheel(), new Wheel]
    } else {
      this.wheels = wheels;
    }
    this.singleShockAbsorber = singleShockAbsorber;
    this.twoStrokeEngine = twoStrokeEngine;
    this.purpose = purpose;
    this.type = type;
  }

  // TODO: Implement the wheelie method
    // TODO: The method should log the message "Motorbike [make] [model] is doing a wheelie!"

  // TODO: Override the printDetails method from the Vehicle class
  // TODO: The method should call the printDetails method of the parent class
  // TODO: The method should log the details of the Motorbike
  // TODO: The details should include the VIN, make, model, year, weight, top speed, color, and wheels
}

// Export the Motorbike class as the default export
export default Motorbike;
