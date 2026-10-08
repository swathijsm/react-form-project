import { useState } from "react";
import "../App.css";
function Registration() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        gender: "",
        department: "",
        skills: [],
        address: ""
    });

    // Submitted data
    const [submittedData, setSubmittedData] = useState(null);


    //Handle the form fields
    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    };
    //Handle the form submit
    const handleSubmit = (e) => {
        console.log("inside handleSubmit")
        e.preventDefault();
        const isValid = validateForm();
        if (!isValid) {
            console.log("inside validation")
            return;
        }
        console.log("Form submitted:", formData);
        setSubmittedData(formData);


    }

    function handleSkillChange(e) {
        const { value, checked } = e.target;
        if (checked) {
            setFormData({ ...formData, skills: [...formData.skills, value] })
        }
    }
    //Error messages
    const [errors, setErrors] = useState({});

    // Validate form
    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!formData.email.includes("@")) {
            newErrors.email = "Enter a valid email";
        }

        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
            newErrors.password =
                "Password must contain at least 6 characters";
        }

        if (!formData.gender) {
            newErrors.gender = "Please select gender";
        }

        if (!formData.department) {
            newErrors.department =
                "Please select a department";
        }

        if (formData.skills.length === 0) {
            newErrors.skills =
                "Please select at least one skill";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    // Reset form
    const handleReset = () => {
        setFormData({
            name: "",
            email: "",
            password: "",
            gender: "",
            department: "",
            skills: [],
            address: ""
        });

        setErrors({});
        setSubmittedData(null);
    };

    return <>
        <div className="container">
            <div className="form-card">
                <h3>RegistrationForm</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        {/*Fullname*/}
                        <label>Fullname</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Pls Entername" />
                        {errors.name && (<p className="error">{errors.name}</p>)}
                    </div>
                    {/*Email*/}
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Pls enter Email" />
                        {errors.email && (<p className="error">{errors.email}</p>)}
                    </div>
                    {/*password*/}
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="password" />
                        {errors.password && <p className="error">{errors.password}</p>}
                    </div>
                    {/*Gender*/}
                    <div className="form-group">
                        <label>Gender</label>
                        <div className="radio-group">
                            <label>
                                <input type="radio" name="gender" value="Male" checked={formData.gender === "Male"} onChange={handleChange} />
                                Male
                            </label>
                            <label>
                                <input type="radio" name="gender" value="Female" checked={formData.gender === "Female"} onChange={handleChange} />
                                Female
                            </label>
                            {errors.gender && (
                                <p className="error">
                                    {errors.gender}
                                </p>
                            )}
                        </div>
                        {/* Department */}
                        <div className="form-group">
                            <label>Department</label>
                            <select name="department" value={formData.department} onChange={handleChange}>
                                <option value="">Select Department</option>
                                <option value="Frontend">Frontend</option>
                                <option value="Backend">Backend</option>
                                <option value="Full Stack">Ful Stack</option>
                                <option value="Testing">Testig</option>
                            </select>

                            {errors.department && (
                                <p className="error">
                                    {errors.department}
                                </p>
                            )}
                        </div>
                        {/* Skills */}
                        <div className="form-group">
                            <label>Skills</label>
                            <div className="checkbox-group">
                                <label>
                                    <input
                                        type="checkbox"
                                        value="JavaScript"
                                        checked={formData.skills.includes("JavaScript")}
                                        onChange={handleSkillChange}
                                    />
                                    JavaScript
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        value="HTML"
                                        checked={formData.skills.includes("HTML")}
                                        onChange={handleSkillChange}
                                    />
                                    HTML
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        value="CSS"
                                        checked={formData.skills.includes("CSS")}
                                        onChange={handleSkillChange}
                                    />
                                    CSS
                                </label>
                                <label>
                                    <input type="checkbox" value="js" checked={formData.skills.includes("js")}
                                        onChange={handleSkillChange} />js
                                </label>
                                <label>
                                    <input type="checkbox" value="python"
                                        checked={formData.skills.includes("python")} onChange={handleSkillChange} />python
                                </label>
                                {errors.skills && (
                                    <p className="error">
                                        {errors.skills}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="buttons-group">
                        <button type="submit" onSubmit={handleSubmit}>Register</button>
                        <button type="button"
                            onClick={handleReset} className="reset-button"
                        >
                            Reset
                        </button>
                    </div>
                </form>
            </div>

        </div>
        {/* Submitted Data */}

        {submittedData && (

            <div className="result-card">

                <h2>
                    Employee Details
                </h2>

                <p>
                    <strong>Name:</strong>{" "}
                    {submittedData.name}
                </p>

                <p>
                    <strong>Email:</strong>{" "}
                    {submittedData.email}
                </p>

                <p>
                    <strong>Gender:</strong>{" "}
                    {submittedData.gender}
                </p>

                <p>
                    <strong>Department:</strong>{" "}
                    {submittedData.department}
                </p>

                <p>
                    <strong>Skills:</strong>{" "}
                    {submittedData.skills.join(", ")}
                </p>
            </div>)}
    </>

}
export default Registration;