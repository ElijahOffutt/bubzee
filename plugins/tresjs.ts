import Tres from '@tresjs/core'

export default defineNuxtPlugin((app) => {
    app.vueApp.use(Tres);
});