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
import ExperienceCard from '@/components/ExperienceCard'
import TerminalCard from '@/components/Terminal/TerminalCard'

export default function Home() {
  const t = useTranslations('spotify')
  const t2 = useTranslations('football')

  return (
    <main className="relative m-[20px] flex flex-col gap-[80px] xl:m-[50px]">
      <p className="absolute right-0 top-0 text-xs text-[#ffffff77] md:text-sm">BETA</p>
      <Header />
      <div
        className="grid w-full grid-cols-3 gap-4 xl:grid-cols-4 xl:grid-rows-5 xl:gap-8"
        id="about"
      >
        <ThemesCard />
        <div className="col-span-2 flex items-end justify-center xl:col-start-2 xl:row-start-1">
          <SpotifyCard translated_text={t('recently')} />
        </div>
        <LanguagueCard />
        <AboutMe />
        <ProjectsCard />
        <LinkedinCard />
        <div className="grid max-h-[333px] grid-rows-2 gap-5 xl:col-start-2 xl:row-start-3">
          <EmailCard />
          <MeetCard />
        </div>
        <GitHubCard />
        <WeatherCard />
        <ExperienceCard />
        <SkillsCard />
        <FootballCard
          translated_text={{ last_match: t2('last_match'), next_match: t2('next_match') }}
        />
        <TerminalCard />
        <CertificateCard />
      </div>
    </main>
  )
}
