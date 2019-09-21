const { Service } = require('egg')
const mongoose = require('mongoose')
const { ObjectId } = mongoose.Types
const ArticleModel = require('../model/article')
const CategoryModel = require('../model/category')
const TagModel = require('../model/tag')
const {
  article: articleFields,
  comment: commentProjectFields,
  category: categoryProjectionFields,
  tag: tagProjectionFields,
} = require('../types/projectField')

const {
  articleCategory: articleCategoryFields,
} = require('../types/projectField')

module.exports = class ArticleService extends Service {
  async queryList() {
    const {
      article: articleProject,
      comment: commentProject,
      tag: tagProject,
      category: categoryProject,
    } = this.ctx.projectFields

    const result = await ArticleModel.aggregate([
      // {
      //   $match: ctx.state.filter,
      // },
      {
        $lookup: {
          from: 'categories',
          let: { categoryID: '$categoryID' },

          as: 'category',
          pipeline: [
            { $match: { $expr: { $eq: ['$$categoryID', '$_id'] } } },
            { $project: categoryProjectionFields },
          ],
        },
      },
      {
        $unwind: '$category',
      },
      {
        $project: this.ctx.projectFields.article,
      },
      {
        $lookup: {
          from: 'comments',
          let: { id: '$id' },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ['$$id', '$articleID'],
                },
              },
            },
            {
              $project: commentProjectFields,
            },
            {
              $sort: { createdAt: -1 },
            },
          ],
          as: 'comments',
        },
      },
      {
        $lookup: {
          from: 'tags',
          let: { id: '$id' },
          pipeline: [
            {
              $match: {
                $expr: {
                  $in: ['$$id', '$articleIdList'],
                },
              },
            },
            {
              $project: tagProjectionFields,
            },
          ],
          as: 'tagList',
        },
      },
      {
        $sort: {
          createdAt: -1,
        },
      },
    ])
     
    return result
  }
  async create() {}
  async queryByCategoryID(categoryID) {
    return ArticleModel.find({ categoryID })
  }
}
