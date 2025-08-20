self.addEventListener("push", function(event) {
  const data = event.data ? event.data.text() : "No payload";
  event.waitUntil(
    self.registration.showNotification("New Notification", {
      body: data,
    })
  );
});
