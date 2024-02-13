import { Sparkle } from "phosphor-react";

import '../assets/css/Header.css'

interface HeaderProps {
  title: string
}

export function Header(props: HeaderProps) {
  return (
    <div className="timeline-header">
      {props.title}
      <Sparkle />
    </div>
  )
}