export type RiskStatus = "Green" | "Red" | "Yellow"

export interface DigitalAsset {
    address: string,
    protocol: string,
    balance: string,
    riskStatus: RiskStatus,
    icon: string
}