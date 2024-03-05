import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    phoneNumber:"",
    password:"",
    confirmPassword:"",
    age:"",
    gender:"",
    intrest:[],
    birthDate:""
  });
  const handleChange = (e) =>{
    const { name, value } = e.target;
    setFormData({...formData, [name]:value})
  }
  const handleSubmit = () =>{};

  return (
    <div>
      <h2>Form Validation</h2>
      <div className='Comp'>
        <label>First Name:</label>
        <input
        type='text'
        name='firstName'
        placeholder='Enter Your First Name'
        onChange={handleChange}
        value={formData.firstName}
        />
      </div>
      <div className='Comp'>
        <label>Last Name:</label>
        <input
        type='text'
        name='lastName'
        placeholder='Enter Your Last Name'
        onChange={handleChange}
        value={formData.lastName}
        />
      </div>
      <div className='Comp'>
        <label>Email:</label>
        <input
        type="email"
        name='email'
        placeholder='Enter Your Email'
        onChange={handleChange}
        value={formData.email}
        />
      </div>
      <div className='Comp'>
        <label>Phone Number:</label>
        <input
        type="number"
        name='phoneNumber'
        placeholder='Enter Your Phone Number'
        onChange={handleChange}
        value={formData.phoneNumber}
        />
      </div>
      <div className='Comp'>
        <label>Password:</label>
        <input
        type='text'
        name='password'
        placeholder='Enter your Password'
        onChange={handleChange}
        value={formData.password}
        />
      </div>
      <div className='Comp'>
        <label>Confirm Password:</label>
        <input
        type="password"
        name='confirmPassword'
        placeholder='Confirm Password'
        onChange={handleChange}
        value={formData.confirmPassword}
        />
      </div>
      <div className='Comp'>
        <label>Gender:</label>
        <select name='gender' value={formData.gender} onChange={handleChange}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className='Comp'>
        <label>Age:</label>
        <input
        type="number"
        name='age'
        value={formData.age}
        onChange={handleChange}
        />
      </div>
      <div className='Comp'>
        <label>Intrest:</label>
        <label>Coding</label>
        <input
        type="checkbox"
        name='intrest'
        onChange={handleChange}
        value={formData.intrest.includes("Coding")}
        />
        <label>Cooking</label>
        <input
        type="checkbox"
        name='intrest'
        onChange={handleChange}
        value={formData.intrest.includes("Cooking")}
        />
        <label>Swimming</label>
        <input
        type="checkbox"
        name='intrest'
        onChange={handleChange}
        value={formData.intrest.includes("Swimming")}
        />
      </div>
      <div className='Comp'>
        <label>Birth Date:</label>
        <input
        type="date"
        name='birthDate'
        onChange={handleChange}
        value={formData.birthDate}
        />
      </div>

      <div className='Comp'>
        <button type="submit">Submit</button>
      </div>
    </div>
  )
}

export default App
