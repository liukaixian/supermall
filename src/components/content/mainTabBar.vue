<template>
  <div>
    <TabBar>
      <TabBarItem  text="首页" path="/home" >
        <template v-slot:item_img >
          <img src="@/assets/img/tabbar/home.svg" />
        </template>
        <template v-slot:item_img_active>
          <img src="@/assets/img/tabbar/home_active.svg" />
        </template>
      </TabBarItem>

      <TabBarItem  text="分类" path="/classes">
        <template v-slot:item_img>
          <img src="@/assets/img/tabbar/classes.svg" />
        </template>
        <template v-slot:item_img_active>
          <img src="@/assets/img/tabbar/classes_active.svg" />
        </template>

      </TabBarItem>
      <TabBarItem text="购物车"  path="/cart">
        <template v-slot:item_img>
          <img src="@/assets/img/tabbar/cart.svg" />
        </template>
        <template v-slot:item_img_active>
          <img src="@/assets/img/tabbar/cart_active.svg" />
        </template>
      </TabBarItem>
      <TabBarItem  text="我的" path="profile">
        <template v-slot:item_img>
          <img src="@/assets/img/tabbar/profile.svg" />
        </template>
        <template v-slot:item_img_active>
          <img src="@/assets/img/tabbar/profile.svg" />
        </template>
      </TabBarItem>
    </TabBar>
  </div>
</template>

<script>
  import TabBar from '@/components/common/tabbar/TabBar.vue'
  import TabBarItem from '@/components/common/tabbar/TabBarItem.vue'
  export default{
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style>
</style>
