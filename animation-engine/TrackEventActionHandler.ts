import { TrackEventActionConfig } from "../../types/interaction";
import { ConversionTrackingService } from "./ConversionTrackingService";

// Global interfaces for window
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

export class TrackEventActionHandler {
  static execute(config: TrackEventActionConfig, interaction?: { id?: string; isConversion?: boolean }): void {
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
        // An interaction marked as the conversion goal is recorded once, by
        // InteractionManager, under this same event name.
        if (!interaction?.isConversion) {
          ConversionTrackingService.track(interaction?.id, config.eventName, payloadObj);
        }
        break;

      default:
        console.log(`[TrackEventActionHandler] Unknown platform: ${config.platform}`);
    }
  }
}
