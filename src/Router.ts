import { MainPage, VideoDescriptionPage } from './pages'
import { Lightning, Router } from '@lightningjs/sdk'
import PageInstance = Router.PageInstance
import Boot from './pages/Boot/Boot'

const Routes = {
  root: 'main',
  boot: () => {
    return new Promise((resolve) => {
      console.log('boot')
      resolve(true)
    })
  },
  routes: [
    {
      path: 'main',
      component: MainPage,
      widgets: ['TopMenu'],
      // before() {
      //   console.log('before home!')
      //   return Promise.resolve()
      // },
    },
    // {
    //   path: 'video-description',
    //   component: VideoDescriptionPage as unknown,
    // widgets: ['Menu', 'Notification'],
    // cache: 10
    // },
    // {
    //   path: '$',
    //   component: Boot,
    // },
  ],
  beforeEachRoute: async (from: any, to: any) => {
    console.log('before each route')
    return true
  },
}

export default Routes
