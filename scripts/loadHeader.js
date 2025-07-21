function loadHeader(path) {
  return fetch(path)
    .then(response => {
      if (!response.ok) throw new Error("Failed to fetch Header");
      return response.text();
    })
    .then(html => {
      document.getElementById("header").innerHTML = html;
    })
    .catch(error => {
      console.error("Error loading Header:", error);
    });
}
