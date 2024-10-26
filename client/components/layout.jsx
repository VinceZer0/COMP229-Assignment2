/*  File Name: layout.jsx
  Student's Name: Vince Diego
  Student ID: 301196712 
  Date: September 28, 2024 
*/

import React from 'react';
import { Link } from 'react-router-dom';
export default function Layout() {
 return (
<>

<h1>My Portfolio</h1>
 <nav>
 <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/service">Service</Link>| <Link to="/project">Project</Link>| <Link to="/contact">Contact</Link>
 </nav>
 <br/>
<br/>
 <hr />
 </>

 );
}
