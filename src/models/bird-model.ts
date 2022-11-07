import { IBird } from '../interfaces/IBird'

export class Bird {
  constructor (public iBird: IBird) {
    Object.assign(this, iBird)
  }

  fly (): string {
    return this.iBird.name
  }
}

export class Eagle extends Bird {
  fly (): string {
    return this.iBird.name
  }
}

export class Penguin extends Bird {
  fly (): any {
    return new Error('I can not Fly') // liskov substitution principle
  }

  walk (): string {
    return 'I can Walk'
  }

  swim (): string {
    return 'I can Swim'
  }
}
