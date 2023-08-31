import { useState } from "react";

function NewListingForm({onAddNewListingSubmit, url}) {
    const initialValue = {
        description: "",
        image: "",
        location: ""
    }
    const [formData, setFormData] = useState(initialValue)

    function handleChange (e){
        const {name, value} = e.target

        setFormData({
            ...formData,
            [name]: value
        })
    }
    
    function handleNewListingSubmit (e){
        e.preventDefault()

        fetch(url, {
            method: "POST",
            headers: {
                "content-type" : "application/json",
                "accept" : "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {
            onAddNewListingSubmit(data)
            setFormData(initialValue)
        })
    }

  return (
    <form className="searchbar" onSubmit={handleNewListingSubmit}>
      <input
        type="text"
        name="description"
        placeholder="description..."
        value={formData.description}
        onChange={handleChange}
      />
      <input
        type="text"
        name="image"
        placeholder="image url..."
        value={formData.image}
        onChange={handleChange}
      />
      <input
        type="text"
        name="location"
        placeholder="location..."
        value={formData.location}
        onChange={handleChange}
      />
      <button type="submit">Add New Listing</button>
    </form>
  );
}

export default NewListingForm;
