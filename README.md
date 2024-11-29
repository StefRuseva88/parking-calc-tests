# Parking Cost Calculator - Test Automation
[![JavaScript](https://img.shields.io/badge/Made%20with-JavaScript-F7DF1E.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![QUnit](https://img.shields.io/badge/tested%20with-QUnit-9C4CB4.svg)](https://qunitjs.com/)

## 📋 Overview
This repository contains the test automation project for [Parking Cost Calculator](https://shino.de/parkcalc/). The project aims to validate the accuracy, functionality and error handling of the calculator through both manual and automated testing techniques.
## 🛠️ Tools and Technologies
- **Programming Languages**: C#, JavaScript
- **Test Automation Frameworks**: Selenium WebDriver, NUnit, qUnit

## ✨ Features
- Automated functional tests for:
  - Parking cost calculations for all parking types.
  - Edge and boundary conditions (e.g., time transitions, weekly rates).
  - Input validations and error handling.
- Comprehensive manual test cases for UI/UX and responsiveness.

## 🧪 Testing Scope
### Functional Testing
- Validate parking cost calculations for:
  - **Valet Parking**: $18/day, $12 for ≤ 5 hours.
  - **Short-Term Parking**: $2 for the first hour, $1/additional 30 minutes, $24/day max.
  - **Long-Term Garage Parking**: $2/hour, $12/day max, $72/week (7th day free).
  - **Long-Term Surface Parking**: $2/hour, $10/day max, $60/week (7th day free).
  - **Economy Lot Parking**: $2/hour, $9/day max, $54/week (7th day free).
  
### Non-functional Testing
- **Performance Testing**: Simulate multiple users accessing the calculator simultaneously.
- **Accessibility Testing**: Ensure compatibility with screen readers and keyboard-only navigation.

## 📝 Test Plan
The test plan includes:
1. **Manual Test Cases**:
   - Available in the `/test-cases` folder.
   - Covers UI/UX, responsiveness, and boundary conditions.

2. **Automated Test Scenarios**:
   - Scripts located in the `/automation-tests` folder.
   - Written using qUnit and Selenium Web Driver

## 📄 License
This project is licensed under the MIT License. See the `LICENSE` file for details.

### 🤝 Contact
For any questions or suggestions, please open an issue in the repository.

---
### Happy Testing! 🚀

