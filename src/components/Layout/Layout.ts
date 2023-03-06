import { Lightning } from '@lightningjs/sdk'
import { Column } from '@lightningjs/ui-components'

class Layout extends Column<Lightning.Component> {
  handleRender?: (selected: Lightning.Component, prevSelected: Lightning.Component) => void
  static _template() {
    return {
      ...super._template(),
      type: Column,
      flex: {
        paddingLeft: 40,
        paddingBottom: 200,
        paddingTop: 40,
      },
      items: [],
    }
  }

  render(selected: Lightning.Component, prevSelected: Lightning.Component) {
    super.render()
    if (typeof this.handleRender === 'function') {
      this.handleRender(selected, prevSelected)
    }
  }
}

export default Layout
