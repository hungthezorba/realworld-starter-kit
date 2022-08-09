<script setup lang="ts">
  import { RouterLink } from 'vue-router';
</script>

<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <a class="navbar-brand" href="index.html">conduit</a>
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <!-- Add "active" class when you're on that page" -->
          <RouterLink class="nav-link active" to="/">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/editor">
            <i class="ion-compose"></i>&nbsp;New Article
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/settings">
            <i class="ion-gear-a"></i>&nbsp;Settings
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/login">Sign in</RouterLink>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="">Sign up</a>
        </li>
      </ul>
    </div>
  </nav>
</template>