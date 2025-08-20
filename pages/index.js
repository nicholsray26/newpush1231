import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js")
        .then(() => console.log("✅ Service Worker registered"))
        .catch(err => console.error("❌ SW registration failed", err));
    }

    if ("Notification" in window) {
      Notification.requestPermission().then((permission) => {
        console.log("Notification permission:", permission);
      });
    }
  }, []);

  async function sendNotification() {
    const res = await fetch("/api/notify", { method: "POST" });
    const data = await res.json();

    if (Notification.permission === "granted") {
      new Notification(data.title, { body: data.body });
    } else {
      alert("Notifications are blocked. Please enable them in your browser settings.");
    }
  }

  return (
    <div style={{ fontFamily: 'Arial', textAlign: 'center', marginTop: '50px' }}>
      <h1>Push Notification Demo</h1>
      <button onClick={sendNotification}>Send Test Notification</button>
    </div>
  );
}