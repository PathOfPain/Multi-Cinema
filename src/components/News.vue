<template>
  <div>
  <div class="news__decoration-top">
    <img src="@/assets/img/decoration/3-middle.svg" alt="3-middle">
  </div>

  <div class="news__container">
    <div class="news">
      <div class="news__title">Новости</div>
      <div class="news__link"><u>Читать все</u></div>
    </div>
    <div class="news__content">
      <div class="news__content-image">
        <img src="@/assets/img/gotham-spin-off.png" alt="gotham-spin-off">
        <div class="image-overlay"></div>
        <span class="news__gotham-spin-off-text"><br>The CW заказал пилотные серии <br>«Рыцарей Готэма» и спин-оффа о<br> родителях Винчестеров</span>
      </div>
      <div class="news__horror">
      <div class="news__content-horror">
        <img class="news__horror-image" src="@/assets/img/light-saber.png" alt="light-saber">
        <div class="news__content-horror-main-1">
          <u>Дисней выпустит первый хоррор</u>
        <br>Равным образом рамки и место обучения кадров обеспечивает<br> широкому кругу (специалистов) участие в формировании<br> дальнейших направлений развития...
        </div>
      </div>
      <div class="news__content-horror-1">
        Дисней выпустит первый хоррор<br>Равным образом рамки и место обучения кадров обеспечивает<br> широкому кругу (специалистов) участие в формировании<br> дальнейших направлений развития...
      </div>
      <div class="news__content-horror-2">
        <img class="news__horror-image" src="@/assets/img/light-saber.png" alt="light-saber">
        <div class="news__content-horror-main-2">
          <u>Дисней выпустит первый хоррор</u>
        <br>Равным образом рамки и место обучения кадров обеспечивает<br> широкому кругу (специалистов) участие в формировании<br> дальнейших направлений развития...
      </div>
      </div>
    </div>
    </div> 
  </div>
  <div>
    <img src="@/assets/img/decoration/4-middle.png" alt="4-middle">
  </div>
</div>
  </template>
  
  <style scoped>
  .news__decoration-top {
    position: relative;
    transform: translateY(44px);
    z-index: -1;
}


    .news__container {
      padding-left: 119px;
      padding-right: 44px; 
      background-color: #686DE0;
    }

  
    .image-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.3);
      border-radius: 3%;
    }
  
    .news {
      margin-top: 44px;
      display: flex;
      justify-content: space-between;
      align-items: center;
       
      
  }
  .news__title {
    margin-bottom: 50px;
    flex: 1; 
    text-align: center; 
    font-weight: bold;
    font-size: 26px;
  }
  .news__link {
    margin-bottom: 45px;
    margin-right: 44px;
  }
  
  .news__content {
    width: 100%; 
    height: auto; 
    display: flex;
    gap: 114px;
}

  .news__content-image {
    position: relative;
    width: 550px;
    height: 367px;
  }
  
  .news__gotham-spin-off-text {
    margin-bottom: 20px;
    margin-left: 10px;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 15px;
    font-size: 24px;
  }
  
  .news__horror {
    height: 453px;
    width: 660px;
    padding-top: 15px;
}


.news__content-horror {
  display: flex;
  margin-bottom: 20px;
  gap: 15px;
  font-size: 18px;
}

.news__content-horror-1 {
  display: flex;
  margin-bottom: 20px;
  gap: 15px;
  font-size: 18px;
}

.news__content-horror-2 {
  display: flex;
  margin-bottom: 20px;
  gap: 15px;
  font-size: 18px;
}


  .news__horror-image {
    width: 110px;
    height: 110px;
}

  </style>
  