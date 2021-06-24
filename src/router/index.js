export const routes=[
    {

        name:'register',
        path:'/register',
        component:() => import( '../components/Register/index.vue')
    },
    {
        name:'login',
        path:'/login',
        component:() => import('../components/Login/index.vue')
    },
    {
        name: 'example',
        path:'/example',
        component:() => import('../components/example/index.vue')
    },
    {
        name: 'account',
        path:'/account',
        component:() => import('../components/account/accc/index.vue'),
        children :[
            {
                name: 'edit',
                path:'/account/edit',
                component:() => import('../components/account/edit/index.vue') 
            },
            {
                name: 'wishlist',
                path:'/account/wishlist',
                component:() => import('../components/account/Wishlist/index.vue') 
            }
        ]
    
    }
        
        
    
]