<template>
  <footer class="blog-footer">
    <div class="footer-content">
      <a href="https://github.com/Thalis-Freitas" target="_blank">
        <img class="icon-github" src="@/assets/icon-github.png" alt="logo-github">
        <span>Desenvolvido por:
          <b>Thalis Freitas </b>
        </span>
      </a>
    </div>
  </footer>
</template>

<style scoped>
.blog-footer{
  position: fixed;
  bottom: 1vh;
  width: 100%;
}

.footer-content{
  margin: auto;
  padding: 3px 10px 0 10px;
  width: fit-content;
  border-radius: 10px;
  background: rgba( 255, 255, 255, 0 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 20px );
  -webkit-backdrop-filter: blur( 20px );
  border: 1px solid rgba( 255, 255, 255, 0.18 );
}

.icon-github, span{
  position: relative;
}

.icon-github{
  right: 4px;
}

span{
  color: var(--font-color);
  bottom: 7px;
}
</style>