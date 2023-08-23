import type { Post } from '~/types/Post';

export const postData: Post[] = [
  {
    id: 1,
    content: 'This is the content of the first post.',
    create_at: '2023-01-01T12:00:00Z',
    isRoot: true,
  },
  {
    id: 2,
    content: "Here's some more content for the second post.",
    create_at: '2023-01-02T14:00:00Z',
    isRoot: false,
  },
  {
    id: 3,
    content: 'Another day, another post. This is the third one.',
    create_at: '2023-01-03T09:00:00Z',
    isRoot: false,
  },
  {
    id: 4,
    content: "Fourth post's content is right here.",
    create_at: '2023-01-04T16:00:00Z',
    isRoot: true,
  },
  {
    id: 5,
    content: "Guess what? It's the fifth post!",
    create_at: '2023-01-05T11:00:00Z',
    isRoot: true,
  },
  {
    id: 6,
    content: 'Moving on with the sixth post.',
    create_at: '2023-01-06T13:00:00Z',
    isRoot: false,
  },
  {
    id: 7,
    content: "Lucky number seven. Here's the content for this post.",
    create_at: '2023-01-07T15:00:00Z',
    isRoot: true,
  },
  {
    id: 8,
    content: "Eighth post is here, and it's great!",
    create_at: '2023-01-08T17:00:00Z',
    isRoot: false,
  },
  {
    id: 9,
    content: "Ninth post's content. Almost at ten!",
    create_at: '2023-01-09T10:00:00Z',
    isRoot: false,
  },
  {
    id: 10,
    content: "Tenth post. We've hit double digits!",
    create_at: '2023-01-10T18:00:00Z',
    isRoot: true,
  },
];
