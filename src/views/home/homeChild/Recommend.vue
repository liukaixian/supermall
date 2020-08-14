<template>
  <div class="recommend">
    <div v-for=" item in recommend.list" :key="item.index" class="recommend-item">
      <a :href="item.link">
        <div>
          <img :src="item.image" />
        </div>
        <div >{{item.title}}</div>
      </a>
    </div>

  </div>
</template>

<script>
  export default{
      props:{
        recommend:{}
      }
  }
</script>

<style>
  .recommend{
    display: flex;
    text-align: center;
    font-size: 12px;
    padding: 15px 0 15px 0;
    border-bottom: 8px solid #eee;

  }
  .recommend-item{
    flex: 1;
  }
  .recommend-item img{
    width: 80%;
    height: 80%;
    margin-bottom: 10px;
  }

</style>
