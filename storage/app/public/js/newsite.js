import sitebody from '../vue/sitebody.vue';
import siteheader from '../vue/siteheader.vue';
import ShoppingCartPopup from '../vue/shopping-cart.vue';
import {createApp} from 'vue/dist/vue.esm-bundler.js';


const app = createApp({
});
app.component('sitebody', sitebody);
app.component('siteheader', siteheader);
app.component('shopping-cart-popup', ShoppingCartPopup);


app.mount("#app");

