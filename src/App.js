import React, { useState } from 'react';

function App() {
	const mainStyles = { 
		marginLeft: '10px',
		marginTop: '10px'
	};
	
	return <div style={mainStyles}>
		<Folder name="Desktop">
			<Folder name="Music">
				<File name="wokeuplikethis.mp3" />
				<File name="startedfromthebottom.mp3" />
				<File name="draco.mp3" />
			</Folder>
			<File name="cheese.jpeg" />
			<File name="queso.jpeg" />
			<File name="butter.png" />
		</Folder>
		<Folder name="Applications"/>
	</div>

}

const Folder = (props) => {
	const [isOpen, setIsOpen] = useState(false);
	const {name, children} = props;
	const direction = isOpen ? 'down' : 'right';
	const handleClick = () => {
		setIsOpen(!isOpen);
	}
	
	const childMargin = { marginLeft: '20px' };
	return <div>
		<span onClick={handleClick}>
			<i className="blue folder icon"></i>
			<i className={`caret ${direction} icon`}></i>
		</span>
		{name}
		<div style={childMargin}>
			{isOpen ? children : null}
		</div>
	</div>
}

const File = (props) => {
	const {name} = props;
	const fileExtension = name.split('.')[1];
	
	const fileIcons = {
		mp3 : 'headphones',
		jpeg : 'file image',
		png: 'file image outline'
	};

	return <div>
		<i className={`${fileIcons[fileExtension]} icon`}></i>
		{name}
	</div>
}

export default App;