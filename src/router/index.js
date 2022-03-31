import {createWebHistory,createRouter} from 'vue-router'
import home from '../components/home.vue'
import about from '../components/about.vue'
import contact from '../components/contact.vue'
import produit from '../components/produit.vue'
import notFound from '../components/notFound.vue'
import gallery from '../components/Gallerie/gallery.vue'
import image from '../components/Gallerie/image.vue'
import video from '../components/Gallerie/video.vue'
import axios from '../components/Gallerie/axios.vue'



const routes =[
    { path: "/", component: home , name:"Homes" },
    { path: "/about", component: about , name:"Abouts" },
    { path: "/contact", component: contact , name:"Contacts" },
    { path: "/produit", component: produit , name:"Produits" },
    { path: "/gallery", component: gallery , name:"Galleries" , children:[
        { path: "/image", component: image , name:"Image" },
        { path: "/video", component: video , name:"Video" },
        { path: "/axios", component: axios , name:"Axios" },
 ] },
    { path: "/:catchAll(.*)", component: notFound ,name:"NotFound"  },
]


const router = new createRouter({
    history: createWebHistory(),
    routes: routes
})
export default router;