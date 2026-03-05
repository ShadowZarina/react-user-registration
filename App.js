
/*
FUNCTION handle_form_submission(form_data):
    // 1. Get input data from the web form
    full_name = form_data.get("guest_full_name")
    room_number_selection = form_data.get("room_number")

    // 2. Validate input
    IF IS_EMPTY(full_name) OR IS_EMPTY(room_number_selection):
        DISPLAY_ERROR("All fields are required.")
        RETURN

    IF NOT IS_VALID_NAME_FORMAT(full_name):
        DISPLAY_ERROR("Please enter a valid full name.")
        RETURN

    IF NOT IS_NUMERIC(room_number_selection):
        DISPLAY_ERROR("Room number must be a number.")
        RETURN

    // 3. Prepare data for backend
    registration_data = {
        "Name": full_name,
        "Room": room_number_selection
    }

    // 4. Send request to the backend server
    CALL backend_process_registration(registration_data)

END FUNCTION
*/

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>

    function App() {
    return (
        <div>
            <nav class="navbar background">
                <ul class="nav-list">
                    <div class="logo">
                        <img src=
"https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210420155809/gfg-new-logo.png"
                        />
                    </div>
                    <li>
                        <a href="#courses">Courses</a>
                    </li>
                    <li>
                        <a href="#tutorials">Tutorials</a>
                    </li>
                    <li>
                        <a href="#jobs">Jobs</a>
                    </li>
                    <li>
                        <a href="#student">Student</a>
                    </li>
                </ul>

                <div class="rightNav">
                    <input
                        type="text"
                        name="search"
                        id="search"
                    />
                    <button class="btn btn-sm">
                        Search
                    </button>
                </div>
            </nav>

            <section class="section">
                <div class="box-main">
                    <div class="firstHalf">
                        <h1 class="text-big">
                            Chanterelle Resorts
                        </h1>
                        <p class="text-small">
                            
                        </p>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                            JavaScript Tutorial
                        </h1>
                        <p class="text-small">
                            
                        </p>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                            Java Programming Language
                        </h1>
                        <p class="text-small">
                            
                        </p>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                            What is Machine Learning?
                        </h1>
                        <p class="text-small">
                            
                        </p>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <p className="text-footer">
                    Copyright ©-All rights are reserved
                </p>
            </footer>
        </div>
    );
}

export default App;
