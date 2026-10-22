import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';
import { ConversionTrackingService } from './ConversionTrackingService';
import { TrackEventActionHandler } from './TrackEventActionHandler';

// The endpoint (Public.insertNativeConversionV1) refuses a row without page_id and
// interaction_id, and the A/B counters read rows by page + interaction_id. Before
// this, track() sent neither, so no conversion was ever recorded.
describe('ConversionTrackingService', () => {
  const fetchMock = vi.fn(() => Promise.resolve({ ok: true } as Response));

  beforeEach(() => {
    fetchMock.mockClear();
    vi.stubGlobal('fetch', fetchMock);
    ConversionTrackingService.setContext(null);
  });
  afterEach(() => vi.unstubAllGlobals());

  const body = () => JSON.parse((fetchMock.mock.calls[0] as any)[1].body);

  it('sends nothing without a context (the editor preview)', () => {
    ConversionTrackingService.track('i1');
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('sends nothing without an interaction id', () => {
    ConversionTrackingService.setContext({ publicUrl: 'https://x/api', pageId: 'p1' });
    ConversionTrackingService.track(undefined);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('records against the served page with the fields the endpoint and the counters read', () => {
    ConversionTrackingService.setContext({ publicUrl: 'https://x/api/', projectId: 'pr', pageId: 'variant-page', variantRule: 'r1', uuid: 'u1' });
    ConversionTrackingService.track('i1');
    expect((fetchMock.mock.calls[0] as any)[0]).toBe('https://x/api/fn-execute/conversion');
    expect(body()).toMatchObject({ page_id: 'variant-page', interaction_id: 'i1', project: 'pr', uuid: 'u1', variant_rule: 'r1', event_name: 'interaction_conversion' });
  });

  it('a conversion event marked as the goal is recorded once', () => {
    ConversionTrackingService.setContext({ publicUrl: 'https://x/api', pageId: 'p1' });
    const config: any = { platform: 'conversion', eventName: 'signup', payload: [] };
    TrackEventActionHandler.execute(config, { id: 'i1', isConversion: true });
    expect(fetchMock).not.toHaveBeenCalled();
    TrackEventActionHandler.execute(config, { id: 'i2', isConversion: false });
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(body()).toMatchObject({ interaction_id: 'i2', event_name: 'signup', page_id: 'p1' });
  });
});
