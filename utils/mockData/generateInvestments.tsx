import faker from 'faker';
import { Investment } from '@/constants/types'; // Assuming your types are in a file named 'types.ts'
import { companies } from '@/constants';
// Function to generate mock investments with a limited total dollar amount
const generateInvestments = (totalAmount: number): Investment[] => {
  const investments: Investment[] = [];
  const movements = ['positive', 'negative'];

  let remainingAmount = totalAmount;

  while (remainingAmount > 0) {
    const trendDate1 = faker.date.past();
    const trendDate2 = faker.date.between(trendDate1, new Date());

    // Determine a random investment amount, ensuring it doesn't exceed the remaining amount
    const maxInvestment = remainingAmount > 1000 ? 1000 : remainingAmount;
    const investmentAmount = parseFloat((Math.random() * maxInvestment).toFixed(2));
    
    // Deduct the investment amount from the remaining amount
    remainingAmount -= investmentAmount;

    const investment: Investment = {
      company: companies[Math.floor(Math.random() * companies.length)],
      amount: `${investmentAmount.toFixed(2)} USD`,
      trend: {
        timeline: `${trendDate1.toDateString()} - ${trendDate2.toDateString()}`,
        movement: movements[Math.floor(Math.random() * movements.length)],
      },
    };

    investments.push(investment);
  }

  return investments;
};

export default generateInvestments;
