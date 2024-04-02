import LogoSvg from '../assets/logo.svg'

export function Header() {
  return (
    <div className="flex items-center gap-5 py-2">
      <img src={LogoSvg} alt="Logo pass in" />

      <nav className="flex gap-5">
        <a href="" className="text-sm font-medium text-zinc-300">
          Eventos
        </a>
        <a href="" className="text-sm font-medium">
          Participantes
        </a>
      </nav>
    </div>
  )
}
