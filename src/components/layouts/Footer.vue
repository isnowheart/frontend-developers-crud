<template lang="pug">
.text-ellipsis
  .divider
  footer
    a(
      href="https://github.com/isnowheart/front-developers-crud",
      target="_blank"
    ) API REST — Gazin — {{ new Date().getFullYear() }}
    code
    small (v{{ version }})
</template>

<script>
import { version } from "../../../package.json";

export default {
  data() {
    return {
      version,
    };
  },
};
</script>

<style lang="stylus" scoped>
.text-ellipsis {
  color: #ffffffb3;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding-bottom: 0px;
}
</style>