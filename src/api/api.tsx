/* eslint-disable no-sparse-arrays */
import {Tweet} from '../models/tweet';
import {images} from '../utils/data';

export const tweets: Tweet[] = [
  {
    username: 'Diego',
    tweetContentText: 'Creando mi twitter clone en react native.',
    timeElapsed: '1s',
    numOfComments: 146,
    numOfRetweets: 15,
    numOfLikes: 50,
    like: true,
    images: [images[2], images[1], images[0], images[3]],
    comments: [
      {
        username: 'Pedro',
        tweetContentText:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab temporibus voluptates sit repellat. Quia, earum modi dolorum consequuntur possimus minima dolore consequatur magni nulla temporibus voluptates fuga voluptatem suscipit beatae!',
        timeElapsed: '1m',
        numOfComments: 146,
        numOfRetweets: 15,
        numOfLikes: 50,
        like: false,
      },
      {
        username: 'Andrea',
        tweetContentText: 'this is a tweet, thats it.',
        timeElapsed: '2h',
        numOfComments: 146,
        numOfRetweets: 15,
        numOfLikes: 50,
        like: true,
      },
      {
        username: 'Paula',
        tweetContentText:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab temporibus voluptates sit repellat. Quia, earum modi dolorum consequuntur possimus minima dolore consequatur magni nulla temporibus voluptates fuga voluptatem suscipit beatae!',
        timeElapsed: '3h',
        numOfComments: 146,
        numOfRetweets: 15,
        numOfLikes: 50,
        like: false,
      },
    ],
  },
  {
    username: 'Pedro',
    tweetContentText:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab temporibus voluptates sit repellat. Quia, earum modi dolorum consequuntur possimus minima dolore consequatur magni nulla temporibus voluptates fuga voluptatem suscipit beatae!',
    timeElapsed: '1m',
    numOfComments: 146,
    numOfRetweets: 15,
    numOfLikes: 50,
    like: false,
    comments: [
      {
        username: 'Pedro',
        tweetContentText:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab temporibus voluptates sit repellat. Quia, earum modi dolorum consequuntur possimus minima dolore consequatur magni nulla temporibus voluptates fuga voluptatem suscipit beatae!',
        timeElapsed: '1m',
        numOfComments: 146,
        numOfRetweets: 15,
        numOfLikes: 50,
        like: false,
      },
      {
        username: 'Andrea',
        tweetContentText: 'this is a tweet, thats it.',
        timeElapsed: '2h',
        numOfComments: 146,
        numOfRetweets: 15,
        numOfLikes: 50,
        like: true,
      },
      {
        username: 'Paula',
        tweetContentText:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab temporibus voluptates sit repellat. Quia, earum modi dolorum consequuntur possimus minima dolore consequatur magni nulla temporibus voluptates fuga voluptatem suscipit beatae!',
        timeElapsed: '3h',
        numOfComments: 146,
        numOfRetweets: 15,
        numOfLikes: 50,
        like: false,
      },
    ],
  },
  {
    username: 'Andrea',
    tweetContentText: 'this is a tweet, thats it.',
    timeElapsed: '2h',
    numOfComments: 146,
    numOfRetweets: 15,
    numOfLikes: 50,
    like: true,
    images: [images[1], images[3]],
  },
  {
    username: 'Paula',
    tweetContentText:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab temporibus voluptates sit repellat. Quia, earum modi dolorum consequuntur possimus minima dolore consequatur magni nulla temporibus voluptates fuga voluptatem suscipit beatae!',
    timeElapsed: '3h',
    numOfComments: 0,
    numOfRetweets: 0,
    numOfLikes: 0,
    like: false,
    comments: [],
    images: [images[1]],
  },
];
