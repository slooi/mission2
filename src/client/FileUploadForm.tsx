// import React, { useState } from 'react';

// const FileUploadForm = () => {
// 	const [file, setFile] = useState(null);

// 	const handleFileChange = (event) => {
// 		setFile(event.target.files[0]);
// 	};

// 	const handleFormSubmit = (event) => {
// 		event.preventDefault();

// 		const formData = new FormData();
// 		formData.append('photo', file);

// 		fetch('/upload', {
// 			method: 'POST',
// 			body: formData,
// 		})
// 			.then(response => response.json())
// 			.then(data => {
// 				console.log('File uploaded successfully:', data);
// 			})
// 			.catch(error => {
// 				console.error('Error uploading file:', error);
// 			});
// 	};

// 	return (
// 		<form onSubmit={handleFormSubmit} encType="multipart/form-data">
// 			<input type="file" accept="image/*" name="photo" onChange={handleFileChange} />
// 			<input type="submit" value="Upload" />
// 		</form>
// 	);
// };

// export default FileUploadForm;