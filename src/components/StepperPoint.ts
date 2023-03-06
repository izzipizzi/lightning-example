import { Lightning } from '@lightningjs/sdk'

export default class StepperPoint extends Lightning.Component {
  static override _template() {
    return {
      h: 20,
      w: 30,
      rect: true,
      color: 0xffffffff,
      shader: { type: Lightning.shaders.RoundedRectangle, radius: 20 },
    }
  }

  override _focus() {
    this.patch({
      smooth: { color: 0xff763ffc },
    })
  }
  override _unfocus() {
    this.patch({
      smooth: { color: 0xffffffff },
    })
  }
}
