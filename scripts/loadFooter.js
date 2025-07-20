function loadFooter(path) {
  fetch(path)
    .then(response => {
      if (!response.ok) throw new Error("Failed to fetch footer");
      return response.text();
    })
    .then(html => {
      document.getElementById("footer").innerHTML = html;
    })
    .catch(error => {
      console.error("Error loading footer:", error);
    });
}
