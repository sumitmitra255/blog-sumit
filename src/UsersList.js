import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {
	Container,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from '@material-ui/core'
export const UsersList = (props) => {
	const [userdetails, setUserDetails] = useState([])
	useEffect(() => {
		// api call to fetch users information
		axios
			.get('https://jsonplaceholder.typicode.com/users')
			.then((response) => {
				const res = response.data
				setUserDetails(res)
			})
			.catch((err) => {
				alert(err.message)
			})
	}, [])
	return (
		<>
			<Container maxWidth='lg' disableGutters='true'>
				<h1>USERS LIST:{userdetails.length}</h1>
				<List component='nav' aria-label='main mailbox folders'>
					{userdetails.map((user, i) => {
						return (
							<Link to={`/users/${user.id}/${user.name}`}>
								<ListItem button>
									<ListItemText primary={i + 1 + ')  ' + user.name} />
								</ListItem>
							</Link>
						)
					})}
				</List>
			</Container>
		</>
	)
}
