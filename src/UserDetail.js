import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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
			<div>
				<h2>Posts Written By {username}</h2>
				<ul>
					{authorPosts.map((post) => {
						return (
							<li key={post.id}>
								<Link
									to={`/posts/${post.id}/${username}/${post.title}/${post.body}/${post.userId}`}>
									{post.title}
								</Link>
							</li>
						)
					})}
				</ul>
			</div>
		</>
	)
}
