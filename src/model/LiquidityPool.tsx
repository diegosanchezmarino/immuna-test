export type RiskStatus = "Green" | "Red" | "Yellow"

export interface LiquidityPool {
    address: string,
    protocol: string,
    balance: string,
    riskStatus: RiskStatus,
    icon: string
}