export class ConversionTrackingService {
  static track(): void {
    const publicUrl = (import.meta as any).env.VITE_API_URL || "";
    if (!publicUrl) return;
    fetch(`${publicUrl}/fn-execute/conversion`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event_name: "interaction_conversion",
        timestamp: new Date().toISOString(),
      }),
    }).catch(() => {});
  }
}
