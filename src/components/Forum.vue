<script setup>

</script>

<template>
  <div>
    <div class="forum__decoration">
        <img src="@/assets/img/decoration/5-middle.png" alt="3-middle"></div>
    <div class="forum">
       <div class="forum__title"> <h1>Форум</h1></div>
       <div class="forum__link"><u>Все треды</u></div>
    </div>
    <div class="forum__core">
    <div class="forum__main-major">
        <div class="forum__main-major-content-image">
            <img src="@/assets/img/bubble_studio.svg" alt="bubble_studio">
        </div>
        <div class="forum__main-major-content-text">
            <div class="forum__main-major-content-text-title">
                <h1>КиноВселенная “Майора Грома”</h1>
            </div>
            <div class="forum__main-major-content-text-content">
                В данном треде, Вы сможете узнать намного<br> больше про киновселенную от Bubble про<br> великого майора полиции - Игоря Грома
            </div>
            <div class="forum__main-major-content-text-link">
                <a href="#"><span>Подробнее</span></a>
                <img src="@/assets/img/arrow.svg" alt="arrow">
             </div>
            </div>
        </div>
        <div class="forum__main-marvel">
            <div class="forum__main-marvel-text">
                <div class="forum__main-marvel-title">
                    Каким будет новый фильм от марвел?
                </div>
                <div class="forum__main-marvel-content">Скоро на экраны выходит новый фильм от Sony Marvel,<br> хотелось бы порассуждать, а каким он будет? Если у вас есть<br> какие-либо заметки, милости прошу к нашему шалашу...
                </div>
                <div class="forum__main-marvel-content-text-link">
                    <a href="#"><span>Подробнее</span><img src="@/assets/img/arrow.svg" alt="arrow"></a> 
                </div>
            </div>
        </div>
    </div>
    <div class="forum__core-reverse">
        <div class="forum__main-marvel-reverse">
            <div class="forum__main-marvel-text-reverse">
                <div class="forum__main-marvel-title-reverse">
                    <h1>Каким будет новый фильм от марвел?</h1>
                </div>
                <div class="forum__main-marvel-content-reverse">Скоро на экраны выходит новый фильм от Sony Marvel,<br> хотелось бы порассуждать, а каким он будет? Если у вас есть<br> какие-либо заметки, милости прошу к нашему шалашу...
                </div>
                <div class="forum__main-marvel-content-text-link-reverse">
                    <a href="#"><span>Подробнее</span><img src="@/assets/img/arrow.svg" alt="arrow"></a> 
                </div>
            </div>
        </div>
    <div class="forum__main-major-reverse">
        <div class="forum__main-major-content-image-reverse">
            <img src="@/assets/img/bubble_studio.svg" alt="bubble_studio">
        </div>
        <div class="forum__main-major-content-text-reverse">
            <div class="forum__main-major-content-text-title-reverse">
                <h1>КиноВселенная “Майора Грома”</h1>
            </div>
            <div class="forum__main-major-content-text-content-reverse">
                В данном треде, Вы сможете узнать намного<br> больше про киновселенную от Bubble про<br> великого майора полиции - Игоря Грома
            </div>
            <div class="forum__main-major-content-text-link-reverse">
                <a href="#"><span>Подробнее</span></a>
                <img src="@/assets/img/arrow.svg" alt="arrow">
             </div>
            </div>
        </div>

    </div>
  </div>
</template>

<style scoped>

  .forum__decoration {
    position: relative;
    transform: translateY(115px);
    z-index: -1;
}



  .forum {
    display: flex;
    justify-content: space-between;
    padding-left: 118px;
    padding-right: 122px;
    padding-bottom: 81px;
}

.forum__title {
    font-weight: bold;
    font-size: 28px;
}

.forum__link {
    font-size: 18px;
    margin-top: 10px;
    text-decoration: none;
}

.forum__core {
    display: flex;
    gap: 50px;
    background-color: #686DE0;
}
.forum__main-major {
    display: flex;
    margin-left: 120px;
}
.forum__main-major-content-image {
    width: 308px;
    height: 308px;
}
.forum__main-major-content-text {
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-radius: 0 15px 15px 0;
    width: 400px;
    height: 260px;
    background-color: #2C2C54;
}
.forum__main-major-content-text-title {
    font-weight: 700;
    margin-left: 20px;
    margin-top: 20px;
    font-size: 20px;
}
.forum__main-major-content-text-content {
    margin-left: 20px;
    font-size: 15px;
}
.forum__main-major-content-text-link {
    margin-left: 20px;
    margin-top: 90px;
    font-size: 15px;
}

.forum__main-marvel-text {
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-radius: 15px;
    width: 500px;
    height: 260px;
    background-color: #2C2C54;
}
.forum__main-marvel-title {
    font-weight: 700;
    margin-left: 20px;
    margin-top: 20px;
    font-size: 20px;
}
.forum__main-marvel-content {
    margin-left: 20px;
    font-size: 15px;
}
.forum__main-marvel-content-text-link {
    margin-left: 20px;
    margin-top: 95px;
    font-size: 15px;
}





.forum__core-reverse {
    display: flex;
    gap: 50px;
    background-color: #686DE0;
}
.forum__main-major-reverse {
    display: flex;
    margin-top: 50px;
}
.forum__main-major-content-image-reverse {
    width: 308px;
    height: 308px;
}
.forum__main-major-content-text-reverse {
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-radius: 0 15px 15px 0;
    width: 400px;
    height: 260px;
    background-color: #2C2C54;
}
.forum__main-major-content-text-title-reverse {
    font-weight: 700;
    margin-left: 20px;
    margin-top: 20px;
    font-size: 20px;
}
.forum__main-major-content-text-content-reverse {
    margin-left: 20px;
    font-size: 15px;
}
.forum__main-major-content-text-link-reverse {
    margin-left: 20px;
    margin-top: 90px;
    font-size: 15px;
}

.forum__main-marvel-text-reverse {
    margin-top: 50px;
    margin-left: 120px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-radius: 15px;
    width: 500px;
    height: 260px;
    background-color: #2C2C54;
}
.forum__main-marvel-title-reverse {
    font-weight: 700;
    margin-left: 20px;
    margin-top: 20px;
    font-size: 20px;
}
.forum__main-marvel-content-reverse {
    margin-left: 20px;
    font-size: 15px;
}
.forum__main-marvel-content-text-link-reverse {
    margin-left: 20px;
    margin-top: 95px;
    font-size: 15px;
}

span {
    color: #686DE0;
}
</style>