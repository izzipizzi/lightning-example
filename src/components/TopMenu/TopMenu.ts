import { Lightning } from '@lightningjs/sdk'
import { Row } from '@lightningjs/ui-components'
import TopMenuButton from './TopMenuButton'

const headerButtons = ['Watch live', 'Favorites', 'Search', 'History', 'Settings']

export default class TopMenu extends Row<Lightning.Component> {
  // TopMenu = this.getByRef('TopMenu')!
  static _template() {
    return {
      scrollIndex: 0,
      neverScroll: true,
      itemSpacing: 40,
      h: 120,
      w: 1860,
      flex: {
        justifyContent: 'flex-end',
        paddingRight: 20,
      },
    }
  }
  _init() {
    super._init()
    const buttons = headerButtons.map((title, i) =>
      this.stage.element({
        type: TopMenuButton,
        title: title,
      }),
    )
    console.log(buttons)
    this.appendItems(buttons)
  }
}
