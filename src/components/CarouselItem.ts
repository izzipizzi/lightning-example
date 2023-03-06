import { Lightning } from '@lightningjs/sdk'

export default class CarouselItem extends Lightning.Component {
  static override _template() {
    return {
      h: 400,
      w: 1100,
      rect: true,
      color: 0xffffffff,
      shader: { type: Lightning.shaders.RoundedRectangle, radius: 35 },
      Title: {
        x: (w: number) => w / 2,
        y: (h: number) => h / 4,
        mountX: 0.5,
        mountY: 0.1,
        text: {
          fontFace: 'Regular',
          fontSize: 24,
          textColor: 0xff000000,
        },
      },
    }
  }

  override _init() {}

  override _focus() {
    this.patch({
      smooth: { color: 0xff763ffc },
      Label: {
        smooth: { color: 0xffffffff },
      },
    })
  }
  override _unfocus() {
    this.patch({
      smooth: { color: 0xffffffff },
      Label: {
        smooth: { color: 0xff000000 },
      },
    })
  }

  set item(value: { label: string; src: string }) {
    const { label, src } = value
    this.patch({
      Title: {
        text: label.toString(),
      },
    })
  }
}
