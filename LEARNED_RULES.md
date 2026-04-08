# AI Agent Learned Rules Knowledge Base

This document tracks all learned rules across agents and sessions. It serves as the growing intelligence layer for the stock market analysis system.

## User Preferences & Mode Settings

### Operating Mode: YOLO (DEFAULT - April 2, 2026)
- **Status**: ACTIVE - All future prompts will run in YOLO mode by default
- **Override**: Only if user explicitly requests "conservative mode" or "defensive mode"
- **Definition**: Aggressive growth-focused analysis with higher risk tolerance and relaxed filtering thresholds
- **Key Changes**:
  - ROCE threshold relaxed to 20-22% (from strict 25%) if strong growth trajectory
  - Debt-to-Equity ratio can go up to 0.35-1 if justified by cash generation
  - Accept emerging companies with strong momentum even if shorter history
  - Focus on 10x+ multibagger potential over downside protection
  - Consider turnaround/recovery plays with clear catalysts
- **Maintained Discipline**: Data verification (fetch screener.in) and Rule SE.11 multibagger checklist still strictly enforced
- **Why**: User explicitly requested YOLO mode for all future prompts to enable aggressive growth hunting

## Global Rules (Apply to All Agents)

### TTM Growth Analysis (Priority for Every Decision)
- **MANDATORY:** Always prioritize Trailing Twelve Month (TTM) values (Sales, Profit, OPM, EPS) for any stock analysis or investment decision.
- Even if annual or quarterly results are pending, use TTM metrics to identify current momentum.
- If TTM growth is accelerating (e.g., TTM EPS > 5-Year Average EPS), this must be factored into the final recommendation.
- **Rule SE.7.2:** Always verify TTM OPM stable or improving before a 'Buy' or 'SIP' signal.

### Session Initialization & Proactive Monitoring
- **MANDATORY:** At the start of every new session, the agent MUST read `PORTFOLIO_WATCHLIST.md` to identify any upcoming result dates, new concall transcripts, or breaking news events.
- If today's date matches a "Result Date" or "Board Meeting Date" in the calendar, the agent MUST immediately (proactively) recommend the next action (Buy Tranche, SIP, or Exit) based on the results, even if the user hasn't asked.
- **News Tracking:** Always check the 'News' and 'Concalls' section on Screener.in for all holdings by clicking on the company name. Any negative impact > 5% must be flagged with a 'Next Action' recommendation.

### Data Verification
- **MANDATORY:** Before suggesting ANY stock, fetch and verify latest data from screener.in (consolidated financials, quarterly results, balance sheet, cash flows, ratios)
- Always verify critical numbers (PE, debt ratios, growth rates) across at least 2 sources
- Flag significant discrepancies between sources (>5% variance) as data quality issues
- Prefer company filings (BSE, NSE) over aggregator sites for most recent data
- Check data dates; flag outdated information if >3 months old
- Cross-check sales trends, profit quality, and balance sheet health before any recommendation
- For any stock always check the concalls from screener.com and provide a summary in response what was discussed .Check for RED Flags if any.

### Investment Philosophy Consistency
- Maintain long-term value investing focus: no speculation or short-term trading advice
- Validate all recommendations against 100-crore portfolio experience and fundamentals
- Never recommend penny stocks or highly speculative instruments
- Emphasize conservative approach: better to miss upside than suffer downside surprises (CAVEAT: relaxed in YOLO mode for higher conviction plays)
- **PORTFOLIO SANCTITY RULE (CRITICAL):** Once a stock is allocated to the user's core portfolio (e.g., the "Super 5"), NEVER suggest selling it or swapping it for a "better" screener stock just because rankings change. ONLY suggest selling if the stock explicitly fails the "Phase 5 Hard Exit" rules (e.g., 3Y profit CAGR drops below 10%, major governance red flag, or debt trap). Screener rankings are for *new* capital, not for disrupting existing 15-year holds.

## Stock Expert Agent Rules

### Screening & Selection
- Rule SE.1: Always prioritize ROCEconsistency over absolute ROCE value; prefer 25%+ ROCE over 3+ years
- Rule SE.2: When debt-to-equity is close to 1 limit, manually verify debt structure (short-term vs long-term)
- Rule SE.3: For pledging assessment, check recent shareholding pattern trends; increasing pledge = warning sign
- Rule SE.4: Verify free cash flow calculation: (Operating Cash Flow - Capex); don't rely on automated ratios
- Rule SE.4.1:For any stock always check the concalls from screener.comfor your analysis.Check for RED Flags if any.

### Quarterly Analysis
- Rule SE.5: Compare current quarter margins with 8-quarter average to identify sustainability of profit growth
- Rule SE.6: YoY sales growth >20% requires explanation: organic growth? Capacity expansion? Acquisition?
- Rule SE.7: Check EPS quality: ensure earnings not driven by one-time gains or other income. YoY EPS growth should happen - This is very Important
- Rule SE.7.1:For any stock always check the concalls from screener.comfor your analysis.Check for RED Flags if any.


