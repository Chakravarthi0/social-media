import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "johndoe",
    createdAt: "2022-05-18T01:17:43+05:30",
    updatedAt: "2022-05-18T01:17:43+05:30",
  },
  {
    _id: uuid(),
    content:
      "At vero eos et accusamus etdeleniti atqsint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga",
    likes: {
      likeCount: 3,
      likedBy: ["johndoe", "janedoe", ""],
      dislikedBy: [],
    },
    username: "joedoe",
    createdAt: "2021-04-16T01:17:43+05:30",
    updatedAt: "2021-04-16T01:17:43+05:30",
  },
  {
    _id: uuid(),
    content: "Hello world",
    likes: {
      likeCount: 2,
      likedBy: ["janedoe", "johndoe", "milestones"],
      dislikedBy: [],
    },
    username: "janedoe",
    createdAt: "2022-03-18T01:17:43+05:30",
    updatedAt: "2022-03-18T01:17:43+05:30",
  },
  {
    _id: uuid(),
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum ",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "joedoe",
    createdAt: "2021-04-16T01:16:43+05:30",
    updatedAt: "2021-04-16T01:16:43+05:30",
  },
];
