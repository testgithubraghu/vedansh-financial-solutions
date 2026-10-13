export interface EMIResult {
  emi: number;
  totalPrincipal: number;
  totalInterest: number;
  totalRepayment: number;
  monthlyBreakdown: { month: number; principal: number; interest: number; balance: number }[];
}

export function calculateEMI(
  principal: number,
  annualRate: number,
  tenureMonths: number
): EMIResult {
  if (principal <= 0 || tenureMonths <= 0) {
    return {
      emi: 0,
      totalPrincipal: 0,
      totalInterest: 0,
      totalRepayment: 0,
      monthlyBreakdown: [],
    };
  }

  const monthlyRate = annualRate / 12 / 100;
  let emi: number;

  if (annualRate === 0 || monthlyRate === 0) {
    emi = principal / tenureMonths;
  } else {
    emi =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
      (Math.pow(1 + monthlyRate, tenureMonths) - 1);
  }

  const totalRepayment = emi * tenureMonths;
  const totalInterest = totalRepayment - principal;

  const monthlyBreakdown: { month: number; principal: number; interest: number; balance: number }[] =
    [];
  let balance = principal;

  for (let month = 1; month <= tenureMonths; month++) {
    const interestPayment = balance * monthlyRate;
    const principalPayment = emi - interestPayment;
    balance = Math.max(0, balance - principalPayment);
    monthlyBreakdown.push({
      month,
      principal: principalPayment,
      interest: interestPayment,
      balance,
    });
  }

  return {
    emi: Math.round(emi),
    totalPrincipal: Math.round(principal),
    totalInterest: Math.round(totalInterest),
    totalRepayment: Math.round(totalRepayment),
    monthlyBreakdown,
  };
}
