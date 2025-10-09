const bookingForm = document.getElementById("bookingForm");
if (bookingForm) {
    bookingForm.addEventListener("submit", function(e) {
                e.preventDefault();

                // get user input
                const nameInput = document.getElementById("name");
                const fromInput = document.getElementById("from");
                const toInput = document.getElementById("to");
                const dateInput = document.getElementById("date");
                const seatsInput = document.getElementById("seats");

                const name = nameInput ? nameInput.value : "";
                const from = fromInput ? fromInput.value : "";
                const to = toInput ? toInput.value : "";
                const date = dateInput ? dateInput.value : "";
                const seats = seatsInput ? seatsInput.value : "";

                // show confirmation dynamically
                const confirmation = document.getElementById("confirmation");
                const details = document.getElementById("details");

                if (confirmation) {
                    confirmation.style.display = "block";
                }
                if (details) {
                    details.innerHTML = `
        // clear the form after booking
        bookingForm.reset();
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Seats:</strong> ${seats}</p>
const form = document.getElementById("bookingForm");
if (form) {
    form.reset();
}       (bookingForm as HTMLFormElement).reset();
    });
}
const form = document.getElementById("bookingForm") as HTMLFormElement | null;
if (form) {
    form.reset();
}