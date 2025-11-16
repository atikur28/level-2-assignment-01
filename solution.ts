const formatValue = (value: string | number | boolean) => {
  if (typeof value === "string") {
    return (value = value.toUpperCase());
  } else if (typeof value === "number") {
    return (value = value * 10);
  } else if (typeof value === "boolean") {
    return (value = !value);
  } else {
    console.log("Invalid input!");
  }
};

const getLength = (value: string | any[]) => {
  if (typeof value === "string") {
    const length: number = value.length;
    return length;
  } else if (Array.isArray(value)) {
    return value.length;
  } else {
    console.log("Invalid input!");
  }
};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

type Items = {
  title: string;
  rating: number;
};

const filterByRating = (items: Items[]): Items[] => {
  return items.reduce((acc, item) => {
    if (item.rating >= 4) {
      acc.push(item);
    }
    return acc;
  }, [] as Items[]);
};
