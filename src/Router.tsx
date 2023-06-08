import { Route, Routes } from 'react-router-dom'
import { Tasks } from './pages/todo/Tasks'
import { Timer } from './pages/timer/Timer'
import { DefaultLayout } from './layout/defaultLayout'

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Tasks />} />
                <Route path="/timer" element={<Timer />} />
            </Route>
        </Routes>
    )
}
