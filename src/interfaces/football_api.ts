export interface RootFootball {
  last_match: LastMatch
  next_match: NextMatch
}

export interface LastMatch {
  teams: Teams
  fixture: Fixture
  status: Status
  league: League
  goals: Goals
  score: Score
}

export interface Teams {
  home: Home
  away: Away
}

export interface Home {
  name: string
  logo: string
  winner: boolean
}

export interface Away {
  name: string
  logo: string
  winner: boolean
}

export interface Fixture {
  date: string
  time: string
  date_format: string
}

export interface Date {
  es: string
  en: string
}

export interface Status {
  long: string
  short: string
  elapsed: number
}

export interface League {
  name: string
  country: string
  logo: string
  flag: string
  season: number
  round: string
}

export interface Goals {
  home: number
  away: number
}

export interface Score {
  halftime: Halftime
  fulltime: Fulltime
  extratime: Extratime
  penalty: Penalty
}

export interface Halftime {
  home: number
  away: number
}

export interface Fulltime {
  home: number
  away: number
}

export interface Extratime {
  home: number
  away: number
}

export interface Penalty {
  home: number
  away: number
}

export interface NextMatch {
  teams: Teams2
  fixture: Fixture2
  status: Status2
  league: League2
  goals: Goals2
  score: Score2
}

export interface Teams2 {
  home: Home2
  away: Away2
}

export interface Home2 {
  name: string
  logo: string
  winner: boolean
}

export interface Away2 {
  name: string
  logo: string
  winner: boolean
}

export interface Fixture2 {
  timezone: string
  date: string
  timestamp: number
}

export interface Date2 {
  es: string
  en: string
}

export interface Status2 {
  timezone: string
  long: string
  short: string
  elapsed: string
}

export interface League2 {
  name: string
  country: string
  logo: string
  flag: string
  season: number
  round: string
}

export interface Goals2 {
  home: number
  away: number
}

export interface Score2 {
  halftime: Halftime2
  fulltime: Fulltime2
  extratime: Extratime2
  penalty: Penalty2
}

export interface Halftime2 {
  home: number
  away: number
}

export interface Fulltime2 {
  home: number
  away: number
}

export interface Extratime2 {
  home: number
  away: number
}

export interface Penalty2 {
  home: number
  away: number
}
