<template>
  <div class="decoration">
    <ul class="decoration__list">
        <li class="decoration__item-1">
            <img src="@/assets/img/decoration/1-right.svg" alt="1-right"></li>
        <li class="decoration__item-2">
            <img src="@/assets/img/decoration/2-left.png" alt="2-left"></li>
    </ul>
  </div>
</template>

<style scoped>
.decoration {
  position: relative;
}

.decoration__list {
  display: flex;
  justify-content: space-between; 
}

.decoration__item-1 {
    position: absolute;
    bottom: 0;
    left: 96px;
    z-index: -1;
    transform: translate(100%, 99%); 

}

.decoration__item-2 {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
    transform: translate(0%, 150%);
}
</style>
