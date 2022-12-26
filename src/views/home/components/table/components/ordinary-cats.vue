<template>
  <table style="border-spacing: 30px;text-align:left">
    <thead>
      <tr>
        <th>Подарок</th>
        <th class="nowrap">Количество котиков</th>
      </tr>
    </thead>

    
    <tbody>
      <tr>
        <td>Скидка 200&nbsp;₽</td>
        <td>90</td>
      </tr>

      <tr>
        <td>Ролл Окинава в подарок</td>
        <td>45</td>
      </tr>

      <tr>
        <td>Пицца Маргарита 25 см в подарок</td>
        <td>40</td>
      </tr>

    </tbody>
    <tbody v-show="openPresent">

      <tr>
        <td>Скидка 300&nbsp;₽</td>
        <td>37</td>
      </tr>

      <tr>
        <td>Снежная Калифорния в подарок</td>
        <td>30</td>
      </tr>
        
        <tr>
          <td>Скидка 500&nbsp;₽</td>
          <td>20</td>
        </tr>

        <tr>
          <td>Поке с лососем в подарок</td>
          <td>20</td>
        </tr>

        <tr>
          <td>Пицца с лососем и сливочным соусом 25 см в подарок</td>
          <td>20</td>
        </tr>

        <tr>
          <td>Поке с креветками в подарок</td>
          <td>20</td>
        </tr>

        <tr>
          <td>Пицца Пепперони 25 см в подарок</td>
          <td>20</td>
        </tr>

        <tr>
          <td>Пицца Карбонара 25 см в подарок</td>
          <td>20</td>
        </tr>

        <tr>
          <td>Пицца с ветчиной и грибами 25 см в подарок</td>
          <td>15</td>
        </tr>

        <tr>
          <td>Пицца с грушей и горгонзолой 25 см в подарок</td>
          <td>15</td>
        </tr>

        <tr>
          <td>Темпура с лососем терияки в подарок</td>
          <td>15</td>
        </tr>

        <tr>
          <td>Пицца из половинок 30 см в подарок</td>
          <td>15</td>
        </tr>

        <tr>
          <td>Просто лосось в подарок</td>
          <td>15</td>
        </tr>

        <tr>
          <td>Калифорния с креветкой спайси в подарок</td>
          <td>15</td>
        </tr>

        <tr>
          <td>Поке боул с лососем в подарок</td>
          <td>10</td>
        </tr>

        <tr>
          <td>Суши с лососем в подарок</td>
          <td>10</td>
        </tr>

        <tr>
          <td>Гунканы спайси ассорти в подарок</td>
          <td>10</td>
        </tr>

        <tr>
          <td>Гунканы с лососем в подарок</td>
          <td>10</td>
        </tr>

        <tr>
          <td>Филадельфия с лососем в подарок</td>
          <td>10</td>
        </tr>

        <tr>
          <td>Филадельфия с угрем в подарок</td>
          <td>5</td>
        </tr>

        <tr>
          <td>Ролл с угрем и лососем в подарок</td>
          <td>5</td>        
        </tr>

        <tr>
          <td>Пицца Четыре сыра 30 см в подарок</td>
          <td>5</td>
        </tr>

        <tr>
          <td>Пицца с креветками 25 см в подарок</td>
          <td>5</td>
        </tr>

        <tr>
          <td>Скидка 700&nbsp;₽</td>
          <td>3</td>
        </tr>

        <tr>
          <td>3 маленькие пиццы в подарок</td>
          <td>3</td>
        </tr>

        <tr>
          <td>3 больших пиццы в подарок</td>
          <td>3</td>
        </tr>

        <tr>
          <td>Сет на двоих в подарок</td>
          <td>1</td>
        </tr>

        <tr>
          <td>Скидка 1000&nbsp;₽</td>
          <td>0</td>
        </tr>
    </tbody>
  </table>
  <button
    @click="openPresent = !openPresent"
    class="present-open"
  >
    {{ openPresent ? 'Cкрыть' : 'Показать еще' }}
  </button>
</template>

<script>
import { ref } from '@vue/reactivity'

export default {
  name: 'OrdinaryCatsComponent',
  setup () {
    let openPresent = ref(false)

    return { openPresent }
  }
}

</script>

<style lang="scss" scoped>
.nowrap {
  // white-space: nowrap;
}

.present-open {
  display: block;
  width: 100%;
  text-align: center;
  padding: 5px;
  font-weight: 900;
  cursor: pointer;
  color: black;
}
</style>
