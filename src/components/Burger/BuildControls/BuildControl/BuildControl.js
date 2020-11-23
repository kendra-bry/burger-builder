import React from 'react';
import './BuildControl.css';

const BuildControl = props => {
	const { label, added, removed, disabled } = props;
	return (
		<div className="control">
			<div className="label">{label}</div>
			<button className="less" onClick={removed} disabled={disabled}>
				Remove
			</button>
			<button className="more" onClick={added}>
				Add
			</button>
		</div>
	);
};

export default BuildControl;
