import { AllPost } from './AllPost'
import './App.scss'
import { ShowPostInfo } from './ShowPostInfo'
import { UsersList } from './UsersList'
import { UserDetail } from './UserDetail'
import { Home } from './Home'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import { Box, Button, ButtonGroup, Container } from '@material-ui/core'
const App = (props) => {
	return (
		<>
			<Box>
				<BrowserRouter>
					<Container>
						<br />
						<ButtonGroup
							color='primary'
							aria-label='outlined primary button group'>
							<Button>
								<Link to='/home'>
									Home
								</Link>
							</Button>
							<Button>
								<Link to='/users'>Users</Link>
							</Button>
							<Button>
								<Link to='/posts'>Posts</Link>
							</Button>
						</ButtonGroup>
						<br />
						<hr />
						<Switch>
							<Route path='/home' component={Home} />
							<Route path='/users' component={UsersList} exact={true} />
							<Route path='/users/:id/:username' component={UserDetail} />
							<Route path='/posts' component={AllPost} exact={true} />
							<Route path='/posts/:id/:username' component={ShowPostInfo} />
						</Switch>
					</Container>
				</BrowserRouter>
			</Box>
		</>
	)
}

export default App
