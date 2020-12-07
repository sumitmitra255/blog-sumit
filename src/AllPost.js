import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import {
	Container,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from '@material-ui/core'
export const AllPost = (props) => {
	const [allPost, setAllPost] = useState([])
	const [username, setUsername] = useState({})

	useEffect(() => {
		// api call for fetching posts
		axios
			.get('https://jsonplaceholder.typicode.com/posts')
			.then((response) => {
				const result = response.data
				setAllPost(result)
			})
			.catch((err) => {
				alert(err.message)
			})
		// api calls to fetch usernames
		axios
			.get('https://jsonplaceholder.typicode.com/users')
			.then((response) => {
				const result = response.data
				setUsername(result)
			})
			.catch((err) => {
				alert(err.message)
			})
	}, [])
	return (
		<>
			<div>
				<h1>Total Posts:{allPost.length}</h1>
				<Container maxWidth='lg' disableGutters='true'>
					{username.length
						? allPost.map((post, i) => {
								// return statement to send props to the showpostinfo component
								// using lodash to find usernames dynamically
								return (
									<Link
										to={`/posts/${post.id}/${
											_.find(username, ['id', post.userId]).name
										}`}>
										<ListItem button>
											<ListItemText primary={i + 1 + ')   ' + post.title} />
										</ListItem>
									</Link>
								)
						  })
						: 'Loading....'}
				</Container>
			</div>
		</>
	)
}
