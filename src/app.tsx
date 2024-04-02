import { AttendeeList } from './components/attendee-list'
import { Header } from './components/header'

export function App() {
  return (
    <div className="max-w-webApp mx-auto flex flex-col gap-5 py-5">
      <Header />
      <AttendeeList />
    </div>
  )
}
