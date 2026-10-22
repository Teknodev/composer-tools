/**
 * Where a conversion is recorded, and against which page.
 *
 * The published site sets it once it knows the page it serves — for an A/B
 * test that is the variant the visitor got, not the page the slug names, since
 * the goal is counted per served page. The editor never sets it, so previews
 * record nothing.
 */
export type ConversionContext = {
  /** Spica public API base, e.g. https://…/api */
  publicUrl: string;
  projectId?: string;
  pageId?: string;
  variantRule?: string;
  uuid?: string;
};

let context: ConversionContext | null = null;

export class ConversionTrackingService {
  static setContext(next: ConversionContext | null): void {
    context = next;
  }

  /**
   * Records one conversion of `interactionId`. The endpoint refuses a row
   * without page_id and interaction_id, so without both nothing is sent.
   */
  static track(interactionId?: string, eventName: string = "interaction_conversion", payload?: Record<string, string>): void {
    if (!context || !context.publicUrl || !context.pageId || !interactionId) return;
    fetch(`${context.publicUrl.replace(/\/$/, "")}/fn-execute/conversion`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // A navigate interaction leaves the page right after the click.
      keepalive: true,
      body: JSON.stringify({
        page_id: context.pageId,
        interaction_id: interactionId,
        event_name: eventName,
        project: context.projectId,
        uuid: context.uuid,
        variant_rule: context.variantRule,
        payload,
        timestamp: new Date().toISOString(),
      }),
    }).catch(() => {});
  }
}
