<template lang="html">
  <div class="card card-youtube">
    <a href="https://youtu.be/lfT8IU0so24" target="_blank">
      <div class="card-content">
        <div class="image-block">
          <figure class="image">
            <img src="./ljh.png" alt="Image">
          </figure>
          <div class="image-block-label">
            <img src="./yt-icon.png" alt="Image">
            학습 비법 노하우
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="css">
.card-youtube {
  width: 340px;
  border-radius: 7px;
}

.card-content {
  padding: 1rem;
}

.image-block {
  position: relative;
}

.image-block-label {
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #000;
  color: #fff;
  opacity: .7;
  text-align: center;
  font-size: 1.5rem;
}

.image-block-label img {
  width: 26px;
}
</style>