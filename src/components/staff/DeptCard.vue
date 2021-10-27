<template>
  <div class="dept-card">
    <a href="" class="card">
      <div className="card__image">
        <div className="text">
          {{ dept }}
        </div>
      </div>
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
            <path />
          </svg>
          <img
            class="card__thumb"
            src="https://i.imgur.com/7D7I6dI.png"
            alt=""
          />
          <div class="card__header-text">
            <h3 class="card__title">{{ title }}</h3>
            <span class="card__status">{{ status }}</span>
          </div>
        </div>
        <span class="card__description">
          <p v-for="(subs, index) in description" :key="index">
            {{ subs }}
          </p>
        </span>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    status: String,
    description: Array,
    dept: String,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="less" scoped>
* {
  box-sizing: border-box;
}

.dept-card {
  margin: 0 25px;
}
.card {
  z-index: 1;
  position: relative;
  display: block;
  height: 350px;
  width: 300px;
  border-radius: calc(40 * 1px);
  overflow: hidden;
  text-decoration: none;
}

.card__image {
  transition: 0.3s;
  width: 100%;
  height: 100%;
  background: rgb(255, 0, 228);
  border-radius: 45px;
  background: linear-gradient(
    48deg,
    rgba(255, 0, 228, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );
  .text {
    transition: 0.3s;
    font-family: "ZCOOL QingKe HuangYou", cursive;
    color: #ffffff;
    height: calc(100% - 114px);
    font-size: 140px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.card__overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  height: 0;
  border-radius: 40px;
  background-color: #ffffff;

  transition: 0.2s ease-in-out;
}

.card:hover .card__overlay {
  height: 250px;
}

.card:hover .card__image {
  .text {
    height: calc(100% - 250px);
    font-size: 50px;
  }
}

.card__header {
  position: relative;
  display: flex;
  align-items: center;
  gap: 2em;
  padding: 2em;
  border-radius: calc(40 * 1px) 0 0 0;
  background-color: #ffffff;
  transform: translateY(-100%);
  transition: 0.2s ease-in-out;
}

.card__arc {
  width: 80px;
  height: 80px;
  position: absolute;
  bottom: 100%;
  right: 0;
  z-index: 1;
}

.card__arc path {
  fill: #ffffff;
  d: path("M 40 80 c 22 0 40 -22 40 -40 v 40 Z");
}

.card:hover .card__header {
  transform: translateY(0);
}

.card__thumb {
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.card__title {
  font-size: 1em;
  margin: 0 0 0.3em;
  color: #6a515e;
}

.card__tagline {
  display: block;
  margin: 1em 0;
  font-family: "MockFlowFont";
  font-size: 0.8em;
  color: #d7bdca;
}

.card__status {
  font-size: 0.8em;
  color: #d7bdca;
}

.card__description {
  padding: 0 2em 2em;
  margin: 0;
  color: #d7bdca;
  font-family: "MockFlowFont";
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
</style>
