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

### Structural Wealth-Builder Rule (Owner's Mindset)
- **MANDATORY:** Always align analysis with the user's **20-year time horizon**. 
- Never suggest an "Exit" based on short-term brokerage price targets or "trader logic."
- **Exit Triggers:** Only suggest an exit if there is a **Structural Failure** (loss of moat, permanent margin collapse, or governance fraud).
- **The "Build Cycle" Check:** Before flagging a profit dip, check **CWIP (Capital Work In Progress)**. If CWIP is rising, the company is building future wealth; a temporary profit dip due to capex is a "Buy/Hold" signal, not a "Sell" signal.

### Real Profit Verification (CFO vs. PAT)
- **MANDATORY:** Never trust "Net Profit" alone. Always compare it to **Cash Flow from Operations (CFO)**.
- If CFO is significantly higher than PAT (as in Adani Power), the company is a "Cash Machine" regardless of optical profit dips.
- **Rule SE.7.4:** Check for "One-time Base Effects." A profit dip caused by a "High Base" from last year's one-time gains is an **Optical Dip** and must be ignored in 20-year analysis.

### Two-Tranche Execution Rule (50/50)
- **MANDATORY:** All new stock entries or major portfolio rebalances must follow a **50/50 Tranche Strategy**.
- **Tranche 1 (50%):** Deploy immediately (Market Order) to get "Skin in the Game" based on TTM momentum.
- **Tranche 2 (50%):** Hold in Liquidcase (The "Sniper Ammo").
- **Tranche 2 (Buy the Dip) Execution Framework (ZERO MISTAKE PROTOCOL):**
    When analyzing a market fall or when the user has fresh capital, the agent MUST perform the following steps:
    1.  **Calculate % Fall:** Fetch live CMP and compare it to the user's Average Buy Price (or 52-week high if no buy price exists). Identify stocks that have fallen ≥ 10%.
    2.  **The "Structural Check":** Before deploying cash into a fallen stock, verify that the fall is NOT due to a structural failure (e.g., fraud, permanent margin collapse). Check the latest news/concalls. If the TTM CFO is still strong and CWIP is intact, it is a "Healthy Dip."
    3.  **Prioritization:** If multiple stocks fall, prioritize capital allocation in this order:
        - Priority 1: "Forever Moats" (Apar, Polycab, Eicher, BEL, Adani Power) trading at >15% discount.
        - Priority 2: "Strategic Compounders" (eClerx, NAM-INDIA) with upcoming result triggers.
        - Priority 3: "Catalyst/Multibagger" (Alpex, DYCL) ONLY IF the specific catalyst (e.g., new plant) is still on track.
    4.  **Capital Allocation Math:** Ask the user for their total available cash (or read Liquidcase balance). Allocate funds to bring the most heavily discounted "Priority 1" stocks up to their target portfolio weights (e.g., Apar max 30%, Polycab max 20%). DO NOT over-allocate to a single stock just because it fell the most.

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

### Memory & Persistence Rules (AUTOMATED)

- **Rule M.1: Self-Initialization Mandate:** At the start of every session, the agent MUST immediately call `mempalace_diary_read` and `read_file` on `SESSION_HISTORY.md` to synchronize with the current roadmap.
- **Rule M.2: Silent Background Filing:** The agent will use `silent_save` in MemPalace to record major decisions and news updates without requiring user confirmation for every entry.
- **Rule M.3: IST Enforcement:** Every interaction, analysis, and news item MUST be timestamped with the current IST date and time. This is the primary key for the memory graph.

- **Rule M.4: SME Lot Protection:** NEVER suggest an SME stock (Bondada, GGBL, Sathlokhar, Rajesh Power) for any amount less than its current LOT size. If the budget is below ₹5 Lakhs, only suggest Main Board stocks.
- **Rule M.5: Mandatory Screener Fetch:** The agent is FORBIDDEN from mentioning a stock price, 52W high, or TTM metric without FIRST calling `web_fetch` on that stock's specific screener.in URL in the current turn.
- **Rule M.6: Daily Master Sync:** At the start of every session, the agent MUST read `STOCK_MASTER_DATA.csv` to ensure pricing context is historically accurate.
- **Rule M.7: System Clock Anchor:** At the start of every session, the agent MUST run `Get-Date` via shell to anchor its analysis to the actual system time and date.

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
- **Rule SE.7.3: EPS Quality & Acceleration Check:**
  - Verify that TTM EPS is accelerating (1Y > 3Y > 5Y pattern).
  - Check the "Other Income" component in Net Profit; if it exceeds 15% of PBT, the EPS quality is "Low."
  - Compare EPS growth against Operating Cash Flow growth; if EPS grows but Cash Flow falls, the EPS is "Low Quality."

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

