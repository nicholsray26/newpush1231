import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js")
        .then(() => console.log("✅ Service Worker registered"))
        .catch(err => console.error("❌ SW registration failed", err));
    }
  }, []);

  async function sendNotification() {
    await fetch("/api/notify", { method: "POST" });
  }

  return (
    <div style={{ fontFamily: 'Arial', textAlign: 'center', marginTop: '50px' }}>
      <h1>Push Notification Demo</h1>
      <button onClick={sendNotification}>Send Test Notification</button>
    </div>
  );
}
