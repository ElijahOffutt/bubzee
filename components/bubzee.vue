<template>
  <TresCanvas shadows window-size>

    <!-- META -->
    <TresPerspectiveCamera />
    <TresAxesHelper />
    <!-- <OrbitControls /> -->
    <TransformControls :object="cube" />

    <!-- OBJECTS -->
    <Levioso>
    <TresMesh ref="cube" :scale="1">
      <TresBoxGeometry :args="[1, 1, 1]" />
      <TresMeshNormalMaterial />
    </TresMesh>
    </Levioso>

  </TresCanvas>
</template>

<script setup>
import anime from 'animejs/lib/anime.es.js';
import { OrbitControls, TransformControls, Levioso } from '@tresjs/cientos'

const cube = shallowRef()

// MAIN ANIMATION LOOP
const { onLoop } = useRenderLoop()
onLoop(() => {
})




</script>