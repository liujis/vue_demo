import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import { setupRouter } from './router'
import { setupStore } from './stores'

import "./style/reset.scss"

async function bootstrap() {
  const app = createApp(App)

  // Configure store
  // 配置 store
  setupStore(app)

  // Configure routing
  // 配置路由
  setupRouter(app)

  app.mount('#app')
}

bootstrap()
