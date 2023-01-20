export function Block({ children }) {
	return (
		<div
			className="st-block"
			style={{
				width: "100%",
				height: "max-content",
				margin: "0.5rem 0",
				padding: "0.5rem",
				backgroundColor: "whitesmoke",
				borderRadius: "0.5rem",
				boxShadow: "0px 0px 3px 0px silver",
				display: "flex",
				justifyContent: "space-between",
			}}
		>
			{children}
		</div>
	);
}

export function Break() {
	return (
		<div
			className="st-block"
			style={{
				width: "100%",
				height: "max-content",
				margin: "0.5rem 0",
				padding: "0.5rem",
				backgroundColor: "whitesmoke",
				borderRadius: "0.5rem",
			}}
		/>
	);
}
