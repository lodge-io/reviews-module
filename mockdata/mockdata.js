const faker = require('faker');

const createUserReviews = () => {
  const listings = [];
  for (let x = 1; x <= 5; x += 1) {
    const userId = {
      id: x,
    };
    const reviews = [];
    listings.push(userId);
    const randomNumber = Math.random() * (20 - 9) + 9;
    for (let i = 0; i < randomNumber; i += 1) {
      const user = {
        name: faker.name.firstName(),
        date: `${faker.date.month()} ${faker.random.number({ min: 2000, max: 2019 })}`,
        image: faker.image.avatar(),
        reviewbody: faker.lorem.paragraph(15),
        accuracy: faker.random.number({ min: 2, max: 5 }),
        communication: faker.random.number({ min: 2, max: 5 }),
        cleanliness: faker.random.number({ min: 2, max: 5 }),
        location: faker.random.number({ min: 2, max: 5 }),
        checkin: faker.random.number({ min: 2, max: 5 }),
        value: faker.random.number({ min: 2, max: 5 }),
      };
      reviews.push(user);
    }
    userId.reviews = reviews;
  }
  return listings;
};


module.exports.createUserReviews = createUserReviews;
