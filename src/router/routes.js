
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index/IndexPage.vue') }
    ]
  },
  {
    path: '/informacion',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Informacion/Informacion.vue') }
    ]
  },
  {
    path: '/experiencia',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Experiencia/Experiencia.vue') }
    ]
  },
  {
    path: '/formacion',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Formacion/Formacion.vue') }
    ]
  },
  {
    path: '/contacto',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Contacto/Contacto.vue') }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
