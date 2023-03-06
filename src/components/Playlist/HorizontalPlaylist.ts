import { Row } from '@lightningjs/ui-components'
import { Lightning } from '@lightningjs/sdk'
import { Observable, take } from 'rxjs'
import { Card } from '../index'

class HorizontalPlaylist extends Row<Lightning.Component> {
  static _template() {
    return {
      ...super._template(),
      h: 330, // 300 height and 30 item spacing
      scrollIndex: 0,
      itemSpacing: 30,
    }
  }

  set content(items: Observable<any[]>) {
    items.pipe(take(1)).subscribe((cardsArr) => {
      const cards = cardsArr.map((card) => {
        return this.stage.element({
          type: Card,
          item: {
            label: card.title,
          },
        })
      })
      this.appendItems(cards)
    })
  }
}

export default HorizontalPlaylist
