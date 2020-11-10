import React from 'react';

export default function Form(props) {
	const { values, update, submit } = props;

	const onChange = (evt) => {
        const { name, value } = evt.target;
        update(name, value);
    };
// need to edit code so form clears on submit but doesn't reload the page.
    const onSubmit = (evt) => {
        evt.preventDefault()
        submit();
    }

	return (
		<form className='form' onSubmit={onSubmit}>
                <h2>Input New Team Member</h2>
			<div className='form-fields'>
				{/* name */}
                <div className='form-line'>
			        <label>Name </label>
                    <input
                        type='text'
                        name='name'
                        onChange={onChange}
                        value={values.name}
                        placeholder='Name'
                        required
                    />
                </div>
				{/* email */}
                <div className='form-line'>
                    <label>Email </label>
                    <input
                        type='email'
                        name='email'
                        onChange={onChange}
                        value={values.email}
                        placeholder='Email'
                        required
                    />
                </div>
				{/* job title */}
                <div className="form-line">
                    <label>Job Title </label>
                    <input
                        type='text'
                        name='jobTitle'
                        onChange={onChange}
                        value={values.jobTitle}
                        placeholder='Job Title'
                        required
                    />
                </div>
				{/* location */}
                {/* dropdown menu*/}
                <div className="form-line">
                    <label>Closest Location </label>
                    <select name='location' value={values.location} onChange={onChange} required>
                        <option value=''>--- Select Location ---</option>
                        <option value='Champaign, IL'>Champaign, IL</option>
                        <option value='Los Angeles, CA'>Los Angeles, CA</option>
                        <option value='Philadelphia, PA'>Philadelphia, PA</option>
                        <option value='Abroad'>Abroad</option>
                        <option value='Remote'>Remote</option>
                    </select>
                </div>
			</div>
				{/* submit button */}
				<div className='submit'>
					<button>Submit</button>
				</div>
		</form>
	);
}