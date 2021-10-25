<template lang="pug">
v-card#lateral
  v-toolbar(dark="", tabs="", flat="", color="#1C4E8D")
    v-spacer
    router-link(style="text-decoration: none", :to="{ name: 'Dashboard' }") 
      img(src="../../../assets/new-logo.svg", alt="alt", height="60")
    v-spacer
    router-link(:to="{ name: 'About' }") 
      strong Sobre
    v-btn(
      href="https://github.com/isnowheart/frontend-developers-crud",
      target="_blank",
      text=""
    )
      span.mr-2 REPO
      v-icon mdi-open-in-new
</template>

<style>
a,
strong,
router-link {
  font-size: 30px;
  text-decoration: none;
}
</style>