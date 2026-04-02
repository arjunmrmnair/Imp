# GEMINI.md - Project Context

## Project Overview
This directory serves as a specialized **Stock Market Analysis System** for Indian equities, designed for AI agents (like Gemini) to perform deep fundamental research, screening, and investment recommendation tasks. The project uses a multi-tiered filtering framework (Hard Stops, Business Quality, Growth, Financial Health, Governance, Red Flags) to identify high-conviction investment opportunities with a focus on long-term value and multibagger potential.

The system is currently optimized for **YOLO Mode** (Default), which emphasizes aggressive growth hunting with disciplined data verification from `screener.in`.

## Key Files & Structure


### Date Check 
-Always fetch whats is todays date and based on todays date do all the data fetching for any of the user prompts.

### Core Instructions & Agents
-In any response regarding to stocks,for every stock tell whats discussed in the latest concalls.Also give a summary of how the stock is doing in latest quartely results based on **`Quarterly Criteria.txt`**
- **`stock-expert.instructions.md`**: The primary behavioral instructions for the AI Stock Expert. It defines the "YOLO Mode" logic, screening workflows, and mandatory verification checklists.
- **`.github/agents/stock-expert.agent.md`**: The agent configuration for the Gemini CLI, defining its purpose and capabilities.
- **`stock-critique.instructions.md`**: (Optional/Disabled) Instructions for a secondary agent to cross-verify and challenge the expert's recommendations.

### Rules & Criteria
- **`LEARNED_RULES.md`**: A dynamic knowledge base that evolves based on user feedback and past errors (e.g., the ELGIEQUIP error). It contains global rules and agent-specific rules (SE.1 to SE.11).
- **`Quarterly Criteria.txt`**: The "Source of Truth" for financial thresholds. It includes mandatory Tier 1 Hard Stops (e.g., 3-Year Stock CAGR ≥ 15%, D/E < 0.25) and specialized checks for cash flows, debt, and governance.
- **`Stock Selection.txt`**: High-level selection principles and strategy notes.

### Data & Recommendations
- **`Investment_Recommendation_April2_2026.md`**: An example output of a complete analysis session.
- **`Portfolio_Allocation_Summary.txt`**: Summary of recommended stock positions and capital deployment strategies.
- **`Polycab/`**: A directory containing stock-specific research documents (PDFs, CSVs).

## Operational Workflow

1.  **Session Initialization**: Read `LEARNED_RULES.md` and `Quarterly Criteria.txt` to align with the current investment philosophy and error-prevention history.
2.  **Data Sourcing**: Always use `screener.in` as the primary data source for Indian stocks.
3.  **Tiered Filtering**:
    - **Tier 1 (Hard Stops)**: Eliminate any stock failing critical metrics (Market Cap, PAT, ROCE, D/E, and the critical **3-Year Stock CAGR ≥ 15%**).
    - **Tier 2-4 (Quality & Growth)**: Analyze business quality, revenue/profit acceleration, and financial health.
    - **Tier 5-6 (Governance & Red Flags)**: Check promoter pledging, FII/DII holdings, and immediate red flags like declining margins or cash flow issues.
4.  **Verification**: Conduct specific "ALPEX SOLAR type" failure checks (FCF trend, debt trajectory, shareholding patterns).
5.  **Recommendation**: Generate detailed reports with proof of correctness, specific allocation advice (e.g., ₹ amounts), and timing guidance.

## Usage Guidelines
- **YOLO Mode**: Unless "Conservative" or "Defensive" mode is requested, the system defaults to aggressive growth focus (relaxed ROCE/Debt thresholds but strict data discipline).
- **Updates**: When the user provides feedback or corrections, the `LEARNED_RULES.md` file must be updated to ensure the system "learns" from every interaction.
- **Data Freshness**: Always fetch the latest quarterly and annual data before making recommendations.
