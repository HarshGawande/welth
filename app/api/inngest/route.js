import { serve } from "inngest/next";

import { checkBudgetAlerts, processRecurringTransaction, triggerRecurringTransactions } from "@/lib/inngest/function";
import { inngest } from "@/lib/inngest/client";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
   checkBudgetAlerts,
   triggerRecurringTransactions,
   processRecurringTransaction
 
  ],
});