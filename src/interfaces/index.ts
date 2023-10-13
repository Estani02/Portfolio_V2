export interface Root {
  tracks: Track[]
}

export interface Track {
  album: Album
  artists: Artist2[]
  disc_number: number
  duration_ms: number
  explicit: boolean
  external_ids: ExternalIds
  external_urls: ExternalUrls4
  id: string
  is_local: boolean
  is_playable: boolean
  name: string
  popularity: number
  preview_url: string
  track_number: number
  type: string
  uri: string
}

export interface Album {
  album_type: string
  artists: Artist[]
  external_urls: ExternalUrls2
  id: string
  images: Image[]
  is_playable: boolean
  name: string
  release_date: string
  release_date_precision: string
  total_tracks: number
  type: string
  uri: string
}

export interface Artist {
  external_urls: ExternalUrls
  id: string
  name: string
  type: string
  uri: string
}

export interface ExternalUrls {
  spotify: string
}

export interface ExternalUrls2 {
  spotify: string
}

export interface Image {
  height: number
  url: string
  width: number
}

export interface Artist2 {
  external_urls: ExternalUrls3
  id: string
  name: string
  type: string
  uri: string
}

export interface ExternalUrls3 {
  spotify: string
}

export interface ExternalIds {
  isrc: string
}

export interface ExternalUrls4 {
  spotify: string
}

export interface WeatherRoot {
  coord: Coord
  weather: Weather[]
  base: string
  main: Main
  visibility: number
  wind: Wind
  clouds: Clouds
  dt: number
  sys: Sys
  timezone: number
  id: number
  name: string
  cod: number
}

export interface Coord {
  lon: number
  lat: number
}

export interface Weather {
  id: number
  main: string
  description: string
  icon: string
}

export interface Main {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
}

export interface Wind {
  speed: number
  deg: number
}

export interface Clouds {
  all: number
}

export interface Sys {
  type: number
  id: number
  country: string
  sunrise: number
  sunset: number
}

export interface Football {
  response: ResponseFixture[]
}

export interface ResponseFixture {
  fixture: Fixture
  league: League
  teams: Teams
  goals: Goals
  score: Score
}

export interface Fixture {
  id: number
  referee: any
  timezone: string
  date: string
  timestamp: number
  periods: Periods
  venue: Venue
  status: Status
}

export interface Periods {
  first: number
  second: any
}

export interface Venue {
  id: number
  name: string
  city: string
}

export interface Status {
  long: string
  short: string
  elapsed: number
}

export interface League {
  id: number
  name: string
  country: string
  logo: string
  flag: string
  season: number
  round: string
}

export interface Teams {
  home: Home
  away: Away
}

export interface Home {
  id: number
  name: string
  logo: string
  winner: boolean
}

export interface Away {
  id: number
  name: string
  logo: string
  winner: boolean
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
  winner: any
}

export interface Away2 {
  name: string
  logo: string
  winner: any
}

export interface Fixture2 {
  date: Date2
  time: string
  date_format: string
}

export interface Date2 {
  es: string
  en: string
}

export interface Status2 {
  timezone: string
  long: string
  short: string
  elapsed: any
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
  home: any
  away: any
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
