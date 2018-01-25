import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
import mainContent from '../components/content/mainContent'
import Detail from '../components/detail'
import DetailCou from '../components/detail/count'
import DetailAna from '../components/detail/analysis'
import DetailFor from '../components/detail/forecast'
import DetailPub from '../components/detail/publish'
let router=new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/',
            component:mainContent
        },
        {
            path:'/detail',
            component:Detail,
            redirect: '/detail/count',
            children:[
                {
                    path:'count',
                    component:DetailCou
                },
                {
                    path:'analysis',
                    component:DetailAna
                },
                {
                    path:'publish',
                    component:DetailPub
                },
                {
                    path:'forecast',
                    component:DetailFor
                }
            ]
        }
    ]
})

export default router