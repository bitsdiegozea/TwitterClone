export interface Tweet {
  username: string;
  tweetContentText: string;
  timeElapsed: string;
  numOfComments: number;
  numOfRetweets: number;
  numOfLikes: number;
  like: boolean;
  comments?: Tweet[];
  images?: any[];
}
