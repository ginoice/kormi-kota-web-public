<template>
  <section class="table">
    <img class="table__circle" src="@/assets/images/home/table/circle.svg" alt="">
    <div class="container">
      <div class="table__body body">
        <div class="body__title-wrapper">
          <h6 class="body__title desk"> а какие подарки? </h6>
           <h6 class="body__title mob"> а <br> какие <br> подар<br>ки? </h6>
        </div>
      </div> 
    </div>
    <table-wrapper-component />      
  </section>
</template>

<script>
import TableWrapperComponent from './components/wrapper-table.vue'

export default {
  name: 'TableComponen',
  components: { TableWrapperComponent }
}

</script>

<style lang="scss" scoped>
.table {
  padding: 153px 0 301px 0;

  @media screen and (max-width: 780px) {
    padding: 183px 0 301px 0;
  }
}

.body__title {
  font-family: 'RussoOne', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 200px;
  line-height: 88%;
  letter-spacing: 0.01em;
  color: #000000;
  transform: rotate(9.2deg);

  @media screen and (max-width: 1057px) {
    font-size: 150px;
    text-align: center;
  }

  @media screen and (max-width: 780px) {
    font-size: 100px;
  }
}

.desk {
  @media screen and (max-width: 515px) {
    display: none;
  }
}

.mob {
  display: none;
  @media screen and (max-width: 515px) {
    display: block;
    text-align: left;
    font-size: 100px;
    transform: rotate(9.2deg) translate(10px, 0);
  }
}

.table {
  position: relative;
  &__circle {
    position: absolute;

    max-width: 400px;
    width: 100%;

    top: 100px;
    left: 0;

    @media screen and (max-width: 780px) {
      max-width: 300px;
      top: 70px;
    }

    @media screen and (max-width: 515px) {
      top: 0px;
      left: -50%;
    }
  }
}
</style>