### Investment Recommendations
- Rule SE.8: Always provide specific allocation; e.g., "₹1.5L in X Stock, ₹1.5L in Y Stock" not vague percentages.This is sample dont us this .Do your analysis.
- Rule SE.9: Proof of correctness requires: 5-year CAGR, peer comparison, and specific quarterly metrics
- Rule SE.10: Timing advice must include: current price vs. 52-week range, target entry levels (e.g., -10% correction)

### Multibagger Stock Selection (For 10x Potential - Critical Rule)
- **Rule SE.11.1 : USe this only when user asks for multibagger stocks.Not for in general stocks**
- **Rule SE.11: BEFORE recommending ANY multibagger stock, MUST fetch screener.in data AND verify ALL:**
  - Sales CAGR (5-year): >20% (strong organic growth, not one-time gains)
  - Profit CAGR (5-year): >20% (consistent earnings power)
  - ROCE (current): >25% (capital efficiency requirement)
  - ROE (current): >15% (shareholder returns requirement)
  - Debt-to-Equity: <0.5 (financial safety)
  - Free Cash Flow: Consistently positive YoY (real earnings quality)
  - Operating Margins: Stable or expanding, no compression >200 bps
  - Latest Quarterly Data: Verify growth trajectory not slowing
  - Red Flags: NPA >3% (banks), promoter pledge >5%, debt spikes, -ve FCF
  - **Rule SE.11 Enforcement:** If ANY above metric fails → DO NOT recommend as multibagger. Classify as recovery/turnaround play or avoid.


## Stock Critique Agent Rules

### Standard Critique Checks
- Rule SC.1: PE ratio validation: calculate manually from Net Profit / Market Cap / No. of Shares; compare with screener
- Rule SC.2: Shareholding validation: ensure DII + FII + Promoter + Public ≈ 100%; flag if doesn't add up
- Rule SC.3: Debt validation: check if debt-to-equity correctly calculated from balance sheet
- Rule SC.4: Growth validation: verify YoY growth calculations using sequential quarter data

### Red Flags to Always Check
- Rule SC.5: Promoter pledge >20% + pledged % increasing = major red flag for distress
- Rule SC.6: Operating margin compression >200 bps YoY without clear explanation = question sustainability
- Rule SC.7: Free cash flow negative while net profit positive = earnings quality concern
- Rule SC.8: Debt spike >50% YoY = require explanation (debt-funded expansion? Acquisition?)
- Rule SC.9: YoY Quarterly EPS growth should happen.It should not fall.

### Cross-Verification Methodology
- Rule SC.9: For any recommendation, cross-verify PE against Moneycontrol, BSE, and company financials
- Rule SC.10: For growth claims, verify with latest concall transcripts and management guidance
- Rule SC.11: For peer comparison, use min 3 peers; calculate average metrics for contextualization

## Session History & User Preferences

### User Preferences (To Be Updated)
- *Format Preference*: [To be filled based on feedback]
- *Risk Preference*: [Conservative/Moderate/Aggressive - to be filled]
- *Sector Preferences*: [Any sectors to avoid/prefer - to be filled]
- *Allocation Style*: [Equal weight / Risk-weighted / Conviction-based - to be filled]

### Feedback Log
- **2026-04-02 (Session 1)**: Initial session - established baseline rules for both agents
- **2026-04-02 (Session 2)**: Nifty correction scenario - recommended POLYCAB + EICHER for ₹3L
  - **Validation**: Both stocks confirmed in streamer.in falling stocks screen with FY26 strong momentum
  - **Rule Validation**: SE.5 (margin stability verified), SE.8 (specific ₹1.5L allocations), SE.9 (CAGR 20%+), SE.10 (19-21% discount to 52-week highs), SC.5-8 (no red flags)
  - **Key Finding**: Market corrections create actionable opportunities when fundamentals remain intact; both recommendations met all quarterly criteria despite price pullback
  - **Process Effective**: Two-stage workflow (fetch from screener → apply quarterly criteria → recommend) working as designed
  - **Next Pattern**: Monitor whether market recovers or extends correction to validate timing rule SE.10

### Process Discipline
- Always fetch the current date and time before responding to any query.
- Always use the latest available data for all analysis and recommendations and any users prompts
- Update this learning file whenever a new process rule or user preference is established.

## How to Update This File

1. **New Rule Creation**: Add rule to relevant section with format: `Rule XX.Y: [Condition] → [Action]`
2. **Rule Refinement**: If existing rule proves incomplete, append "; also check [additional check]"
3. **User Preference Addition**: Update "User Preferences" section when patterns emerge
4. **Effectiveness Tracking**: Periodically note which rules catch critical issues

---

**Last Updated**: April 2, 2026
**Next Review**: After 5-10 interactions per agent
**Owner**: Stock Market Analysis System