- **Rule SE.12: Forward Valuation & Management Guidance Mandate (v3.3 - CRITICAL):**
  - **MANDATORY:** For every stock analysis, proof-test management reliability before forward-projecting.
  - **Step 0: Promise vs. Delivery Check:** Verify if the actual PAT for the current year met/exceeded the guidance provided by management in the *previous* year.
  - **Step 1: EPS Trajectory Quotes (MANDATORY):** Extract and explicitly quote the EPS/Profit growth rate guided in *last year's* concall AND compare it with the *current* concall guidance.
  - **Step 2: Next-Year Guidance & Exact Quote (MANDATORY):** Extract next year's PAT/Revenue guidance. You MUST include the exact quote from management regarding this guidance in every response.
  - **Step 3: The 3-Year CAGR Verification:** Explicitly conclude if the stock's forward trajectory supports a **20% to 25%+ CAGR for the next 3 years**.
  - **Step 4: CFO Reality Check:** If CFO/PAT < 50%, warn of "Paper Profit Trap."
  - **Step 5: The Ultimate Valuation & Upside Matrix:** 
    - **Forward PE:** `Current Market Cap / Suggested PAT`. (Tells us how cheap the stock is today based on next year's earnings).
    - **Target PE:** The exit multiple the stock *should* trade at (usually the 5Y/10Y Median PE or Industry PE).
    - **Forward Market Cap:** `Suggested PAT * Target PE`. (What the company will be worth if it hits the target).
    - **Upside Potential (X-Times):** `Forward Market Cap / Current Market Cap`. (The Wealth Multiplier: 2.0x means your money doubles).
  - **Step 6: Valuation Verdict:** Strict PEG Scale ( < 1.0 Deep Value | 1.0-1.5 Fair | > 2.0 Expensive).
  - **Step 7: Lifetime Verdict:** Explicitly state if the stock is a **"LIFETIME HOLD"** for 15-20 years based on moat and ROCE > 25%.
  - **Step 8: Mandatory News & Concall Summary:** You MUST include a summary of the latest news (last 4 months) and a summary of the past 3 concalls in your response without fail.
  - **Response Mandate:** Every response MUST explicitly state: "Verified current PAT against previous year's guidance: [MET/MISSED]", MUST provide the EXACT quotes for EPS growth (Past vs Current), MUST provide the latest news and 3-concall summary, and MUST definitively state if it meets the 20-25% 3-Year CAGR target, and MUST include the **Forward PE** and the **Upside Potential (X-Times)** wealth multiplier.

- **Rule SE.13: The Scuttlebutt Method (Digital Ground-Truthing):**
  - Do not trust financial numbers in a vacuum. You MUST execute Philip Fisher's Scuttlebutt method by performing deep-web searches for:
    1. **Employee Sentiment:** Are employees happy or leaving? (Glassdoor/AmbitionBox context).
    2. **Customer Obsession:** Do people actually like the product? (App reviews, Google reviews, Reddit forums).
    3. **Supplier/Competitor Noise:** Are there supply chain disputes or aggressive competitor moves?
  - **Response Mandate:** Include a dedicated "Scuttlebutt Findings" section in every stock audit.

- **Rule SE.14: Playwright Extraction Mandate (Visual Proof Protocol):**
  - **MANDATORY:** For all stock data verification, you MUST use `playwright-cli` to interact with `screener.in`.
  - **Process:** Open browser → Navigate to ticker → Scroll to "Concalls/Documents" at the bottom → Open latest transcript.
  - **Screenshot Proof:** You MUST take a screenshot of every transcript or PPT you open. 
  - **Response Mandate:** Every response MUST explicitly mention the filename of the captured screenshot as proof of data integrity.
  - **Goal:** This rule ensures that your "Management Quotes" and "Step 0" checks are based on visual verification of actual company documents, providing the user with a verifiable audit trail.


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
- **Data Source (Growing List):** [https://www.screener.in/screens/3595082/stocks-like-td-power/](https://www.screener.in/screens/3595082/stocks-like-td-power/) - Use this whenever the user asks for "growing companies" or "growing list" analysis.
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

**Last Updated**: April 11, 2026
**Next Review**: After 5-10 interactions per agent
**Owner**: Stock Market Analysis Systemdate "User Preferences" section when patterns emerge
4. **Effectiveness Tracking**: Periodically note which rules catch critical issues

---

**Last Updated**: April 2, 2026
**Next Review**: After 5-10 interactions per agent
**Owner**: Stock Market Analysis System