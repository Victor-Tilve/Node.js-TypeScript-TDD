import { IsoccerPlay, ITeam } from '../interfaces/ITeam'

export class Team implements ITeam, IsoccerPlay {
  position (name: string, tShirt: number, skills: any[]): any {
    return [name, tShirt, skills]
  }

  attacker (name: string): any {
    name = 'attacker'
    return name
  }
}
