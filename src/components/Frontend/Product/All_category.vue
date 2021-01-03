<template>
  <div class="category row mx-auto">
    <a href="#"
      class="category-btn "
      @click.prevent="gettempCategory('')"
      :class="{'active': tempCategory === ''}" >
      <div class="category-item  d-flex justify-content-center my-1 p-2 ">
        <span class ="align-self-center"
          :class="{'text-secondary': tempCategory === ''}">
          所有電影
        </span>
      </div>
    </a>
    <a href="#"
      class="category-btn "
      @click.prevent="gettempCategory('動作')"
      :class="{'active': tempCategory === '動作'}" >
      <div class="category-item  d-flex justify-content-center my-1 p-2">
        <span class ="align-self-center"
          :class="{'text-secondary': tempCategory === '動作'}">
          動作片
        </span>
      </div>
    </a>
    <a href="#"
      class="category-btn "
      @click.prevent="gettempCategory('劇情')"
      :class="{'active': tempCategory === '劇情'}" >
      <div class="category-item  d-flex justify-content-center my-1 p-2">
        <span class ="align-self-center"
          :class="{'text-secondary': tempCategory === '劇情'}">
            劇情片
        </span>
      </div>
    </a>
    <a href="#"
      class="category-btn "
      @click.prevent="gettempCategory('愛情')"
      :class="{'active': tempCategory === '愛情'}" >
      <div class="category-item  d-flex justify-content-center my-1 p-2">
        <span class ="align-self-center"
          :class="{'text-secondary': tempCategory === '愛情'}">
          愛情片
        </span>
      </div>
    </a>
    <a href="#"
      class="category-btn "
      @click.prevent="gettempCategory('動畫')"
      :class="{'active': tempCategory === '動畫'}" >
      <div class="category-item  d-flex justify-content-center my-1 p-2">
        <span class ="align-self-center"
          :class="{'text-secondary': tempCategory === '卡通'}">
          卡通片
        </span>
      </div>
    </a>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
    };
  },
  methods: {
    gettempCategory(category) {
      this.$store.dispatch('productModules/gettempCategory', category);
    },
  },
  computed: {
    ...mapGetters('productModules', ['tempCategory']),
  },
};
</script>

<style scoped>
.category{
  width: 100%;
  display: flex;
  columns: col;
  flex-wrap: wrap;
}
a {
  text-decoration: none;
  width: 100%;
}
.category-item {
  display: flex;
  justify-content: center;
}
.category-item span{
  font-size: 20px;
  color:rgb(155, 154, 154);
}

.category-btn {
  border-radius: 5px;
  border: 0.5px solid #ccc;
  margin-bottom: 2%;
  transition: all 0.5s;
}
.category-btn:hover{
  border: 0.5px solid #c1170c;
  box-shadow: 0 2px 10px #c1170c;
}
.category-btn.active{
  border: 0.5px solid #c1170c;
  box-shadow: 0 2px 10px #c1170c;
}
</style>
