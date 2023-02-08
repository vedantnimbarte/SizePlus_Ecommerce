import currency from "currency.js";

export function formatMoney(amount: number | string | null): string {
	if (!amount) return "";

	return new currency(amount, { symbol: "₹" }).format();
}

export function getCurrencySymbol() {
	return new currency(0, { pattern: "!" }).format();
}
