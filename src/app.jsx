import { useState, useEffect } from "preact/hooks";
import profilePic from "./assets/pfp_halfres.jpg";
import "./app.css";

import About from "./pages/about.jsx";
import Projects from "./pages/projects.jsx";
import Contact from "./pages/contact.jsx";

export function App() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [activePanel, setActivePanel] = useState("none");

	//handle close panel
	const ClosePanel = () => {
		if (!event.target.closest(".panel")) {
			setActivePanel("none");
		}
	};

	return (
		<div
			onMouseEnter={() => setMenuOpen(true)}
			onMouseLeave={() => setMenuOpen(false)}
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
			<TopMenu Open={menuOpen} SetFunction={setActivePanel} />
			<div>
				<div
					style={{
						position: "fixed",
						left: "0",
						bottom: "0",
						width: "100vw",
						height: "100vh",
						zIndex: "999",
						transitionDuration: "0.3s",
						//smooth bezier transition
						backgroundColor:
							activePanel != "none" ? "rgba(0,0,0,0.5)" : "#FEFEFE",
						display: activePanel != "none" ? "block" : "none",
					}}
					onClick={ClosePanel}
				></div>
				<Panel Active={activePanel} />
			</div>
		</div>
	);
}

function Panel({ Active }) {
	const [contentVisible, setContentVisible] = useState(false);
	const [content, setContent] = useState(<div></div>);

	const handleTransitionEnd = (event) => {
		if (event.propertyName === "height") {
			setContentVisible(Active !== "none");
		}
	};

	useEffect(() => {
		switch (Active) {
			case "About":
				setContent(<About />);
				break;
			case "Projects":
				setContent(<Projects />);
				break;
			case "Contact":
				setContent(<Contact />);
				break;
			default:
				setContent(null);
				break;
		}
	}, [Active]);

	return (
		<div
			className="panel"
			style={{
				transitionDuration: "0.2s",
				transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)",
				position: "absolute",
				left: "10vw",
				bottom: "5vh",
				zIndex: "1000",
				width: "80vw",
				height: Active !== "none" ? "90vh" : "0vh",
				backgroundColor: "whitesmoke",
				boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
				borderRadius: "25px",
			}}
			onTransitionEnd={handleTransitionEnd}
		>
			<div
				className="content"
				style={{
					display: contentVisible ? "block" : "none",
					textAlign: "left",
					padding: "2rem 4rem",
					overflowY: "scroll",
					height: "72.5vh",
					margin: "5vh",
					boxShadow:
						"inset 0px 30px 10px -5px rgba(220,220,220,0.75), inset 0px -30px 10px -5px rgba(220,220,220,0.75)",
				}}
			>
				{content}
			</div>
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
				zIndex: 999,
				position: "fixed",
				top: "50%",
				left: Open ? "20%" : "50%",
				transform: Open ? "translate(-50%, -50%)" : "translate(-50%, -50%)",
				transitionDuration: "0.3s",
			}}
		/>
	);
}

function TopMenu({ Open, SetFunction }) {
	return (
		<div
			class="top-menu"
			style={{
				transitionDuration: "0.3s",
				width: "60vw",
				zIndex: "100",
				height: Open ? "15vh" : "0vh",
				position: "fixed",
				top: "50%",
				left: "25%",
				transform: "translateY(-50%)",
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
					justifyContent: "right",
					opacity: Open ? "1" : "0",
					transitionDuration: "0.3s",
				}}
			>
				<MenuItem
					Text="Projects"
					Color="#f7b2d9"
					Icon={"Science"}
					SetFunction={SetFunction}
				/>
				<MenuItem
					Text="About"
					Color="#b2f7e1"
					Icon={"Info"}
					SetFunction={SetFunction}
				/>
				<MenuItem
					Text="Contact"
					Color="#b2d9f7"
					Icon={"Contacts"}
					SetFunction={SetFunction}
				/>
			</div>
		</div>
	);
}

function MenuItem({ Icon, Text, Color, SetFunction }) {
	const [hover, setHover] = useState(false);

	//random deg within 15deg
	const randomDeg = Math.floor(Math.random() * 30) - 15;

	//handle click
	const OnClick = () => {
		SetFunction(Text);
	};

	return (
		<div
			onClick={OnClick}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			style={{
				transitionDuration: "0.3s",
				marginLeft: "0.5rem",
				marginRight: "0.5rem",
				backgroundColor: Color,
				minWidth: "10%",
				width: hover ? "55%" : "30%",
				height: "85%",
				color: hover ? "black" : "gray",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				borderRadius: "10px",
			}}
		>
			<span
				className="material-symbols-outlined"
				style={{
					scale: "300%",
					marginLeft: "25px",
					marginRight: "35px",
					rotate: hover ? `${randomDeg}deg` : "0deg",
					transitionDuration: "0.3s",
				}}
			>
				{Icon}
			</span>
			<h2>{hover ? Text : null}</h2>
		</div>
	);
}
