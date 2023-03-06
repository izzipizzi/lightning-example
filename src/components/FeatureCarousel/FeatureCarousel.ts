import { Lightning, Router } from '@lightningjs/sdk'
import { Row } from '@lightningjs/ui-components'
import CarouselItem from '../CarouselItem'
import StepperPoint from '../StepperPoint'
import { Observable, take } from 'rxjs'
export interface FeatureCarouselSpec extends Lightning.Component.TemplateSpec {
  FeatureStepper: object
}

export default class FeatureCarousel
  extends Row<Lightning.Component>
  implements Lightning.Component.ImplementTemplateSpec<FeatureCarouselSpec>
{
  // <Lightning.Component> {
  FeatureStepper = this.getByRef('FeatureStepper')
  FeatureStepper2 = this.getByRef('FeatureStepper')

  static _template() {
    return {
      ...super._template(),
      scrollIndex: 0,
      itemSpacing: 40,
      h: 500,
      FeatureStepper: {},
    }
  }

  set content(items: Observable<any[]>) {
    items.pipe(take(1)).subscribe((cardsArr) => {
      const cards = cardsArr.map((item: any) => {
        return this.stage.element({
          type: CarouselItem,
          item: {
            label: item.title,
          },
        })
      })
      this.appendItems(cards)
      const stepper = []
      for (let i = 0; i < cardsArr.length; i++) {
        stepper.push(
          this.stage.element({
            type: StepperPoint,
            x: i * (10 + 20) + 350,
            y: 420,
            item: {
              label: i,
            },
          }),
        )
      }
      this.FeatureStepper.children = stepper
    })
  }

  render(selected: Lightning.Component, prevSelected: Lightning.Component) {
    super.render()
    if (this.FeatureStepper.children[this.selectedIndex]) {
      let prevSelectedIndex
      if (selected) {
        this.FeatureStepper.children[this.selectedIndex]._focus()
      }
      if (prevSelected) {
        prevSelectedIndex = this.Items.childList.getIndex(prevSelected)
        this.FeatureStepper.children[prevSelectedIndex]._unfocus()
      }
      if (this.selectedIndex === prevSelectedIndex) {
        this.FeatureStepper.children[this.selectedIndex]._focus()
      }
    }
  }
}
