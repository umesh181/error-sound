# 🔊 Error Sound

Play meme sounds automatically when terminal commands succeed or fail.

Make your development workflow more fun and dramatic 🚀

---

## ✨ Features

- 🎵 Plays a success sound when a terminal command succeeds (exit code `0`)
- 💥 Plays a failure sound when a terminal command fails (exit code ≠ `0`)
- ⚙ Toggle success and failure sounds independently
- 🖥 Cross-platform support:
  - ✅ macOS
  - ✅ Windows
  - ✅ Linux
- 🚀 Uses real terminal exit codes (no keyword guessing)

---

## 🎬 How It Works

This extension listens to **terminal shell execution events** using VS Code’s built-in shell integration.

When a command finishes:

- Exit code `0` → Success sound plays
- Exit code `!= 0` → Failure sound plays

### Example

```bash
echo hello