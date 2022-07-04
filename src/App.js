import React from 'react';

function App() {
	return <div>
		<Folder name="Desktop">
			<File name="cheese.js" />
			<File name="queso.js" />
			<File name="butter.js" />
		</Folder>
		<Folder name="Applications"/>
	</div>

}

const Folder = (props) => {
	console.log(props);
	const borderStyle = { border: '2px solid green' }
	return <div style={borderStyle}>
		{props.name}
		{props.children}
	</div>
}

const File = (props) => {
	return <div>{props.name}</div>
}

export default App;
