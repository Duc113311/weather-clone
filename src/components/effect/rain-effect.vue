<template>
  <div class="rain-container" ref="rainContainer"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const rainContainer = ref(null);
let rainInterval = null;

function createRaindrop() {
  if (!rainContainer.value) return;

  const drop = document.createElement("div");
  drop.classList.add("raindrop");

  let startX = Math.random() * window.innerWidth;
  let duration = Math.random() * 1.5 + 0.5;
  let randomX = (Math.random() - 0.5) * 30;
  let randomRot = (Math.random() - 0.5) * 20;
  let breakPoint = Math.random() * 60 + 30;

  drop.style.left = `${startX}px`;
  drop.style.animationDuration = `${duration}s`;
  drop.style.setProperty("--random-x", `${randomX}px`);
  drop.style.setProperty("--random-rot", `${randomRot}deg`);

  rainContainer.value.appendChild(drop);

  setTimeout(() => {
    drop.remove();
    createSplash(startX, window.innerHeight * (breakPoint / 100));
  }, duration * (breakPoint / 100) * 1000);
}

function createSplash(x, y) {
  if (!rainContainer.value) return;

  const splash = document.createElement("div");
  splash.classList.add("splash");
  splash.style.left = `${x}px`;
  splash.style.top = `${y}px`;

  rainContainer.value.appendChild(splash);

  setTimeout(() => {
    splash.remove();
  }, 300);

  createSplashParticles(x, y);
}

function createSplashParticles(x, y) {
  if (!rainContainer.value) return;

  for (let i = 0; i < 3; i++) {
    const particle = document.createElement("div");
    particle.classList.add("splash-part");

    let randomDir = Math.random() > 0.5 ? 1 : -1;
    let splashX = Math.random() * 10 * randomDir;
    let splashY = -(Math.random() * 10);

    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    particle.style.setProperty("--splash-x", `${splashX}px`);
    particle.style.setProperty("--splash-y", `${splashY}px`);

    rainContainer.value.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 400);
  }
}

function generateRain() {
  rainInterval = setInterval(() => {
    for (let i = 0; i < 5; i++) {
      createRaindrop();
    }
  }, 50);
}

onMounted(() => {
  generateRain();
});

onUnmounted(() => {
  if (rainInterval) {
    clearInterval(rainInterval);
  }
});
</script>

<style scoped>
.rain-container {
  position: absolute;
  width: 10%;
  height: 10vh;
  overflow: hidden;
}

.raindrop {
  position: absolute;
  width: 2px;
  height: 15px;
  background: rgba(255, 255, 255, 0.8);
  opacity: 0.8;
  filter: invert(25%) sepia(65%) saturate(2185%) hue-rotate(190deg)
    brightness(97%) contrast(186%);
  animation: fall linear forwards;
}

.splash {
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.8);
  opacity: 0.7;
  animation: splash 0.3s linear forwards;
  filter: invert(25%) sepia(65%) saturate(2185%) hue-rotate(190deg)
    brightness(97%) contrast(186%);
}

.splash-part {
  position: absolute;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  opacity: 0.9;
  animation: splash-part 0.4s ease-out forwards;
}

@keyframes fall {
  0% {
    transform: translateY(-20px) translateX(0) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(100vh) translateX(var(--random-x))
      rotate(var(--random-rot));
    opacity: 0.8;
  }
}

@keyframes splash {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
}

@keyframes splash-part {
  0% {
    transform: translate(0, 0);
    opacity: 1;
  }
  100% {
    transform: translate(var(--splash-x), var(--splash-y));
    opacity: 0;
  }
}
</style>
