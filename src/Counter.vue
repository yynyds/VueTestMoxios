<template>
	<div>
	  {{ count }}
	  <button @click="increment">Увеличить на 1+</button>
	</div>
</template>

<script>
export default {
  data () {
    return {
      count: 0
    }
  },

  methods: {
    increment () {
      this.count++
    }
  }
}
</script>