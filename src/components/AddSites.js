/*import React, { useState } from "react";

function AddSites({ submit }) {
  const [site, setSite] = useState({
    name: "",
    desription: "",
    contact: "",
    link: "",
  });

  const handler = (event) => {
    setSite((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const handleForm = (e) => {
    e.preventDefault();
    submit(site);
  };
  return (
    <div className="formContainer">
      <h3>Add New Site</h3>
      <form>
        <fieldset>
          <h2>Details of Company</h2>
          <div className="names">
            <div className="study">
              <label>
                Name
                <input
                  name="name"
                  value={company.name}
                  type="text"
                  onChange={handler}
                />
              </label>
            </div>
          </div>
          <div className="names">
            <div className="icon">
              <label>
                Desrciption
                <input
                  name="service"
                  value={description.service}
                  type="text"
                  onChange={handler}
                />
              </label>
            </div>
            <div className="under">
              <label>
                {" "}
                Contact
                <input
                  name="contact"
                  type="number"
                  value={ contact.company}
                  onChange={handler}
                />
              </label>
            </div>
            <div className="anis">
              <label>
                Link
                <input
                  name="link"
                  value={Site.Link}
                  type="text"
                  onChange={handler}
                />
              </label>
            </div>
          </div>
        </fieldset>
        <button className="form" onClick={handleForm}>
          Add new Site
        </button>
      </form>
    </div>
  );
}

export default AddSite;*/
