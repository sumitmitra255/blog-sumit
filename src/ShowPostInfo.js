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
export const ShowPostInfo = (props) => {
	const { id, username } = props.match.params
	const [userPost, setUserPost] = useState([])
	const [comment, setComment] = useState([])
	useEffect(() => {
		// api call to fetch comments
		axios
			.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
			.then((response) => {
				const result = response.data
				setComment(result)
			})
			.catch((err) => {
				alert(err.message)
			})
		axios
			.get(`https://jsonplaceholder.typicode.com/posts?id=${id}`)
			.then((response) => {
				const result = response.data[0]
				setUserPost(result)
			})
			.catch((err) => {
				alert(err.message)
			})
	}, [id])
	return (
		<>
			<Container maxWidth='lg' disableGutters='true'>
				<h1>User Name :{username}</h1>
				<h1>Title:{userPost.title}</h1>
				<h2>Body :{userPost.body}</h2>
				<hr />
				<h1>Comments</h1>
				<List component='nav' aria-label='main mailbox folders'>
					{comment.map((com, i) => {
						return (
							<ListItem button>
								<ListItemText primary={i + 1 + ' ) ' + com.body} />
							</ListItem>
						)
					})}
				</List>
				<hr />
				{/* getting a clickable link to reach all posts of the users */}
				<Link to={`/users/${userPost.userId}/${username}`}>
					<ListItem button>
						<ListItemText primary={`More posts by Author ${username} `} />
					</ListItem>
				</Link>
			</Container>
		</>
	)
}
