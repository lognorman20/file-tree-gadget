import React, { useState } from 'react';

function App() {
	return <div>
		<Folder name="Desktop">
			<Folder name="Music">
				<File name="wokeuplikethis.mp3" />
				<File name="startedfromthebottom.mp3" />
				<File name="draco.mp3" />
			</Folder>
			<File name="cheese.js" />
			<File name="queso.js" />
			<File name="butter.js" />
		</Folder>
		<Folder name="Applications"/>
	</div>

}

const Folder = (props) => {
	const [isOpen, setIsOpen] = useState(false);
	const {name, children} = props;
	const handleClick = () => {
		setIsOpen(!isOpen);
	}
	
	const childMargin = { marginLeft: '20px' };
	return <div>
		<span onClick={handleClick}>
			{name}
		</span>
		<div style={childMargin}>
			{isOpen ? children : null}
		</div>
	</div>
}

const File = (props) => {
	return <div>{props.name}</div>
}

export default App;
