import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'                    // file CSS global của bạn
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import Default from './layout/wrapper/index.vue'
import Blank from './layout/wrapper/index_blank.vue'
import Client from './layout/wrapper/index_client.vue'

const app = createApp(App)

app.use(router)
// app.use(Toaster, {
//   position: "top-right",
// });
app.component("default-layout", Default);
app.component("blank-layout", Blank);
app.component("client-layout", Client);

app.mount('#app')
