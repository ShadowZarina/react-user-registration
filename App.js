
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
