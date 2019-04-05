import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, {shallow, mount} from 'enzyme';
import App from '../App.jsx';
import ListingList from '../ListingList.jsx';
import ListingListEntry from '../ListingListEntry.jsx';


describe('Component mounts and renders', () => {
  test ('Should mount and render', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toEqual(true);
  });
});

const review = {
  image: 'img',
  name: 'Stella',
  date: 'March 2020',
  reviewbody: 'this location is great!',
};

describe('listing entry', () => {
  test ('Should render a review', () => {
    const wrapper = shallow(<ListingListEntry review={review} />);
    console.log(wrapper.html())
    expect(wrapper.contains(<div>Stella</div>)).toEqual(true);
  });
});

const props = {
   listing: [
     {
       accuracy: 5,
       checkin: 2,
       cleanliness: 3,
       communication: 3,
       date: "October 2000",
       image: "https://s3.amazonaws.com/uifaces/faces/twitter/rpatey/128.jpg",
       location: 2,
       name: "Janie",
       reviewbody: "Aut et praesentium nisi sapiente dolor sed. Esse sunt sed aperiam adipisci dolorem. Numquam laborum accusamus quam enim quam hic ex. Facere ut beatae vel commodi alias nihil asperiores eveniet. Sint magnam ipsa quo. Autem aut quae quia. Beatae nostrum quia ducimus. Possimus iusto et aliquam voluptatum vero tempore. Rerum enim consequatur ratione sint ad dicta exercitationem sed assumenda. Modi adipisci placeat vel quia non sed et ipsum iste. Consequuntur sequi dolorem. Veritatis sapiente rerum officia. Dolores voluptatem modi. Est fuga eos rerum. Quo et vero cum. Laudantium fugiat similique necessitatibus labore debitis minus necessitatibus. Voluptas sunt sapiente enim rerum. Occaecati quia nemo ut ipsa.",
       value: 5 
     },
     {
       accuracy: 5,
       checkin: 2,
       cleanliness: 3,
       communication: 3,
       date: "October 2000",
       image: "https://s3.amazonaws.com/uifaces/faces/twitter/rpatey/128.jpg",
       location: 2,
       name: "Janie",
       reviewbody: "Aut et praesentium nisi sapiente dolor sed. Esse sunt sed aperiam adipisci dolorem. Numquam laborum accusamus quam enim quam hic ex. Facere ut beatae vel commodi alias nihil asperiores eveniet. Sint magnam ipsa quo. Autem aut quae quia. Beatae nostrum quia ducimus. Possimus iusto et aliquam voluptatum vero tempore. Rerum enim consequatur ratione sint ad dicta exercitationem sed assumenda. Modi adipisci placeat vel quia non sed et ipsum iste. Consequuntur sequi dolorem. Veritatis sapiente rerum officia. Dolores voluptatem modi. Est fuga eos rerum. Quo et vero cum. Laudantium fugiat similique necessitatibus labore debitis minus necessitatibus. Voluptas sunt sapiente enim rerum. Occaecati quia nemo ut ipsa.",
       value: 5, 
     }],
 };

 
describe('<ListingList />', () => {
  it('renders two components', () => {
     const wrapper = shallow(<ListingList {...props} />);
     expect(wrapper.exists()).toBe(true);
    });
  });

