const modal = document.getElementById("modal");

const toggleModal = (value) => {
  if (value === "open") modal.style.display = "flex", document.body.classList.add('active');
  if (value === "close") modal.style.display = "none", document.body.classList.remove('active');
};
