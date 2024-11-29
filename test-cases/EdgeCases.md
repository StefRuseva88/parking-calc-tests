### Validation of Parking Rate Rules  

**Rules Summary for Validation**:  
1. **Valet Parking**: $18/day; $12 if ≤5 hours.  
2. **Short-Term Parking**: $2 first hour, $1 for each ½ hour; $24/day max.  
3. **Long-Term Garage Parking**: $2/hour, $12/day max, $72/week (7th day free).  
4. **Long-Term Surface Parking (North Lot)**: $2/hour, $10/day max, $60/week (7th day free).  
5. **Economy Lot Parking**: $2/hour, $9/day max, $54/week (7th day free).  

---

### Final Comprehensive Test Table  

| **Test Category**      | **Scenario**                                             | **Inputs**                                      | **Expected Output**                                                                 |
|-------------------------|---------------------------------------------------------|------------------------------------------------|-------------------------------------------------------------------------------------|
| **Valet Parking**       | ≤ 5 hours                                              | 5 hours                                        | $12.00                                                                             |
|                         | > 5 hours                                              | 8 hours                                        | $18.00                                                                             |
|                         | Multi-day stay                                         | 3 days                                         | $54.00                                                                             |
| **Short-Term Parking**  | ≤ 1 hour                                               | 1 hour                                        | $2.00                                                                              |
|                         | 1.5 hours                                              | 1 hour 30 minutes                              | $3.00                                                                              |
|                         | Daily max                                              | 10 hours                                       | $24.00                                                                             |
|                         | Multi-day stay                                         | 3 days                                         | $72.00                                                                             |
| **Long-Term Garage**    | Hourly charge                                          | 5 hours                                        | $10.00                                                                             |
|                         | Daily max                                              | 12 hours                                       | $12.00                                                                             |
|                         | Weekly rate (7th day free)                             | 8 days                                         | $72.00                                                                             |
|                         | Weekly rate edge case                                  | 7 days                                         | $72.00                                                                             |
| **Long-Term Surface**   | Hourly charge                                          | 5 hours                                        | $10.00                                                                             |
|                         | Daily max                                              | 12 hours                                       | $10.00                                                                             |
|                         | Weekly rate (7th day free)                             | 9 days                                         | $60.00                                                                             |
|                         | Weekly rate edge case                                  | 7 days                                         | $60.00                                                                             |
| **Economy Lot**         | Hourly charge                                          | 5 hours                                        | $9.00                                                                              |
|                         | Daily max                                              | 12 hours                                       | $9.00                                                                              |
|                         | Weekly rate (7th day free)                             | 7 days                                         | $54.00                                                                             |
|                         | Weekly rate edge case                                  | 8 days                                         | $54.00 + daily rate                                                                |
| **Leap Year Handling**  | Test February 29th                                    | Entry: Feb 28, Exit: Mar 1                     | Correctly calculate days, ensure valid date computation                            |
| **Invalid Inputs**      | Negative hours                                         | -5 hours                                       | Error: Invalid input                                                              |
|                         | Non-numeric inputs                                     | "abc"                                          | Error: Invalid input                                                              |
|                         | Large unexpected values                                | 10,000 hours                                   | Error: Invalid input                                                              |
| **Edge Cases**          | Maximum daily charge reached with odd hours            | 23 hours (short-term lot)                      | $24.00                                                                             |
|                         | Crossing weekly reset (free 7th day)                   | 13 days (economy lot)                          | $108.00 (7+7 days: 2 free)                                                        |

---
