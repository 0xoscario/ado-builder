// PrimaryHeaderBar - Component which shows graphical header to tops of pages
import React from 'react'

const PrimaryHeaderBar = () => {
	return (
		<div
			id="headerBar"
			style={{ height: '48px' }}
			className="container-fluid d-flex align-items-center dark-opacity text-light"
		>
			<img
				src="./images/AND_Logo-Full.svg"
				height="18px"
				width="auto"
				className="ml-3 mr-2"
			/>
			<p
				className="h2"
				className="mb-0 pl-3 align-middle font-weight-light"
				style={{ letterSpacing: '0.1em', fontSize: '0.9em' }}
			>
				FUNCTIONAL TERRA NFTs
			</p>
		</div>
	)
}

export default PrimaryHeaderBar
