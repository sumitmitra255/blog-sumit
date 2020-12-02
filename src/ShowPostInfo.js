import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
export const ShowPostInfo = (props) => {
	const { id, username, title, body, userid } = props.match.params
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
	}, [id])

	return (
		<>
			<div>
				<h1>User Name :{username}</h1>
				<h1>Title:{title}</h1>
				<h2>Body :{body}</h2>
				<hr />
				<h1>Comments</h1>
				<ul>
					{comment.map((com) => {
						return <li key={com.id}>{com.body}</li>
					})}
				</ul>
				<hr />
				{/* getting a clickable link to reach all posts of the users */}
				<Link to={`/users/${userid}/${username}`}>
					More posts of author:{username}
				</Link>
			</div>
		</>
	)
}
