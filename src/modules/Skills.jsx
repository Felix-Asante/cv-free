import React, { useState } from "react";
import Input from "../components/Input";

function SkillsModule() {
	const Skills = () => <Input type="text" placeholder="Competence" />;
	const styles = {
		btn: {
			borderRadius: "100%",
			width: "25px",
			height: "25px",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			marginLeft: "12px",
			transition: "500ms",
			":hover": {
				backgroundColor: "#0da65b",
			},
		},
		buttons: {
			marginLeft: "12px",
			alignSelf: "flex-end",
			marginBottom: "1.3rem",
		},
	};

	const [detail, setDetail] = useState([<Skills key={0} />]);

	const addDetailSkill = () => {
		setDetail((prev) => [...prev, <Skills key={detail.length} />]);
	};
	const removeDetailSkill = () => {
		setDetail(detail.slice(0, -1));
	};
	return (
		<div>
			<div className="divider"></div>
			<Input
				type="Nom de competence"
				placeholder="Programmation web"
				labelText="Nom de competence"
			/>
			<div>
				<label>Detail:</label>
				<div className="flex items-center">
					<div>{detail}</div>
					<div style={styles.buttons} className="flex">
						<button style={styles.btn} onClick={() => addDetailSkill()}>
							+
						</button>
						<button style={styles.btn} onClick={() => removeDetailSkill()}>
							-
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SkillsModule;