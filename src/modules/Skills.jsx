import React, { useEffect, useRef, useState } from "react";
import FormGroup from "../components/FormGroup";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import {
	setCompetenceTitle,
	setCompetenceSkill,
} from "../redux/features/skills.slice";
import { onCompetenceSkillRemove } from "../redux/features/skills.slice";
function SkillsModule({ index }) {
	const { competence } = useAppSelector((state) => state.skill);
	const dispatch = useAppDispatch();
	const stepCount = useRef(null);
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
	const Skills = ({ step, index }) => {
		stepCount.current = step;
		return (
			<input
				type="text"
				placeholder="Competence"
				onChange={(e) =>
					dispatch(
						setCompetenceSkill({
							step,
							index,
							text: e.target.value,
						})
					)
				}
				value={competence[index]?.items[step]}
				style={{ marginBottom: "14px" }}
			/>
		);
	};

	const [detail, setDetail] = useState([
		<Skills key={0} index={index} step={0} />,
	]);

	// ENDED HERE
	useEffect(() => {
		if (competence[index]?.items?.length > 1) {
			const oldDetails = [];
			for (let i = 0; i < competence[index].items.length; i++) {
				oldDetails.push(<Skills key={i} index={index} step={i} />);
			}
			setDetail(oldDetails);
		}
	}, []);

	const addDetailSkill = () => {
		setDetail((prev) => [
			...prev,
			<Skills key={detail.length} step={detail.length} index={index} />,
		]);
	};
	const removeDetailSkill = () => {
		setDetail(detail.slice(0, -1));
		dispatch(onCompetenceSkillRemove({ index, step: stepCount }));
	};

	return (
		<div>
			<div className="divider"></div>
			<FormGroup labelText="Nom de competence">
				<input
					type="Nom de competence"
					placeholder="Programmation web"
					onChange={(e) =>
						dispatch(setCompetenceTitle({ index, text: e.target.value }))
					}
					value={competence[index]?.title}
				/>
			</FormGroup>
			<div>
				<label>Detail:</label>
				<div className="flex items-center">
					<div>{detail}</div>
					<div style={styles.buttons} className="flex">
						<button style={styles.btn} onClick={() => addDetailSkill()}>
							+
						</button>
						{detail.length > 1 && (
							<button style={styles.btn} onClick={() => removeDetailSkill()}>
								-
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default SkillsModule;
