import { Block, Break } from "../lib/structoids";

export default function Projects() {
	return (
		<div>
			<ProjectBlock />
		</div>
	);
}

function ProjectBlock(Logo, Desc, Screenshot) {
	return (
		<Block>
			<div>Logo</div>
			<div>ShortDesc</div>
			<div>Screenshot</div>
		</Block>
	);
}
