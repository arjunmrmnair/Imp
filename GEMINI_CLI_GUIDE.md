# Gemini CLI User Guide & Best Practices

This guide provides the most effective ways to interact with the Gemini CLI agent for research, implementation, and portfolio management.

---

## **1. Top Frequently Used Commands (High-Signal)**

These are the core commands for everyday development and research. Use natural language to trigger them.

### **Research & Analysis**
- **Command:** `"Research [Stock/Technology] and check [Criteria]"`
- **Example:** `"Research Polycab and check its ROCE and Debt-to-Equity on screener.in"`
- **Best Practice:** Always specify the data source (e.g., `screener.in`) for more accurate results.

### **Implementation & Code Changes**
- **Command:** `"Implement [Feature/Rule] in [File]"`
- **Example:** `"Implement a new Tier 1 filter in Quarterly Criteria.txt for 3-Year Stock CAGR"`
- **Best Practice:** Use "Surgical Updates"—ask the agent to modify specific sections rather than rewriting entire files.

### **Validation & Testing**
- **Command:** `"Validate my [Portfolio/Code] against [Rules]"`
- **Example:** `"Validate my current portfolio against the SE.11 Multibagger Checklist"`
- **Best Practice:** Never assume success. Always ask the agent to **verify** and **confirm** against existing rules.

### **Git & Source Control**
- **Command:** `"Commit these changes with a clear message"`
- **Example:** `"Commit the new portfolio instructions and updated learned rules"`
- **Best Practice:** The agent will propose a message. Review it before confirming.

---

## **2. Standard Workflow: The "Triple-Phase" Cycle**

For complex tasks (like building a new portfolio or fixing a bug), use this 3-step sequence:

1.  **Phase 1: Research**
    - *"Analyze the current directory and explain the project structure."*
2.  **Phase 2: Strategy**
    - *"Propose a strategy for adding a new multibagger stock to my portfolio."* (Wait for approval before acting).
3.  **Phase 3: Execution & Validation**
    - *"Execute the strategy and verify the results against the 5-year CAGR rule."*

---

## **3. Advanced CLI Features**

### **Plan Mode (Safe Design)**
- **When to use:** For large, architectural changes.
- **Command:** `"Enter plan mode to design a new stock screening agent."*
- **Why:** It creates a "Draft" first without modifying your files.

### **Memory Tool (Global Preferences)**
- **Command:** `"Remember that I prefer YOLO mode for all my stock analysis."*
- **Why:** This persists across **ALL** future sessions.

### **Sub-Agents (Expert Delegation)**
- **Command:** `"Use the codebase_investigator to map the dependencies in my Polycab folder."*
- **Why:** Sub-agents are specialized and faster for repetitive or high-volume tasks.

---

## **4. Best Industry Practices**

1.  **Explain Before Acting:**
    - Always ask the agent to **explain its intent** before it modifies a file. This is your "Safety First" protocol.
2.  **Verification is Mandatory:**
    - A task is not complete until it is **Validated**. Always follow up an action with a request for verification: *"Now verify if that change reflects the correct 3-year CAGR."*
3.  **Atomic Instructions:**
    - Break large tasks into smaller, atomic steps. Instead of "Fix my portfolio," use "Check the debt ratio for Apar, then check the profit growth."
4.  **Credential Protection:**
    - **Never** share API keys, passwords, or secrets in the terminal. The agent is trained to protect them, but user caution is the first line of defense.
5.  **Context Efficiency:**
    - Use the agent's ability to read specific line ranges in large files to save tokens and speed up responses.

---

## **5. Slash Commands (The "Power" Tools)**

Slash commands (`/`) allow you to manage your session, settings, and workspace directly from the prompt.

### **Session & Help**
- **`/help`**: Displays help information for all available commands.
  - *Example:* `/help` (Use when you forget a command).
- **`/about`**: Shows current version and environment info.
  - *Example:* `/about` (Check if your CLI is up to date).
- **`/clear`**: Clears the terminal screen (Shortcut: **Ctrl+L**).
  - *Example:* `/clear` (Clean up a cluttered terminal).
- **`/quit` or `/exit`**: Exits the current interactive session.
  - *Example:* `/quit` (Safely close the CLI).

### **History & Checkpoints**
- **`/resume`**: List previous sessions or save a "checkpoint" of your current progress.
  - *Example:* `/resume save my-portfolio-start` (Save your progress before making big changes).
- **`/rewind`**: Navigate backward through your chat history (Shortcut: **Esc** twice).
  - *Example:* `/rewind` (Go back to a point before a specific error occurred).
- **`/restore`**: Undoes a specific file modification.
  - *Example:* `/restore [tool_call_id]` (Undo the last file edit if it was wrong).
- **`/compress`**: Summarizes the chat context to save tokens and speed up the session.
  - *Example:* `/compress` (Use this in long research sessions).

### **Configuration & Workspace**
- **`/settings`**: Opens an interactive editor to change CLI behavior.
  - *Example:* `/settings` (Customize themes or default agents).
- **`/model`**: Switch between different Gemini models (e.g., Flash vs. Pro).
  - *Example:* `/model set pro` (Switch to the smarter Pro model for complex logic).
- **`/init`**: Analyzes your directory and generates a `GEMINI.md` context file.
  - *Example:* `/init` (Run this when starting a new project).
- **`/plan`**: View or copy the current implementation plan from "Plan Mode."
  - *Example:* `/plan copy` (Copy the approved plan to your clipboard).

### **Utilities & Feedback**
- **`/stats`**: Shows usage statistics like tokens used or tool call frequency.
  - *Example:* `/stats model` (See how many tokens you've consumed).
- **`/bug`**: Files a GitHub issue directly from the CLI.
  - *Example:* `/bug Tool replacement failed on line 45` (Report a bug easily).
- **`/copy`**: Copies the last model response to your clipboard.
  - *Example:* `/copy` (Useful for pasting analysis into a doc).

---

## **6. Quick Reference "Hotkeys"**

- **`Ctrl+L`**: Clear screen (same as `/clear`).
- **`Esc` (twice)**: Rewind history (same as `/rewind`).
- **`Tab`**: Focus into the terminal for interactive commands (e.g., shell input).
- **`Ctrl+C`**: Interrupt a long-running process or tool call.
- **`Arrow Up/Down`**: Scroll through your own command history.

---
**Last Updated:** April 2, 2026
**Owner:** Gemini CLI Analysis System
