export default{
    path: '/movie',
    component :()=> import('@/views/Movie'),
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
        },
        {
            path:'/movie',
            redirect: '/movie/nowplaying'
        }
    ]
}