import React from 'react'

import CssIcon from '@/assets/svgs/skills/CssIcon'
import ExpressIcon from '@/assets/svgs/skills/ExpressIcon'
import FigmaIcon from '@/assets/svgs/skills/FigmaIcon'
import GitIcon from '@/assets/svgs/skills/GitIcon'
import HtmlIcon from '@/assets/svgs/skills/HtmlIcon'
import JavascriptIcon from '@/assets/svgs/skills/JavascriptIcon'
import NextIcon from '@/assets/svgs/skills/NextIcon'
import NodeIcon from '@/assets/svgs/skills/NodeIcon'
import PostgresIcon from '@/assets/svgs/skills/PostgresIcon'
import ReactIcon from '@/assets/svgs/skills/ReactIcon'
import TailwindIcon from '@/assets/svgs/skills/TailwindIcon'
import TypescriptIcon from '@/assets/svgs/skills/TypescriptIcon'
import PythonIcon from '@/assets/svgs/skills/PythonIcon'
import MongoIcon from '@/assets/svgs/skills/MongoIcon'

function SkillsCard() {
  return (
    <div className="col-start-1 row-start-4 grid h-full grid-cols-4 items-center justify-center justify-items-center gap-1 rounded-2xl bg-gradient-to-tl from-[#cc2b5e]/30 to-[#753a88]/30 p-5 text-center shadow-2xl shadow-[#cc2b5e]/30 ">
      <HtmlIcon className="h-10 w-full max-w-[40px]" />
      <CssIcon className="h-12 w-full max-w-[48px]" />
      <JavascriptIcon className="h-10 w-full max-w-[40px]" />
      <TypescriptIcon className="h-10 w-full max-w-[40px]" />
      <ReactIcon className="h-10 w-full max-w-[40px]" />
      <NextIcon className="h-10 w-full max-w-[40px]" />
      <TailwindIcon className="h-10 w-full max-w-[40px]" />
      <NodeIcon className="h-10 w-full max-w-[40px]" />
      <ExpressIcon className="h-10 w-full max-w-[40px]" />
      <PostgresIcon className="h-10 w-full max-w-[40px]" />
      <MongoIcon className="h-10 w-full max-w-[40px]" />
      <PythonIcon className="h-10 w-full max-w-[40px]" />
      <GitIcon className="h-10 w-full max-w-[40px]" />
      <FigmaIcon className="h-10 w-full max-w-[40px]" />
    </div>
  )
}

export default SkillsCard
