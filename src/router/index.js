import { createRouter, createWebHistory } from 'vue-router'

// Layouts
import HomeView from '@/views/HomeView.vue'
import AppLayout from '@/layouts/AppLayout.vue'

// Views
import AudiList from '@/views/auditorias/AudiList.vue'
import AudiView from '@/views/auditorias/AudiView.vue'
import AudiForm from '@/views/auditorias/AudiForm.vue'

import RevisionView from '@/views/revisiones/RevisionView.vue'

import RelevView from '@/views/relevamientos/RelevView.vue'

import ObservView from '@/views/observaciones/ObservView.vue'
import ReqView from '@/views/requerimientos/ReqView.vue'
import ReqForm from '@/views/requerimientos/ReqForm.vue'

import RiesgoForm from '@/views/riesgos/RiesgoForm.vue'
import ControlForm from '@/views/controles/ControlForm.vue'
import PruebaForm from '@/views/pruebas/PruebaForm.vue'
import ObservForm from '@/views/observaciones/ObservForm.vue'

import AplicacView from '@/views/aplicaciones/AplicacView.vue'
import AplicacForm from '@/views/aplicaciones/AplicacForm.vue'
import NormView from '@/views/normativas/NormView.vue'
import NormForm from '@/views/normativas/NormForm.vue'
import OrganigView from '@/views/organigrama/OrganigView.vue'
import OrganigForm from '@/views/organigrama/OrganigForm.vue'

import ParamMenu from '@/views/parametros/ParamMenu.vue'
import ParamCiclos from '@/views/parametros/ParamCiclos.vue'
import ParamPeriodos from '@/views/parametros/ParamPeriodos.vue'

import DevTools from '@/components/DevTools.vue'

import ConfigView from '@/views/configuracion/ConfigView.vue'

import LoginView from '@/views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'app',
      component: AppLayout,
      children: [
        {
          path: '',
          name: 'home',
          // component: HomeView,
          redirect: '/auditorias'
        },
        {

          path: '/auditorias',
          name: 'auditorias',
          component: AudiList,
          meta: { title: 'Auditorías' },
        },
        {
          path: '/auditorias/nueva',
          name: 'nuevaAuditoria',
          component: AudiForm,
          meta: { title: 'Nueva auditoría' },
        },
        {
          path: '/auditorias/:siglaAudit/editar',
          name: 'editarAuditoria',
          component: AudiForm,
          meta: { title: 'Editar auditoría' },
        },
        {
          path: '/auditorias/:siglaAudit/:nombre?',
          name: 'auditoria',
          component: AudiView,
        },
        {
          path: '/auditorias/:siglaAudit/revisiones/:siglaRevision/:tab?',
          name: 'revision',
          component: RevisionView,
        },
        {
          path: '/auditorias/:siglaAudit/revisiones/:siglaRevision/relevamientos/:idRelev/:nombre?',
          name: 'relevamiento',
          component: RelevView,
        },
        {
          path: '/auditorias/:siglaAudit/revisiones/:siglaRevision/riesgos/:idRiesgo/:nombre?',
          name: 'riesgoForm',
          component: RiesgoForm,
        },
        {
          path: '/auditorias/:siglaAudit/revisiones/:siglaRevision/controles/:idControl/:nombre?',
          name: 'controlForm',
          component: ControlForm,
        },
        {
          path: '/auditorias/:siglaAudit/revisiones/:siglaRevision/pruebas/:idPrueba/:nombre?',
          name: 'pruebaForm',
          component: PruebaForm,
        },
        {
          path: '/auditorias/:siglaAudit/revisiones/:siglaRevision/observaciones/:idObservacion/:nombre?',
          name: 'observacionForm',
          component: ObservForm,
        },
        {
          path: '/aplicaciones',
          name: 'aplicaciones',
          component: AplicacView,
          meta: { title: 'Aplicaciones' },
        },
        {
          path: '/aplicaciones/:idAplicacion/:nombre?',
          name: 'aplicacion',
          component: AplicacForm,
          meta: { title: 'Aplicación' },
        },
        {
          path: '/normativas',
          name: 'normativas',
          component: NormView,
          meta: { title: 'Normativas' },
        },
        {
          path: '/normativas/:idNormativa/:nombre?',
          name: 'normativa',
          component: NormForm,
          meta: { title: 'Normativa' },
        },
        {
          path: '/organigrama',
          name: 'organigrama',
          component: OrganigView,
          meta: { title: 'Organigrama' },
        },
        {
          path: '/organigrama/:idOrganigrama/:nombre?',
          name: 'puestoFuncional',
          component: OrganigForm,
          meta: { title: 'Organigrama' },
        },
        {
          path: '/observaciones',
          name: 'observaciones',
          component: ObservView,
          meta: { title: 'Observaciones' },
        },
        {
          path: '/requerimientos',
          name: 'requerimientos',
          component: ReqView,
          meta: { title: 'Requerimientos' },
        },

        {
          path: '/requerimientos/:idRequerimiento/:nombre?',
          name: 'requerimiento',
          component: ReqForm,
          meta: { title: 'Requerimiento' },
        },
        {
          path: '/parametros',
          name: 'parametros',
          component: ParamMenu,
          meta: { title: 'Parámetros' },
          children: [
            {
              path: '/parametros/ciclos',
              name: 'paramCiclos',
              component: ParamCiclos,
              meta: { title: 'Ciclos' },
            },
            {
              path: '/parametros/periodos',
              name: 'paramPeriodos',
              component: ParamPeriodos,
              meta: { title: 'Periodos' },
            },
          ]
        },
        {
          path: '/devtools',
          name: 'devtools',
          component: DevTools,
          meta: { title: 'Herramientas de Desarrollo' },
        },
        {
          path: '/configuracion',
          name: 'configuracion',
          component: ConfigView,
          meta: { title: 'Configuración' },
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      // component: () => import('@/views/LoginView.vue'),
      component: LoginView,
      meta: { title: 'Iniciar sesión' },
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // Siempre desplaza a la parte superior de la página
    // return { top: 0 }

    // si hay una posición guardada (por ejemplo, al usar los botones de navegación del navegador), se desplazará a esa posición. Si no, se desplazará a la parte superior de la página.
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Audrit';
  next();
});

export default router
