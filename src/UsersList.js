import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

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
		<div>
			<h1>USERS LIST:{userdetails.length}</h1>
			<ul>
				{userdetails.map((user) => {
					return (
						<li key={user.id}>
							<Link to={`/users/${user.id}/${user.name}`}>{user.name}</Link>
						</li>
					)
				})}
			</ul>
		</div>
	)
}
