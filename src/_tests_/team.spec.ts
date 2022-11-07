import { Team } from '../models/team-model'

describe('Team Class', () => {
  it('Position', () => {
    const team = new Team()
    const position = {
      name: 'goalKeeper',
      tShirt: 1,
      skills: ['Kick Hard', 'Run fast', 'Jump high']
    }

    expect(team.position(position.name, position.tShirt, position.skills)).toEqual(['goalKeeper', 1, ['Kick Hard', 'Run fast', 'Jump high']])
  })
  it('Soccer play', () => {
    const soccerPlayer = new Team()
    expect(soccerPlayer.attacker('')).toBe('attacker')
  })
})
