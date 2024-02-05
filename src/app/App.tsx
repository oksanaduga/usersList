import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { UserPage } from '../pages/UserPage'
import classNames from 'classnames'

export const App = () => {
  return (
        <div className={classNames('app', 'dark_theme')}>
            <BrowserRouter>
                <Routes>
                    <Route element={<UserPage />} path={'/'} />
                </Routes>
            </BrowserRouter>
        </div>
  )
}
