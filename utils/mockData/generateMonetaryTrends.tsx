import { MonetaryTrend } from "@/constants/types";
  
  // Function to generate monetary trends moving backwards
  export const generateMonetaryTrends = (count: number): MonetaryTrend[] => {
    const trends: MonetaryTrend[] = [];
    const currentDate = new Date();
  
    for (let i = 0; i < count; i++) {
      const trendDate = new Date(currentDate);
      trendDate.setDate(trendDate.getDate() - i * 14); // Move back in two-week increments
  
      // Generate a random amount (between 1000 and 10000 for example)
      const amount = Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;
  
      // Generate a random movement (positive or negative)
      const movement = Math.random() < 0.5 ? 'positive' : 'negative';
  
      const trend: MonetaryTrend = {
        timeline: trendDate.toDateString(),
        amount: amount,
        movement: movement,
      };
  
      trends.push(trend);
    }
  
    return trends;
  };
  