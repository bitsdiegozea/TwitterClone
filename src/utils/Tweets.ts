/* eslint-disable no-sparse-arrays */
import {Tweet} from '../models/tweet';

export const tweets: Tweet[] = [
  {
    username: 'RequiemZ',
    tweetContentText: 'Creando mi twitter clone en react native.',
    image: true,
    timeElapsed: '1s',
    numOfComments: 146,
    numOfRetweets: 15,
    numOfLikes: 50,
    like: true,
  },
  {
    username: 'Pedro',
    tweetContentText:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab temporibus voluptates sit repellat. Quia, earum modi dolorum consequuntur possimus minima dolore consequatur magni nulla temporibus voluptates fuga voluptatem suscipit beatae!',
    image: false,
    timeElapsed: '1m',
    numOfComments: 146,
    numOfRetweets: 15,
    numOfLikes: 50,
    like: false,
  },
  {
    username: 'Andrea',
    tweetContentText: 'this is a tweet, thats it.',
    image: true,
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
    image: false,
    timeElapsed: '3h',
    numOfComments: 146,
    numOfRetweets: 15,
    numOfLikes: 50,
    like: false,
  },
];
