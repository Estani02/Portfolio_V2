import { useTranslations } from 'next-intl'

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
import SkillsCard from '@/components/SkillsCard'
import FootballCard from '@/components/FootballCard'

export default function Home() {
  const t = useTranslations('spotify')

  return (
    <main className="m-[50px] flex flex-col gap-[80px]">
      <Header />
      <div className="grid w-full grid-cols-4 gap-8 md:grid-rows-5">
        <ThemesCard />
        <LanguagueCard />
        <AboutMe />
        <ProjectsCard />
        <LinkedinCard />
        <div className="col-start-2 row-start-3 grid max-h-[333px] grid-rows-2 gap-5">
          <EmailCard />
          <MeetCard />
        </div>
        <GitHubCard />
        <div className="col-span-2 col-start-2 row-start-1">
          <SpotifyCard translated_text={t('recently')} />
        </div>
        <WeatherCard />
        <CertificateCard />
        <SkillsCard />
        <FootballCard />
      </div>
    </main>
  )
}
