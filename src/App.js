import { AllPost } from './AllPost'
import './App.css'
import { ShowPostInfo } from './ShowPostInfo'
import { UsersList } from './UsersList'
import { UserDetail } from './UserDetail'
import { Home } from './Home'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
const App = (props) => {
	return (
		<div>
			<BrowserRouter>
				<Link to='/home'>Home |</Link>
				<Link to='/users'>Users |</Link>
				<Link to='/posts'>Posts</Link>
				<Switch>
					<Route path='/home' component={Home} />
					<Route path='/users' component={UsersList} exact={true} />
					<Route path='/users/:id/:username' component={UserDetail} />
					<Route path='/posts' component={AllPost} exact={true} />
					<Route
						path='/posts/:id/:username/:title/:body/:userid'
						component={ShowPostInfo}
					/>
				</Switch>
			</BrowserRouter>
		</div>
	)
}

export default App
