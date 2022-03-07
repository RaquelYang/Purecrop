<template>
<div id="AdminNews">
  <h2 class="py-10 text-center text-h2 font-weight-medium text--darken-2 light-green--text">最新消息管理</h2>
  <v-container>
    <v-row>
      <v-col cols="11" class="px-0 mx-auto">
        <v-data-table
          :headers="headers"
          :items="news"
          :expanded.sync="expanded"
          item-key="_id"
          show-expand
        >
          <template v-slot:top>
            <v-btn large @click="addnews"  color="light-green darken-2" class="font-weight-medium white--text text-h5 mb-8">新增最新消息</v-btn>
          </template>
          <template v-slot:item.image="{ item }">
          <img v-if="item.image" :src="item.image" width="80px"/>
          </template>
          <template v-slot:item.show="{item}">
            <v-switch v-model="item.show" @change="switchbtn(item._id)"></v-switch>
          </template>
          <template v-slot:item.action="{ item }">
              <v-btn color="light-green darken-2 white--text" class="mr-0 mr-lg-2"
              @click="editNews(item._id)"
              >
                <v-icon>mdi-lead-pencil</v-icon>
              </v-btn>
              <v-btn color="red darken-1 white--text" @click="deleteNews(item._id)">
                <v-icon>mdi-trash-can-outline</v-icon>
              </v-btn>
          </template>
          <template v-slot:expanded-item="{ headers, item }">
              <td :colspan="headers.length" class="py-5">
              <p class="grey--text text--darken-1">內文</p>
              <p>{{ item.content }}</p>
              <p class="grey--text text--darken-1">注意事項</p>
              <p>{{ item.notice }}</p>
              </td>
            </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
  <AddNews :parentdialog="parentdialog" @closedialog="parentdialog=false"
  @news='newsdata' ref="AddNews" @changetable="changetable"/>
</div>
</template>
<style lang="scss">
#AdminProducts{
  img{
    width: 100px;
    height: 100px;
    object-fit: contain;
    vertical-align: middle;
    padding: 10px 0;
  }
  thead span{
    font-size: 1.5rem;
  }
  tbody td{
    font-size: 1.4rem;
  }
}
</style>
<script>
import AddNews from '@/components/AddNews.vue'
export default {
  data () {
    return {
      parentdialog: false,
      expanded: [],
      news: [],
      idx: -1,
      headers: [
        {
          text: '活動主題', align: 'start', value: 'name'
        },
        { text: '活動圖片', value: 'image', align: 'center', sortable: false },
        { text: '是否上架', value: 'show' },
        { text: '操作', value: 'action', align: 'center', sortable: false }
      ]

    }
  },
  methods: {
    newsdata (data) {
      this.news = data
    },
    addnews () {
      this.parentdialog = true
      this.$refs.AddNews.openform()
    },
    editNews (id) {
      this.parentdialog = true
      this.$refs.AddNews.editform(id)
      this.idx = this.news.findIndex(newsdata => newsdata._id === id)
    },
    async deleteNews (id) {
      this.idx = this.news.findIndex(newsdata => newsdata._id === id)
      try {
        await this.api.delete('/news/' + this.news[this.idx]._id, {
          headers: {
            authorization: 'Bearer ' + this.admin.token
          }
        })
        this.news.splice(this.idx, 1)
        this.$swal({
          icon: 'success',
          title: '成功',
          text: '刪除成功'
        })
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: error.response.data.message
        })
      }
    },
    async switchbtn (id) {
      this.idx = this.news.findIndex(newsdata => newsdata._id === id)
      try {
        await this.api.post('/news/update', { id: this.news[this.idx]._id, show: this.news[this.idx].show }
          , {
            headers: {
              authorization: 'Bearer ' + this.admin.token
            }
          })
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: error.response.data.message
        })
      }
    },
    changetable (data) {
      const idx = this.news.findIndex(newsdata => newsdata._id === data._id)
      this.news[idx] = data
      this.news.push({})
      this.news.pop()
    }
  },
  components: { AddNews }
}
</script>
