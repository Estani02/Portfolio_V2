import './SongWaves.css'

export function SongWaves({ pause }: { pause: boolean }) {
  return (
    <ul className={`wave-menu ${pause ? '' : 'paused'}`}>
      <li />
      <li />
      <li />
      <li />
      <li />
      <li />
      <li />
      <li />
      <li />
      <li />
    </ul>
  )
}
