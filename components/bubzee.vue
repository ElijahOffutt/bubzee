<template>
  <TresCanvas shadows window-size>

    <!-- META -->
    <TresPerspectiveCamera />
    <TresAxesHelper />

    <!-- OBJECTS -->
    <TresMesh ref="cube" :rotation="[0, x, y]" :scale="1">
      <TresBoxGeometry :args="[1, 1, 1]" />
      <TresMeshNormalMaterial />
    </TresMesh>

  </TresCanvas>
</template>

<script setup>
const { onLoop } = useRenderLoop()
let y = ref(0)
let x = ref(0)

onLoop(() => {
  y.value += .1
  x.value += .1
})
</script>