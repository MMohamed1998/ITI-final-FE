import React, { useState } from 'react';
import styles from './User.module.css';
import { useChangeUserImageMutation } from "../../services/user";

function General() {
  const [changeUserImage, { isLoading, isError, error }] = useChangeUserImageMutation();
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      alert('Please select an image.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('image', image);
      console.log(image)
      console.log(formData)
      await changeUserImage(formData);
      alert('Image updated successfully.');
    } catch (error) {
      console.error('Error updating image:', error);
      alert('Failed to update image. Please try again.');
    }
  };

  return (
    <div className={`container`}>
      <h2>Update User Image</h2>
      <form onSubmit={handleSubmit}>
        <div className={`formGroup`}>
          <label htmlFor="image">Select Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <button type="submit" disabled={isLoading}>Submit</button>
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error: {error.message}</p>}
      </form>
    </div>
  );
}

export default General;

  // const handleFileChange = (event) => {
  //   const selectedImage = event.target.files[0];
  //   console.log(selectedImage); // Log the selected image
  //   setImage(selectedImage); // Update the image state

  //   if (selectedImage) {
  //     const formData = new FormData();
  //     formData.append('image', selectedImage); // Use selectedImage directly here
  //     console.log(formData);
  //     // Call the mutation with the updated image
  //     changeUserImage(formData);
  //   }
  // };

  // return (
  //   <>
  //     <div className="row">
  //       <div className="ps-5 position-relative">
  //         <img className={`mt-3 ${styles.user_image}`} src={profimg} alt="" />
  //         <div>
  //           <input
  //             type="file"
  //             className={`btn ${styles.change_image}`}
  //             style={{ display: 'none' }}
  //             id="fileInput"
  //             onChange={handleFileChange}
  //           />
  //           <label htmlFor="fileInput" className={`btn ${styles.change_image}`}>
  //             <i className="fa-solid fa-camera text-muted fs-3"></i>
  //           </label>
  //         </div>
  //       </div>
  //     </div>
  //     <div className="row">
  //       <div className="mb-3">
  //         <label htmlFor="formFile" className="form-label">Default file input example</label>
  //         <input className="form-control" type="file" id="formFile" onChange={handleFileChange} />
  //       </div>
  //     </div>
  //   </>
  // );