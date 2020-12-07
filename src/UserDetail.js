import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {
	Container,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from '@material-ui/core'
export const UserDetail = (props) => {
	const { id, username } = props.match.params
	const [authorPosts, setAuthorPosts] = useState([])
	useEffect(() => {
		// fetching all posts by user
		axios
			.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
			.then((response) => {
				const res = response.data
				setAuthorPosts(res)
			})
			.catch((err) => {
				alert(err.message)
			})
	}, [id])
	return (
		<>
			<Container maxWidth='lg' disableGutters='true'>
				<h2>Posts Written By {username}</h2>
				<List component='nav' aria-label='main mailbox folders'>
					{authorPosts.map((post, i) => {
						return (
							<Link to={`/posts/${post.id}/${username}`}>
								<ListItem button>
									<ListItemText primary={i + 1 + ')  ' + post.title} />
								</ListItem>
							</Link>
						)
					})}
				</List>
			</Container>
		</>
	)
}
