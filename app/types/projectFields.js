module.exports = {
  article: {
    id: '$_id',
    _id: 0,
    title: 1,
    cover: 1,
    content: 1,
    isPublished: 1,
    pv: 1,
    starCount: 1,
    tagIdList: 1,
    categoryID: 1,
    category: 1,
    createdAt: 1,
    updatedAt: 1,
  },
  articleCategory: {
    _id: 0,
    id: '$_id',
    name: 1,
    // publishedArticleCount: 1,
    articleIdList: 1,
    createdAt: 1,
    updatedAt: 1,
  },
  comment: {
    _id: 0,
    id: '$_id',
    content: 1,
    thumbupCount: 1,
    nickname: 1,
    updatedAt: 1,
    createdAt: 1,
  },
  guestbook: {
    _id: 0,
    id: '$_id',
    nickname: 1,
    content: 1,
    updatedAt: 1,
    createdAt: 1,
    dialogues: 1,
    diggCount: 1,
  },
  response: {
    _id: 0,
    id: '$_id',
    nickname: 1,
    content: 1,
    diggCount: 1,
    createdAt: 1,
  },
  tag: {
    id: '$_id',
    _id: 0,
    name: 1,
    articleIdList: 1,
    createdAt: 1,
    updatedAt: 1,
  },
}
