<template>
  <article class="article">
    <nuxt-link :to="props.article.link" class="link">
      <img :src="require(`../assets/images/${props.article.img}`)" class="image" :alt="props.article.name">
      <div class="description">
        <div class="about">
          <time :datetime="props.article.date">{{ props. article.date }}</time>
          <address class="author">
            {{ props. article.author }}
          </address>
        </div>
        <h3 class="title">
          {{ props.article.title }}
        </h3>
        <div class="comments">
          <img src="~assets/icons/comment.svg" alt="comments" class="comments-img">
          <span>{{ props. article.commentsCount }}</span>
        </div>
      </div>
    </nuxt-link>
  </article>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  setup (props: any) {
    return { props }
  }
})
</script>

<style scoped lang="scss">
  .link {
    &:hover {
      .description {
        background-color: rgba(200, 169, 126, .15);
      }
    }
  }

  .image {
    display: block;
    height: 30rem;
    overflow: hidden;
    object-fit: cover;
    width: 100%;
  }

  .description {
    display: grid;
    align-items: center;
    gap: 1rem;
    padding: 1.6rem 2.4rem 2.4rem;
    color: #333;
    line-height: 1.5;
    background-color: #fff;
    transition: background-color .3s ease;
  }

  .about {
    font-size: 1.5rem;
    color: #ccc;
  }

  .author {
    display: inline;
    font-style: normal;
  }

  .title {
    font-size: 2rem;
    font-weight: 600;
  }

  .comments {
    color: #888;
    display: grid;
    grid-template-columns: repeat(2, min-content);
    align-items: center;
    justify-content: end;
    column-gap: .6rem;
  }

  .comments-img {
    height: 2rem;
  }
</style>
