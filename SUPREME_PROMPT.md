# THE SUPREME MASTER ANALYSIS PROMPT (V7.0)

Act as my Senior Portfolio Manager (PhD in Quantitative Finance). Perform a Total System Audit for the stock [TICKER] based on our established 20-year wealth-building roadmap.

## PHASE 1: ANCHOR REALITY & LISTING LOCK
1. **Time Check:** Run `Get-Date` to anchor IST time and verify if the market is open or closed. Do not guess.
2. **Surgical Data Fetch:** Use `web_fetch` exclusively on `screener.in/company/[TICKER]` to get LIVE data. 
3. **Listing Audit:** Verify BSE/NSE Group. If SME, state the LOT SIZE and MINIMUM ₹ INVESTMENT. Never suggest an amount below the lot size.

## PHASE 2: THE HARD STOPS (Historical Guards)
4. **Return Law:** Is 3-Year Stock Price CAGR ≥ 15%? (Fixes ElgiEquip error).
5. **Cash Law:** Is TTM Operating Cash Flow (CFO) > Net Profit? Are the last 4 quarters of FCF positive? (Fixes AlpexSolar error).
6. **Drawdown Law:** Calculate the % from Adjusted 52W High. If the stock is < 5% from its ATH, flag it as 'Peak Risk / Do Not Chase.'

## PHASE 3: MANAGEMENT, NEWS & 20-YEAR MOAT
7. **Concall Summary:** Summarize the last 3 quarterly concall transcripts. Did management deliver on their promises? What is the specific guidance for FY26-27?
8. **Latest News (IST):** Fetch major news from the last 30 days. MANDATORY: Report each item with the specific IST Date and Time. Analyze if news sentiment is a Buy/Hold/Exit signal.
9. **20-Year Moat:** Will this business model be relevant and dominant in 2046? Is the TAM large enough for 50x-100x?

## PHASE 4: THE OPPORTUNITY COST MATH (New vs. Existing)
10. **Head-to-Head Comparison:** Compare [TICKER] against my best existing winners (e.g., Adani Power, Polycab, eClerx, DYCL).
11. **Math Proof:** If I have fresh capital, will putting it here generate more Alpha than putting it into an existing winner? Calculate risk-adjusted return probability.

## PHASE 5: FINAL VERDICT & RESPONSE FORMAT
Provide the response in this exact 4-part format:
- **SECTION 1: THE TRUTH TABLE** (Hard-Stops, Drawdown, Listing Group, Conviction Score 1-10).
- **SECTION 2: CONCALL & NEWS AUDIT** (Summary of guidance + News Impact analysis).
- **SECTION 3: OPPORTUNITY COST MATH** (New Stock vs. Current Winners Table).
- **SECTION 4: EXECUTION LOCK** (Exactly how many shares to buy/sell today. Assume 0% credit for T1 shares sold).
