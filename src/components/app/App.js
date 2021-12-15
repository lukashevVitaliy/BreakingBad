import { React, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppHeader from "../appHeader";
import AppFooter from "../appFooter";

import Spinner from '../spinner';

const MainPage = lazy(() => import("../pages/mainPage"));
const CharactersPage = lazy(() => import("../pages/charactersPage"));
const SingleCharLayot = lazy(() => import("../pages/singleCharLayot"));
const EpisodesPage = lazy(() => import("../pages/episodesPage"));
const Page404 = lazy(() => import('../pages/page404'));




function App() {
	return (
		<Router>
			<div className="app">
				<AppHeader />
				<main>
					<Routes>
						<Route path='/' element=
							{
								<Suspense fallback={<Spinner />}> <MainPage /> </Suspense>
							}
						/>
						<Route path='characters' element=
							{
								<Suspense fallback={<Spinner />}> <CharactersPage /> </Suspense>
							}
						/>

						<Route path='characters/:charId' element=
							{
								<Suspense fallback={<Spinner />}> <SingleCharLayot /> </Suspense>
							}
						/>

						<Route path='episodes' element=
							{
								<Suspense fallback={<Spinner />}> <EpisodesPage /> </Suspense>
							}
						/>
						<Route path='*' element=
							{
								<Suspense fallback={<Spinner />}> <Page404 /> </Suspense>
							}
						/>
					</Routes>
				</main>
				<footer>
					<AppFooter />
				</footer>
			</div>
		</Router>

	)
}

export default App;