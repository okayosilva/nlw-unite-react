import LogoSvg from '../assets/logo.svg'
import { NavLink } from './nav-link'

export function Header() {
  return (
    <div className="flex items-center gap-5 py-2">
      <img src={LogoSvg} alt="Logo pass in" />

      <nav className="flex gap-5">
        <NavLink href="/a">Eventos</NavLink>
        <NavLink isActive>Participantes</NavLink>
      </nav>
    </div>
  )
}
