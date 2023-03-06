import { Lightning, Router, Utils } from '@lightningjs/sdk'
import { Column } from '@lightningjs/ui-components'
import { FeatureCarousel, HorizontalPlaylist, Layout, TopMenu } from '../../components'
import { of } from 'rxjs'
import cards from '../../dummyData/cards'
import { withTopMenu } from '../../mixins'

export interface MainPageSpec extends Lightning.Component.TemplateSpec {
  Layout: typeof Column
  TopMenu: typeof TopMenu
  createFeatureCarousel: () => void
}

export interface MainPageTypeConfig {
  EventMapType: Lightning.Component.EventMap
  SignalMapType: Lightning.Component.SignalMap
  TextureType: Lightning.Texture

  IsPage: boolean
  HistoryStateType: Record<string, unknown>
}

class MainPage
  extends Lightning.Component<MainPageSpec, MainPageTypeConfig>
  implements Lightning.Component.ImplementTemplateSpec<MainPageSpec>
{
  private Layout = this.getByRef('Layout')
  private FeatureCarousel!: any
  private TopMenu!: any

  static override _template() {
    return {
      Background: {
        h: 1080,
        w: 1920,
        src: Utils.asset('images/background.png'),
      },
      Layout: {
        type: Layout,
        scrollIndex: 2,
      },
    }
  }

  override _init() {
    this.createFeatureCarousel()
    this.createPlayLists(10)
    this.Layout.handleRender = this.handleLayoutRender.bind(this)
    this.handleLayoutRender(null as any, null as any)
  }

  createFeatureCarousel() {
    this.FeatureCarousel = this.stage.element({
      type: FeatureCarousel,
      content: of(cards),
    })
    this.Layout.appendItems([this.FeatureCarousel])
  }

  createPlayLists(amount: number) {
    for (let i = 0; i < amount; i++) {
      const playlist = this.stage.element({
        type: HorizontalPlaylist,
        content: of(cards),
      })
      this.Layout.appendItems([playlist])
    }
  }

  handleLayoutRender(selected: Lightning.Component, prevSelected: Lightning.Component) {
    // here we can handle scroll position on screen
    // if (prevSelected === this.FeatureCarousel) {
    // if (selected === this.TopMenu) {
    //   this.Layout.scrollIndex = 1
    // } else {
    //   this.Layout.scrollIndex = 0
    // }
    // }
  }

  override _getFocused() {
    return this.Layout
  }
}
export default withTopMenu(MainPage as any, 'Layout')
