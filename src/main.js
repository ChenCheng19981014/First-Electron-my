import { createApp } from 'vue'
import App from './App.vue'
import './../src/assets/css/reset.less'
//main.js
import './../src/plugins/datastore.js'

const appPrototype = createApp(App).mount('#app');


export default appPrototype;

