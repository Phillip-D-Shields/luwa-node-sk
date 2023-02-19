<h1 class="test">
  Hello world! 
</h1>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.800);
  }
  .test {
    @apply text-3xl font-bold underline text-pink-200;
  }
</style>