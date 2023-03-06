import { Button, withStyles } from '@lightningjs/ui-components'

export const styles = {
  h: 70,
  radius: 35,
  background: { color: 0xffffffff },
  icon: { color: 0xffffffff },
  text: {
    fontSize: 32,
    color: 0xff763ffc,
  },
  padding: 30,
  stroke: {
    color: 0xffffffff,
    weight: 2,
  },
  focused: {
    background: { color: 0xff763ffc },
    text: { color: 0xffffffff },
    icon: { color: 0xff1f1f1f },
  },
}
export default class TopMenuButton extends withStyles(Button, styles) {}
