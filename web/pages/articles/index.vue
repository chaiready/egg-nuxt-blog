<template>
  <div class="article">
    <div
      class="banner"
      v-if="archiveData && archiveData.cover && archiveData.cover.path"
      :style="bannerStyle"
    >
      <h1>{{archiveData.name}}</h1>
      <span>{{archiveData.articlePublishedCount}}</span>
    </div>

    <article-list :dataList="dataList"></article-list>
  </div>
</template>

<script>
import TagService from '@/services/tags'
import CategoryService from '@/services/categories'
import ArticleService from '@/services/articles'
export default {
  layout: 'public',
  async asyncData(context) {
     
    const { categoryID, tagID } = context.query
    let articleAction, archiveAction
    if (categoryID) {
      archiveAction = CategoryService.fetchOne(categoryID)
      articleAction = ArticleService.fetchList({ categoryID })
    } else if (tagID) {
      archiveAction = TagService.fetchOne(tagID)
      articleAction = ArticleService.fetchList({ tagID })
    } else {
      articleAction = ArticleService.fetchList()
    }

    try {
      var [archiveData, dataList] = await Promise.all([
        archiveAction,
        articleAction
      ])
    } catch (error) {
      return { archiveData: {}, dataList: [] }
    }

    return { dataList, archiveData }



    

    

    // debugger
  },
head:{

  title:'文章',
},
  computed: {
    bannerStyle() {
      const style = {}
      if (
        this.archiveData &&
        this.archiveData.cover &&
        this.archiveData.cover.path
      ) {
        style.background = `url(${this.archiveData.cover.path})no-repeat center/100%`
      }
      return style
    }
  }
}
</script>

<style lang="less" scoped>
.banner {
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 -74px;
  flex-direction: column;
  color: white;
  h1 {
    margin-bottom: 20px;
  }
}
</style>

