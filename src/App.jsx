
// import reactLogo from './assets/react.svg'
import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import SharedLayout from './components/SharedLayout/SharedLayout'
import { NotFindPage } from './pages/NotFindPage/NotFindPage';



const Home = lazy(() => import('./pages/Home/Home'));
const UpComingMoviesPage = lazy(()=> import('./pages/UpcomingMoviesPage/UpcomingMoviesPage'));
const WatchListPage = lazy(()=> import('./pages/WatchListPage/WatchListPage'));

const MoviesPage = lazy(()=> import('./pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage'));
const MovieCast = lazy(()=> import('./components/MovieCast/MovieCast'));
const MovieReviews = lazy(()=> import('./components/MovieReviews/MovieReviews'));


function App() {
  
  return (
    <div>
      <Routes>
        <Route path='/' element={<SharedLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='movies' element={<MoviesPage />} />
          <Route path='watchlist' element={<WatchListPage/>}/>
          <Route path='upcoming' element={<UpComingMoviesPage/>}/>
          <Route path='movies/:id' element={<MovieDetailsPage />}>
            <Route path='cast' element={<MovieCast/>}/> 
            <Route path='reviews' element={<MovieReviews />}/> 
          </Route>
          <Route path='*' element={<NotFindPage/>}/>
          </Route>
      </Routes>
     </div>
  )
}

export default App;