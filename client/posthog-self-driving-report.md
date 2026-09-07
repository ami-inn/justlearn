# PostHog Self-driving setup report

## Summary

PostHog Self-driving is configured for this learning platform. Session Replay, Error Tracking, and Support were enabled, and health, error, and support signal sources now feed the Self-driving inbox.

The focused scout troop and two Replay Vision monitors are armed. Findings should begin appearing in the [Self-driving inbox](https://us.posthog.com/project/588617/inbox) within about 30 minutes after traffic and recordings arrive.

## AI data processing

Approved by the organization-level setup gate.

## GitHub

GitHub is connected already through the PostHog GitHub App. GitHub Issues was not selected as a Self-driving source in this run.

## Products enabled

| Product | Result | Web configuration check |
|---|---|---|
| Session Replay | enabled | Browser initialization could not be located, so confirm it does not set `disable_session_recording: true`. |
| Error Tracking | enabled | Browser initialization could not be located, so confirm it does not set `capture_exceptions: false`. |
| Support (Conversations) | enabled | Tickets begin arriving only after an inbound email, inbox, or Slack channel is connected. |

## Signal sources

| Signal source | Action | Notes |
|---|---|---|
| `signals_scout` / `cross_source_issue` | retained as default enabled | The scout gate is enabled by default and needs no source-config row. |
| `health_checks` / `health_issue` | enabled | Source config `01a07c80-e6d9-7f9e-a7b2-ee921de08621`. |
| `error_tracking` / `issue_created` | enabled | Source config `01a07c80-e678-734a-b405-46b3d625300c`. |
| `error_tracking` / `issue_reopened` | enabled | Source config `01a07c80-e6f0-7633-ad3b-791b0ede67df`. |
| `error_tracking` / `issue_spiking` | enabled | Source config `01a07c80-e65d-7bd1-b230-1559dab55371`. |
| `conversations` / `ticket` | enabled | Source config `01a07c80-e67f-7c53-9845-7f4fe3a25ddd`; dormant until an inbound channel exists. |
| `session_replay` / `session_analysis_cluster` | skipped | Retired source; Replay Vision scanners provide this coverage. |
| `replay_vision` | skipped | Scanner `emits_signals` settings are the source configuration. |

## Connected tools

No external connected-tool responder was selected. GitHub Issues, Linear, Jira, Sentry, and Zendesk were offered; the selection was cancelled, so no warehouse sources or external responders were added.

## Scout troop

The project is enrolled with a verified limit of **100 runs per day**; **0** were used and **100** remained when configured. The current banner states: “Scouts are in early access. Each project gets up to 100 scout runs a day. Contact team-self-driving@posthog.com if you need more.”

### Enabled (4)

| Scout | Why it is enabled |
|---|---|
| `signals-scout-general` | Watches cross-product patterns and surfaces without a dedicated specialist. |
| `signals-scout-product-analytics` | Watches core learning-flow conversion and engagement patterns. |
| `signals-scout-web-analytics` | Watches traffic, attribution, landing pages, and bounce changes. |
| `signals-scout-health-checks` | Watches PostHog configuration health issues. |

### Disabled (23)

| Scout | Reason |
|---|---|
| `signals-scout-ai-observability` | No AI observability usage was evidenced. |
| `signals-scout-anomaly-detection` | Kept selective because no project profile or saved-time-series usage was available. |
| `signals-scout-apm` | No APM or OpenTelemetry usage was evidenced. |
| `signals-scout-conversations` | Support is newly enabled and has no inbound channel yet. |
| `signals-scout-csp-violations` | No CSP reporting configuration was evidenced. |
| `signals-scout-customer-analytics` | No account analytics usage was evidenced. |
| `signals-scout-data-pipelines` | No CDP, batch-export, or Hog Flow usage was evidenced. |
| `signals-scout-data-warehouse` | No warehouse source is connected. |
| `signals-scout-error-tracking` | Covered by the native Error Tracking responders. |
| `signals-scout-experiments` | No active experiment usage was evidenced. |
| `signals-scout-feature-flags` | No active feature-flag usage was evidenced. |
| `signals-scout-inbox-validation` | Fresh setup has no resolved reports to validate. |
| `signals-scout-insight-alerts` | No saved insight-alert usage was evidenced. |
| `signals-scout-logs` | No PostHog Logs usage was evidenced. |
| `signals-scout-mcp-tool-calls` | No MCP telemetry surface was evidenced for this product. |
| `signals-scout-observability-gaps` | Kept selective until event volume and insight coverage are established. |
| `signals-scout-replay-vision` | New Replay Vision scanners have no historical observations yet. |
| `signals-scout-revenue-analytics` | No payment or revenue data was evidenced. |
| `signals-scout-session-replay` | Covered by the Replay Vision scanners below. |
| `signals-scout-skills-store` | No project skill-store hygiene surface was evidenced. |
| `signals-scout-surveys` | No survey usage was found. |
| `signals-scout-tasks` | No PostHog Tasks usage was evidenced. |
| `signals-scout-web-vitals` | Web vitals collection was not evidenced. |

## Custom scouts

No custom scouts were created because the proposal was declined. Two candidates were proposed:

- **Search-to-lesson journey**: would watch whether learners can turn a search into opening a lesson or video moment; discriminator: search failures or a sustained drop in search-to-result-opening conversion.
- **Lesson-video completion**: would watch video-start-to-completion conversion; discriminator: completion falls while starts hold steady, especially by course or video provider.

The generic product-analytics scout already provides broad engagement coverage, while native Error Tracking and Replay Vision own their respective routes. If a custom scout later becomes noisy, set `emit: false` on its scout configuration to switch it to dry-run.

## Replay Vision scanners

A scanner is an LLM that watches individual session recordings on a schedule and pushes qualifying visible defects to the inbox. It is the only part of this setup that spends Replay Vision quota; findings arrive at half weight and need independent corroboration before promotion into a report.

| Brief | Scanner | Result | Query scope | Sampling | Estimate |
|---|---|---|---|---:|---|
| Breakage monitor | Learning-flow breakage | created | Recordings on `/search`, `/courses`, or `/lessons`; this covers course discovery, search, lesson opening, and embedded-video completion paths. | 50% | 0 observations / 0 credits per month currently. |
| Frustration monitor | Learning-flow frustration | created | Recordings containing `$rageclick` only, avoiding broad overlap with the URL-scoped breakage monitor. | 100% | 0 observations / 0 credits per month currently. |

No recordings existed during setup, so both monitors are armed and will begin working when Session Replay starts receiving recordings. The in-product sizing guide was unavailable, so an organization-level quota balance could not be separately verified; the created scanners’ server estimates are currently zero because no recordings match yet.

## Follow-ups

- [ ] Locate this app’s `posthog.init(...)` configuration and confirm it does not disable session recording or exception capture; the repository contains `posthog-js` capture calls but no initialization call was found in the application source scan.
- [ ] Connect an inbound Support channel (email, inbox, or Slack) in PostHog so the enabled Conversations responder can receive tickets.
- [ ] Generate normal browser traffic after confirming the SDK initialization so recordings, errors, and scanner estimates can begin populating.
- [ ] Review the Replay Vision organization quota after recordings begin, because the server-side sizing-guide skill was unavailable during setup.

## What happens next

Fresh scouts are picked up by the coordinator within roughly 30 minutes and draw from the verified daily run budget. Self-driving clusters findings into inbox reports; immediately actionable reports can start coding tasks.

## Repository changes

- Created `posthog-self-driving-report.md`.
- No application source files were modified.
