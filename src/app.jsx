import { useState } from "preact/hooks";
import profilePic from "./assets/pfp.png";
import "./app.css";

export function App() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<div
			onMouseOver={() => setMenuOpen(true)}
			onMouseOut={() => setMenuOpen(false)}
			style={{
				width: menuOpen ? "65vw" : "25vh",
				height: "15vh",
				transitionDuration: "0.5s",
			}}
		>
			<div>
				<a href="">
					<PFP Open={menuOpen} />
				</a>
			</div>
			<TopMenu Open={menuOpen} />
		</div>
	);
}

function PFP({ Open }) {
	return (
		<img
			src={profilePic}
			class="icon-l aura-fixed profile"
			alt="Profile Picture"
			style={{
				borderRadius: "50%",
				position: "fixed",
				top: "50%",
				left: Open ? "20%" : "50%",
				transform: Open ? "translate(-50%, -50%)" : "translate(-50%, -50%)",
				transitionDuration: "0.3s",
			}}
		/>
	);
}

function TopMenu({ Open }) {
	return (
		<div
			class="top-menu"
			style={{
				transitionDuration: "0.3s",
				width: "60vw",
				zIndex: "-100",
				height: Open ? "15vh" : "0vh",
				position: "fixed",
				//center the menu vertically
				top: "50%",
				left: "25%",
				transform: "translateY(-50%)",

				//frosted glass effect
				backdropFilter: "blur(10px)",
				WebkitBackdropFilter: "blur(10px)",
				backgroundColor: Open ? "whitesmoke" : "white",
				borderRadius: "10px",
			}}
		>
			<div
				style={{
					width: "100%",
					height: "100%",
					alignItems: "center",
					display: "flex",
					justifyContent: "space-evenly",
					opacity: Open ? "1" : "0",
					transitionDuration: "0.3s",
				}}
			>
				<MenuItem Text="Projects" Color="#f7b2d9" />
				<MenuItem Text="About" Color="#b2f7e1" />
				<MenuItem Text="Contact" Color="#b2d9f7" />
			</div>
		</div>
	);
}

function MenuItem({ Icon, Text, Color }) {
	const [hover, setHover] = useState(false);

	return (
		<div
			style={{
				backgroundColor: Color,
				width: "30%",
				height: "85%",
				color: hover ? "white" : "black",
				fontSize: hover ? "3em" : "1em",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				transitionDuration: "0.3s",
				borderRadius: "10px",
			}}
		>
			{Text}
		</div>
	);
}
