const formatValue = (
  value: string | number | boolean
): string | number | boolean => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return !value;
  } else {
    throw new Error("Invalid input!");
  }
};

const getLength = (value: string | any[]): number => {
  if (typeof value === "string") {
    const length: number = value.length;
    return length;
  } else if (Array.isArray(value)) {
    return value.length;
  } else {
    throw new Error("Invalid input!");
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

type Users = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers = (users: Users[]): Users[] => {
  return users.reduce((acc, user) => {
    if (user.isActive === true) {
      acc.push(user);
    }

    return acc;
  }, [] as Users[]);
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book) => {
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${
      book.publishedYear
    }, Available: ${book.isAvailable === true ? "Yes" : "No"}`
  );
};

type Value = string | number;

const getUniqueValues = (array1: Value[], array2: Value[]) => {
  const result: Value[] = [];

  for (let i = 0; i < array1.length; i++) {
    let isUnique = true;
    for (let j = 0; j < result.length; j++) {
      if (array1[i] === result[j]) {
        isUnique = false;
        break;
      }
    }
    if (isUnique) result.push(array1[i]);
  }

  for (let i = 0; i < array2.length; i++) {
    let isUnique = true;
    for (let j = 0; j < result.length; j++) {
      if (array2[i] === result[j]) {
        isUnique = false;
        break;
      }
    }
    if (isUnique) result.push(array2[i]);
  }

  return result;
};

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice = (products: Product[]) => {
  return products.reduce((acc, product) => {
    const { price, quantity, discount } = product || {};

    let productTotal = price * quantity;

    if (discount && discount > 0 && discount <= 100) {
      productTotal -= (productTotal * discount) / 100;
    }

    acc += productTotal;

    return acc;
  }, 0);
};
