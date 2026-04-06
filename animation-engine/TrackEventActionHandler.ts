import { TrackEventActionConfig } from "../../types/interaction";

// Global interfaces for window
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

export class TrackEventActionHandler {
  static execute(config: TrackEventActionConfig): void {
    console.log(`[TrackEventActionHandler] Executing ${config.platform} event: ${config.eventName}`);

    const payloadObj = config.payload.reduce((acc, curr) => {
      if (curr.key) acc[curr.key] = curr.value;
      return acc;
    }, {} as Record<string, string>);

    switch (config.platform) {
      case "google-analytics":
        if (typeof window.gtag === "function") {
          window.gtag("event", config.eventName, payloadObj);
          console.log(`[TrackEventActionHandler] Successfully fired Google Analytics event: ${config.eventName}`);
        } else {
          console.log(`[TrackEventActionHandler] window.gtag is not defined!`);
        }
        break;

      case "facebook-pixel":
        if (typeof window.fbq === "function") {
          window.fbq("trackCustom", config.eventName, payloadObj);
          console.log(`[TrackEventActionHandler] Successfully fired Facebook Pixel event: ${config.eventName}`);
        } else {
          console.log(`[TrackEventActionHandler] window.fbq is not defined!`);
        }
        break;

      case "conversion":
        const publicUrl = (import.meta as any).env.VITE_API_URL || "https://api.blinkpage.com";
        fetch(`${publicUrl}/fn-execute/conversion`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            event_name: config.eventName,
            payload: payloadObj,
            timestamp: new Date().toISOString()
          })
        })
        .then((res) => {
          if(!res.ok) throw new Error("Network response was not ok");
          console.log(`[TrackEventActionHandler] Successfully saved Native Conversion: ${config.eventName}`);
        })
        .catch((err) => {
          console.log(`[TrackEventActionHandler] Failed to save Native Conversion: ${err.message}`);
        });
        break;

      default:
        console.log(`[TrackEventActionHandler] Unknown platform: ${config.platform}`);
    }
  }
}
