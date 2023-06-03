// Get the elements
const stickyNotesContainer = document.getElementById("sticky-notes");
const noteInput = document.getElementById("note-input");
const addButton = document.getElementById("add-button");

// Add event listener to the button
addButton.addEventListener("click", addNote);

// Add note function
function addNote() {
  const noteText = noteInput.value;

  if (noteText.trim() !== "") {
    // Create a new note element
    const noteElement = document.createElement("div");
    noteElement.className = "note";
    noteElement.innerHTML = `
      <textarea readonly>${noteText}</textarea>
      <div class="note-actions">
        <button class="delete-button"><i class="fas fa-trash-alt"></i></button>
        <button class="update-button"><i class="fas fa-sync-alt"></i></button>
      </div>
    `;

    // Add event listeners to delete and update buttons
    const deleteButton = noteElement.querySelector(".delete-button");
    const updateButton = noteElement.querySelector(".update-button");
    deleteButton.addEventListener("click", () => deleteNote(noteElement));
    updateButton.addEventListener("click", () => updateNoteEditMode(noteElement));

    // Add the note element to the container
    stickyNotesContainer.appendChild(noteElement);

    // Clear the input
    noteInput.value = "";
  }
}

// Delete note function
function deleteNote(noteElement) {
  noteElement.remove();
}

// Update note function
function updateNoteEditMode(noteElement) {
  const textarea = noteElement.querySelector("textarea");
  textarea.removeAttribute("readonly");
  textarea.focus();
}