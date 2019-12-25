const ArticleModel = require('../model/article')
const { Controller } = require('egg')
const { ObjectId } = require('mongoose').Types
const _ = require('lodash')
const responseFields = require('../types/response').article
const properties = require('../types/request').article
const { ParameterException } = require('../utils/httpExceptions')

class ArticleController extends Controller {
  async queryList() {
    const { service, ctx } = this
    const dataList = await service.article.queryList()
    console.log(__filename,ctx.path)
    return dataList
  }
  async queryCarouselList() {
    const { service, ctx } = this

    return await service.article.queryCarouselList()
  }
  async querySuggestionList() {
    const { ctx, service } = this
    let { tagIdList } = ctx.query

    if (!tagIdList) {
      return []
    }

    tagIdList =
      typeof tagIdList === 'string'
        ? [ObjectId(tagIdList)]
        : tagIdList.map(id => ObjectId(id))
    return await service.article.queryByTagIdList(tagIdList)
  }

  async queryOne() {
    const { ctx, service } = this
    const { id } = ctx.params

    const result = await service.article.queryOneById(id)
    return result
  }
  async createOne() {
    const { ctx, service } = this

    var result = await service.article.create(ctx.state.body)

    ctx.status = 201
    return result
  }
  async updateOne() {
    const { ctx, service } = this

    const { id } = ctx.params

    await service.article.queryByIdAndUpdate(id, ctx.state.body)
  }
  async delete() {
    const { ctx, service } = this

    const { idList } = ctx.request.body
    
    

     
      await service.article.deleteMany(idList)
     
  }
  async deleteOne() {
    const { ctx, service } = this
    const { id } = ctx.params

    await service.article.queryByIdAndRemove(id)
  }
  async updatePublishStatus() {
    const { ctx, service } = this
    
    const { isPublished } = ctx.request.body
    
    
    const { id } = ctx.params
    await ArticleModel.findByIdAndUpdate(id, { $set: { isPublished } })
  }
  async incrementPv() {
    const { ctx, service } = this
    
      await service.article.incrementPv(ctx.params.id)
     

     
  }
  async starOne() {
    const { ctx, service } = this
    const { id } = ctx.params
    

    
    await service.article.queryByIdAndStarOne(id)

     
  }
}
module.exports = ArticleController
