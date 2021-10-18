<template lang="pug">
v-card#lateral
  v-toolbar(dark="", tabs="", flat="", color="#1C4E8D")
    v-toolbar-title 
    router-link(:to="{ name: 'Dashboard' }") 
      strong Início
    v-spacer
    router-link(:to="{ name: 'About' }") 
      strong Sobre
    v-spacer
    v-btn(
      href="https://github.com/isnowheart/front-developers-crud",
      target="_blank",
      text=""
    )
      span.mr-2 REPO
      v-icon mdi-open-in-new
</template>

<style>
strong {
  font-size: 30px;
  text-decoration: none;
}
</style>