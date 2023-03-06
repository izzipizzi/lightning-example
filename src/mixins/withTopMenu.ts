import { Lightning } from '@lightningjs/sdk'
import { TopMenu } from '../components'

export default function withTopMenu(Base: Lightning.Component, layoutKey: string) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return class extends Base {
    public TopMenu!: any
    _construct() {
      super._construct();
    }
    _init() {
      this.createTopMenu()
      super._init()
    }
    createTopMenu() {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this.TopMenu = this.stage.element({
        type: TopMenu,
      })
      const Layout = super.tag(layoutKey)
      Layout.appendItems([this.TopMenu])
    }
  }
}
