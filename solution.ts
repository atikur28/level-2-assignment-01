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
  const result1: Value[] = [...new Set(array1)];
  const result2: Value[] = [...new Set(array2)];

  const fullArray: Value[] = [...result1, ...result2];

  const finalArray = fullArray.reduce((acc, value): Value[] => {
    if (!acc.includes(value)) {
      acc.push(value);
    }

    return acc;
  }, [] as Value[]);

  console.log(finalArray);
};
