<template>
  <div class="collection">
    <article-list :dataList="dataList"></article-list>
  </div>
</template>


<script>
import ArticleService from '@/services/articles'
export default {
  layout: 'public',
  async asyncData({store}) {
    const idList = store.state.article.starIdList
    // console.log(store)
      console.log(store.state.article)

    if (!idList.length) {
      return
    }

    try {
      var dataList = await ArticleService.fetchList({ idList })
    } catch (error) {
      dataList = []
    }
    return{ dataList}
  },
  data() {
    return {
      // dataList: []
    }
  }
}
</script>

