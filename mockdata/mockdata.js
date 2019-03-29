const faker = require('faker');

const createUserReview = () => {
  const reviews = [];
  for (let x = 1; x <= 100; x += 1) {
    const userId = {
      id: x,
    };
    const array = [];
    reviews.push(userId);
    const randomNumber = Math.floor(Math.random() * Math.floor(15));
    for (let i = 0; i < randomNumber; i += 1) {
      const user = {
        name: faker.name.firstName(),
        date: `${faker.date.month()} ${faker.random.number({ min: 2000, max: 2019 })}`,
        image: faker.image.avatar(),
        reviewbody: faker.lorem.paragraph(),
        accuracy: faker.random.number(5),
        communication: faker.random.number(5),
        cleanliness: faker.random.number(5),
        location: faker.random.number(5),
        checkin: faker.random.number(5),
        value: faker.random.number(5),
      };
      array.push(user);
    }
    userId.reviews = array;
  }
  return reviews;
};


module.exports.createUserReview = createUserReview;
