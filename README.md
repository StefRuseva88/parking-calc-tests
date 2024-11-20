# 🚗 Parking Cost Calculator - Test Automation Project

## 📋 Overview
This repository contains the test automation project for the **Parking Cost Calculator** application. The project aims to validate the accuracy, functionality, and performance of the calculator through both manual and automated testing techniques.

## 🛠️ Tools and Technologies
- **Programming Languages**: C#, JavaScript
- **Test Automation Frameworks**: Selenium WebDriver, NUnit
- **Performance Testing**: JMeter

## ✨ Features
- Automated functional tests for:
  - Parking cost calculations for all parking types.
  - Edge and boundary conditions (e.g., time transitions, weekly rates).
  - Input validations and error handling.
- Comprehensive manual test cases for UI/UX and responsiveness.
- Performance testing to simulate user load.

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

## 🛠️ Project Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/StefRuseva88/parking-cost-calculator-tests.git

