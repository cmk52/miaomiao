export default{
    path: '/mine',
    component :()=> import('@/views/Mine'),
    children:[
        {
            path:'city',
            component : ()=> import('@/components/City')
        },
        {
            path:'nowplaying',
            component:()=> import('@/components/nowplaying')
        },
        {
            path:'comingSoon',
            component:()=> import('@/components/comingSoon')
        },
        {
            path:'search',
            component:()=> import('@/components/search')
        }
    ]
}