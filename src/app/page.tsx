import Header from '@/components/Header'
import MeetCard from '@/components/MeetCard'
import CertificateCard from '@/components/CertificateCard'
import SpotifyCard from '@/components/Spotify/SpotifyCard'
import WeatherCard from '@/components/Weather/WeatherCard'
import AboutMe from '@/components/AboutMe'
import LinkedinCard from '@/components/LinkedinCard'
import EmailCard from '@/components/EmailCard'
import GitHubCard from '@/components/GitHubCard'
import ProjectsCard from '@/components/ProjectsCard'
import ThemesCard from '@/components/ThemesCard'
import LanguagueCard from '@/components/LanguagueCard'

export default function Home() {
  return (
    <main className="m-[50px] flex flex-col gap-[80px]">
      <Header />
      <ThemesCard />
      <LanguagueCard />
      <div className="grid w-full grid-cols-4 gap-8 md:grid-rows-5">
        <AboutMe />
        <ProjectsCard />
        <LinkedinCard />
        <div className="row-start-2 grid max-h-[333px] grid-rows-2 gap-5">
          <EmailCard />
          <MeetCard />
        </div>
        <GitHubCard />
        <SpotifyCard />
        <WeatherCard />
        <CertificateCard />
      </div>
    </main>
  )
}
